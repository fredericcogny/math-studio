# Math Studio

A local-first mathematics learning studio for anonymous learners entering French `5e`, `3e`, and `1re`. Lessons are plain Markdown, exercises are deterministically generated, and progress remains in the browser.

## Start

Nix flakes must be enabled on the host.

```bash
nix develop
npm install
npm run dev
```

The flake supplies Node.js 22, Git, GitHub CLI, Antigravity, Bubblewrap, nsjail, curl, jq, and ripgrep. `package-lock.json` pins the JavaScript dependency graph after the first install.

Useful commands:

```bash
npm run dev       # local Vite server
npm run test      # deterministic engine tests
npm run build     # type-check and production build
npm run check     # tests and build
gh auth status    # inspect GitHub authentication when configured
```

## Antigravity isolation

Launch the IDE normally from the development shell:

```bash
antigravity .
```

Antigravity settings are user-level and therefore cannot safely be committed by this repository. Before allowing autonomous commands, set these options in **Antigravity User Settings**:

1. Leave **Agent Non-Workspace File Access** disabled.
2. Enable **Terminal Sandboxing**. On Linux, Antigravity uses nsjail.
3. Enable **Sandbox Allow Network** so research, package downloads, and GitHub work.
4. Keep this repository as the only project workspace root.
5. Do not enable strict mode for this use case because it forces sandbox network access off.

The workspace policy in `.agents/rules/project.md` adds behavioural guidance, but rules alone are not a security boundary. The native terminal sandbox and workspace access setting provide the actual boundary.

## Other CLI agents

Run a CLI agent or a shell through the Bubblewrap boundary:

```bash
agent-shell
agent-shell some-agent --its-options
```

The sandbox exposes the repository at `/workspace`, only the read-only Nix closures of its approved CLI tools, temporary devices and isolated process information, and minimal read-only DNS configuration. It has unrestricted network access. It does not expose the host home directory, the rest of the Nix store, global Git configuration, SSH keys, editor settings, or other working trees. Its environment is cleared before a small allowlist is restored.

Bubblewrap relies on unprivileged user namespaces. If the host distribution disables them, `agent-shell` will fail rather than silently run without isolation.

## GitHub security

`gh` is installed but this repository does not create a remote or authenticate automatically. Normal interactive use can authenticate outside the agent sandbox with `gh auth login`.

For agent GitHub access, create a fine-grained token restricted to this future repository and pass it only for the command that needs it:

```bash
GH_TOKEN=... agent-shell gh repo view
```

`GH_TOKEN` is the sole credential intentionally forwarded by `agent-shell`. A network-enabled process that can read a token can also transmit it, so no local sandbox can make a broad account token safe. Never give an agent a general account token or personal SSH key.

## Data and content

- Progress is stored in browser `localStorage` under `maths-studio.progress.v1`.
- No learner names are included in profiles or tracked files.
- Clearing site data resets progress; export/import can be added before progress becomes valuable.
- Curriculum direction is documented in `docs/CURRICULUM.md`.
- Lesson authoring is documented in `docs/CONTENT.md`.
