# Repository instructions for coding assistants

1. Read GAME_DESIGN.md and PROJECT_STATUS.md before changing gameplay.
2. Do not modify unrelated repositories, including ECLIPSE projects.
3. Work on `develop` or a dedicated feature branch. Do not push gameplay changes directly to `main` without explicit user approval.
4. Preserve the working iPhone Safari build. Test touch viewport, pause, speed controls, game progression and win conditions before merging.
5. Distinguish implemented behaviour from planned mechanics; never claim a browser or device test unless actually performed.
6. Follow the design: two towers per team must fall before the base core can be damaged; towers prioritize minions but retaliate against enemy champions attacking allied champions in range.
7. Keep deterministic simulation timing across speed settings where possible; separate simulation updates from rendering.
8. Keep original art, names and code; do not copy League of Legends assets.
9. Update PROJECT_STATUS.md when features are added or verified; document rule changes in GAME_DESIGN.md.
10. Prefer small, reviewable commits and pull requests into main after validation.
