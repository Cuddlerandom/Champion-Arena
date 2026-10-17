# Champion Arena — Project Status

## Current release: HTML5 iPhone prototype V0.1
- Source: root `index.html` on `main`; published via GitHub Pages.
- User confirmed the Safari game launches and the units fight.
- Prototype draws a simple 2D top-down arena, not the planned stylized 3D world.
- Includes simple units, minion waves, two towers per side, cores, health, champion levels, gold and automatic stat upgrades, respawn, pause and speed controls.
- Behaviour is simplistic nearest-target movement/attacking, not adaptive or coordinated champion AI.
- No actual champion P/Q/W/E/R skills, proper role-specific builds, comprehensive tower logic, robust match balance or automated test suite yet.
- Important: verify core invulnerability and other rules against GAME_DESIGN.md before claiming compliance; the initial HTML prototype may have gameplay gaps.

## Development workflow
- `main`: published iPhone version; preserve working deployment.
- `develop`: ongoing development and documentation. Merge to main only after validation and user approval.
- Next: add automated smoke checks and preview/test process, then develop role-based decision AI and validate gameplay.

## Verification
- GitHub Pages works according to the user's Safari test.
- No automated browser test or Godot build is currently confirmed.
