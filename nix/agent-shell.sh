set -euo pipefail

root="$(git rev-parse --show-toplevel)"

if [[ "$PWD" != "$root" && "$PWD" != "$root/"* ]]; then
  printf 'agent-shell must be started from inside the repository\n' >&2
  exit 1
fi

mkdir -p "$root/.cache" "$root/.sandbox"

sandbox_term="${TERM:-xterm-256color}"

command=("$@")
if [[ ${#command[@]} -eq 0 ]]; then
  command=(bash)
fi

bwrap_args=(
  --clearenv
  --die-with-parent \
  --new-session \
  --unshare-all \
  --share-net \
  --dir /nix \
  --dir /nix/store \
  --dev /dev \
  --proc /proc \
  --tmpfs /tmp \
  --dir /tmp/home \
  --dir /tmp/gh \
  --dir /workspace \
  --bind "$root" /workspace \
  --dir /bin \
  --ro-bind "$(command -v bash)" /bin/bash \
  --symlink bash /bin/sh \
  --dir /usr \
  --dir /usr/bin \
  --ro-bind "$(command -v env)" /usr/bin/env \
  --dir /etc \
  --ro-bind-try /etc/hosts /etc/hosts \
  --ro-bind-try /etc/nsswitch.conf /etc/nsswitch.conf \
  --ro-bind-try /etc/resolv.conf /etc/resolv.conf \
  --chdir /workspace \
  --setenv HOME /tmp/home \
  --setenv GH_CONFIG_DIR /tmp/gh \
  --setenv NPM_CONFIG_CACHE /workspace/.cache/npm \
  --setenv PATH "$AGENT_PATH" \
  --setenv SSL_CERT_FILE "$SSL_CERT_FILE" \
  --setenv TERM "$sandbox_term" \
  --setenv PROJECT_ROOT /workspace \
)

# Opting into GH_TOKEN is the only way a credential enters the sandbox.
if [[ -n "${GH_TOKEN:-}" ]]; then
  bwrap_args+=(--setenv GH_TOKEN "$GH_TOKEN")
fi

while IFS= read -r store_path; do
  bwrap_args+=(--ro-bind "$store_path" "$store_path")
done < "$AGENT_STORE_PATHS"

exec bwrap "${bwrap_args[@]}" "${command[@]}"
