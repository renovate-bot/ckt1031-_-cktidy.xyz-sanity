{ pkgs }: {
	deps = [
		pkgs.nodejs-16_x
    pkgs.nodePackages.typescript-language-server
    pkgs.nodePackages.npm
    pkgs.replitPackages.jest
	];
}