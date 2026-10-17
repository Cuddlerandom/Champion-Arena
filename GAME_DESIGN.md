# Champion Arena — Game Design

## Vision
Original stylized 3D fantasy champion team battle simulator inspired by the strategic structure of MOBAs. All champions are AI-controlled; the player configures and observes matches, not direct character control. Godot 4 is the intended long-term engine. The current iPhone prototype is a standalone HTML5 canvas simulation, not a Godot export.

## Modes
- Arena first: two teams, each with two defensive towers and one base core. Destroy the enemy core to win. Both enemy towers must be destroyed before its core can be damaged.
- Full three-lane MOBA with jungle, minions and objectives is a long-term mode, not implemented.
- Initial tests 1v1; later 3v3 and 5v5.

## Champions
- Original character designs; roles tank, fighter, assassin, mage, marksman, support.
- Five abilities per champion: passive P, active Q/W/E, ultimate R.
- Levels 1–18 within each match. One skill point per level; Q/W/E up to rank 5; R ranks at levels 6/11/16; passive scales automatically.
- Gain XP and gold through combat, assists and objectives. AI chooses skill ranks and buys items to suit opponents and situation.
- AI has individual personality (aggression, courage, patience, teamwork, risk taking) and should adapt its tactics based on observed enemy behaviour without knowing hidden cooldowns.
- Team AI should coordinate focus, protection, ability combos, pushes and retreats.
- Respawn delay increases with champion level. Respawn at own base with restored health/resources.

## Arena rules
- Minion waves spawn and advance toward enemy structures.
- Towers prioritize enemy minions; if an enemy champion attacks an allied champion within tower range, tower switches aggro to the attacker. Aggro resets when attacker leaves range/dies. Repeated tower hits on a champion should ramp damage (planned).
- Towers defend each core. Core only vulnerable once both defending towers fall.
- Simulation speed: pause, 0.5x, 1x, 2x, 4x, 8x. Speed changes simulation time consistently, not only animations.

## Example champion concept
Valdrik — Der Eiserne Eid (tank/protector): P Eiserner Wille; Q Schildschlag; W Wächterbund; E Bollwerk; R Letzter Schwur. Concept only; abilities not implemented.

## Important distinction
These are design goals, not claims of existing implementation. Consult PROJECT_STATUS.md for what currently works.
