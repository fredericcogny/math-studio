{
  description = "Local-first adaptive mathematics learning studio";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs = { nixpkgs, ... }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs {
        inherit system;
        config.allowUnfree = true;
      };

      agent-tools = with pkgs; [ bash cacert coreutils curl git gh jq nodejs_22 ripgrep ];
      agent-closure = pkgs.closureInfo { rootPaths = agent-tools; };

      agent-shell = pkgs.writeShellApplication {
        name = "agent-shell";
        runtimeInputs = [ pkgs.bubblewrap ] ++ agent-tools;
        text = ''
          export AGENT_PATH="${pkgs.lib.makeBinPath agent-tools}"
          export AGENT_STORE_PATHS="${agent-closure}/store-paths"
          export SSL_CERT_FILE="${pkgs.cacert}/etc/ssl/certs/ca-bundle.crt"
        '' + builtins.readFile ./nix/agent-shell.sh;
      };

      antigravity-launcher = pkgs.writeShellApplication {
        name = "antigravity";
        runtimeInputs = [ pkgs.antigravity-ide ];
        text = ''exec antigravity-ide "$@"'';
      };
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        packages = with pkgs; [
          antigravity-launcher
          agent-shell
          bubblewrap
          curl
          gh
          git
          jq
          nodejs_22
          nsjail
          ripgrep
        ];

        SSL_CERT_FILE = "${pkgs.cacert}/etc/ssl/certs/ca-bundle.crt";

        shellHook = ''
          export PROJECT_ROOT="$(git rev-parse --show-toplevel)"
          export NPM_CONFIG_CACHE="$PROJECT_ROOT/.cache/npm"
          export npm_config_update_notifier=false

          printf '\nMath Studio development shell\n'
          printf '  npm install       install JavaScript dependencies\n'
          printf '  npm run dev       start the local app\n'
          printf '  antigravity .     open the IDE (configure its native sandbox)\n'
          printf '  agent-shell       open a repo-only shell for CLI agents\n\n'
        '';
      };
    };
}
