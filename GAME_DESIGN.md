# Champion Arena — Game Design

## Vision
Original stylized 3D fantasy champion team battle simulator inspired by the strategic structure of MOBAs. All champions are AI-controlled; the player configures and observes matches, not direct character control. Godot 4 is the intended long-term engine. The current iPhone prototype is a standalone HTML5 canvas simulation, not a Godot export.

## Modes
- Arena first: two teams, each with two defensive towers and one base core. Destroy the enemy core to win. Both enemy towers must be destroyed before its core can be damaged.
- Full three-lane MOBA with jungle, minions and objectives is a long-term mode, not implemented.
- Arena offers three selectable match sizes: 1v1 (small), 3v3 (medium) and 5v5 (large). Each team spawns exactly that number of AI-controlled champions.
- Mobile-first LANDSCAPE (iPhone Safari) view. Render the arena responsively without distorting world distances; handle safe areas and rotation gracefully.
- The camera shows a viewport of the world, not necessarily the entire arena. One-finger drag pans the camera, two-finger pinch zooms, and camera bounds keep the view on the map. Simulation continues independently of camera movement.
- Every arena is mirrored across its vertical center line: blue base left, red base right; equal path lengths, obstacles, tower/core placement and travel times for both teams. Both teams have equivalent AI information and rules.
- Three distinct arena sizes, not merely the same map with different team counts. Each includes minion waves, two defending towers per team and a destructible core. The enemy core is the only win condition and cannot be damaged before both defending towers are destroyed. Map layout and lane width should support its champion count.
- Visual symmetry is a fairness requirement; the final art style remains original, not a copy of any League of Legends map.

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

## Approved arena layouts (V01.2 design)
- 1v1: compact duel arena, one wide central lane, very few obstacles; two towers and a core per side.
- 3v3: medium tactical arena, one central lane plus two mirrored side detours and obstacles for flanking and retreat.
- 5v5: large arena with three main lanes and connecting paths, enabling rotations, flanking and coordinated team fights.
- All layouts mirror left/right across the centerline and preserve equal access, travel distance and defensive placement for both teams.
- Implement and validate the 1v1 arena first, then expand to 3v3 and 5v5. This is an approved design plan, not yet implemented gameplay.

## Development priority approved: 1v1 reference arena
- Focus all near-term implementation, visual polish, camera, minion balance, towers, champion AI and testing on the 1v1 arena until it is complete and accepted.
- Treat the finished 1v1 arena as the gameplay, technical and visual reference for 3v3 and 5v5; reuse shared systems, then expand layouts, paths and team sizes.
- Keep existing 3v3/5v5 prototypes available but defer further development of them during the 1v1 milestone.

## Approved 1v1 art direction: fantasy gladiator colosseum
- The 1v1 reference arena uses an ancient fantasy gladiator-colosseum aesthetic, not a grassy wilderness.
- Combat floor: warm sand and worn stone slabs with subtle battle marks; preserve clear readability of units and effects.
- Surroundings: symmetrical sandstone walls, arches, columns, gates, braziers, ruined masonry and suggested spectator stands.
- Team identity: blue banners and fortified base on the left, red on the right; stone defense towers with magical crystals.
- Keep all gameplay geometry mirrored for fairness; decorative detail may add atmosphere without obscuring gameplay or touch camera navigation.
- This is approved visual direction; detailed artwork and implementation remain to be done.

- Perspective approved: slightly angled/isometric-looking 2.5D visual treatment, while keeping existing top-down world coordinates and touch camera controls for the current prototype. Full isometric projection is a later, separate technical milestone.

## V01.5 tower/core mechanics (implemented prototype)
- Stone crystal towers fire visible traveling magic projectiles; successive tower hits on the same champion stack damage until the target changes or leaves range.
- Tower tap reveals range. Core displays shield while any defending tower survives, and becomes vulnerable only after both are destroyed.
- Damaged towers show cracks; tower/core destruction produces visual bursts and the core triggers a victory banner.
- Next milestone: agree detailed numeric stats for core, melee/caster minions and towers, then balance through playtests.

## Freigegebenes Schadenssystem (Entscheidung des Projektinhabers)
- Exakt drei Grundschadensarten: **physisch**, **magisch**, **wahr**.
- Physischer Schaden wird durch Rüstung reduziert.
- Magischer Schaden wird durch Magieresistenz reduziert.
- Wahrer Schaden ignoriert Rüstung und Magieresistenz.
- Keine separaten Elementarschadensarten (Feuer, Eis etc.) als eigenständiges Schadenssystem.
- Konkrete Formeln, Zahlenwerte und Zuordnung zu Minions, Türmen und Champions werden als nächster Balancing-Schritt festgelegt; die aktuelle Spielimplementierung ist noch nicht auf dieses System umgestellt.

## Freigegebene Verteidigungsformel (LoL-Modell)
- Für Rüstung/Magieresistenz R >= 0: erlittener physischer/magischer Schaden = Rohschaden * 100 / (100 + R).
- Für R < 0: erlittener Schaden = Rohschaden * (2 - 100 / (100 - R)).
- Wahrer Schaden ignoriert Rüstung und Magieresistenz.
- Rüstung betrifft nur physischen Schaden, Magieresistenz nur magischen Schaden.
- Diese Formel ist als Designentscheidung freigegeben, aber noch nicht in die laufende V01.6 implementiert. Konkrete Stats und Schadensarten pro Einheit werden danach abgestimmt.

## Melee-Minions: freigegebene Richtung
- Startwerte nahe an LoL: 465 HP, 0 Rüstung, 0 Magieresistenz, 11 physischer Angriffsschaden; angestrebtes Angriffstempo 1,25 Angriffe/s.
- Angriffsreichweite zunächst 110 als LoL-Referenz, muss auf die Arena-Koordinaten skaliert und getestet werden.
- Melee-Minions skalieren automatisch mit der Spielzeit; konkrete Wachstumswerte und Intervalle sind noch festzulegen.
- Wellen bleiben vorerst bei zwei Melees und einem Caster alle 18 Sekunden.
- Noch Designstand: laufendes Spiel nicht verändert.

## Melee-Minion-Skalierung: LoL-Referenz bestätigt
- Anstelle der zuvor notierten 465 Start-HP gilt die neuere LoL-Patch-26.9-Referenz: **430 Start-HP**, **+35 HP alle 90 Sekunden** (Quelle: offizielle Riot Patch-26.9-Notes).
- Wellenrhythmus Champion Arena bleibt **18 Sekunden**; damit erhält jede fünfte Welle das nächste Upgrade.
- Beispielwerte bei 0:00/1:30/3:00/4:30: 430/465/500/535 HP.
- Skalierung von Angriffsschaden und Rüstung ist noch anhand der aktuellen LoL-Werte zu verifizieren und festzulegen.
- Diese Werte sind Designplanung, noch nicht im Live-Spiel implementiert.

## Caster-Minion-Schadensart (freigegeben)
- Caster-Minions verursachen **physischen Fernkampfschaden**, auch wenn ihre Projektile magisch aussehen, analog zu League of Legends.
- Ihr Schaden wird durch Rüstung reduziert, nicht durch Magieresistenz.
- Melee-Minions verursachen ebenfalls physischen Schaden.
- Zahlenwerte, Skalierung und Umsetzung im Live-Spiel werden separat abgestimmt; V01.6 bleibt unverändert.

## Minion-Schaden gegen Zieltypen (freigegeben)
- Melee- und Caster-Minions verursachen gegen andere Minions normalen physischen Schaden.
- Gegen Champions verursachen beide Minion-Typen reduzierten Schaden.
- Gegen Türme und Kristalle verursachen beide Minion-Typen noch stärker reduzierten Schaden, damit Minion-Wellen allein keine Gebäude zu schnell zerstören.
- Die zieltypabhängigen Schadensmultiplikatoren wirken zusätzlich zur physischen Rüstungsberechnung.
- Exakte LoL-orientierte Multiplikatoren sind noch zu recherchieren und für Champion Arena abzustimmen; keine Implementierung in V01.6.

## Türme: ansteigender Schaden gegen Champions (freigegeben)
- Wiederholte Turmtreffer auf denselben Champion steigern den Schaden stufenweise bis zu einer Obergrenze, nach LoL-Vorbild.
- Bei Zielwechsel wird die Schadenssteigerung zurückgesetzt.
- Dieses bereits in V01.6 vorhandene Grundprinzip bleibt erhalten.
- Exakte Schadensstufen, Obergrenze und eventuelle Sonderfälle werden separat abgestimmt.

## Turm-Zielpriorität (freigegeben)
- Standardmässig priorisiert ein Turm gegnerische Minions im Angriffsradius.
- Verursacht ein gegnerischer Champion einem verbündeten Champion im Turmbereich Schaden, priorisiert der Turm diesen angreifenden Champion beim nächsten Angriff (LoL-orientierte Turm-Aggro).
- Bereits abgefeuerte Geschosse werden nicht nachträglich umgelenkt.
- Detailfälle wie mehrere Angreifer und Rückkehr zur Minion-Priorität werden bei der Implementierung abgestimmt.
- Noch nicht im Live-Spiel umgesetzt; V01.6 bleibt unverändert.

## Turm-Aggro ohne Minions (freigegeben)
- Sind keine gegnerischen Minions in Turmreichweite, greifen Türme gegnerische Champions in Reichweite direkt an.
- Die bereits freigegebene Champion-Aggro bei Angriffen auf verbündete Champions hat weiterhin Vorrang.
- Dokumentierter Designstand; Live-Spiel V01.6 noch nicht angepasst.

## Türme: vollständige LoL-Orientierung (freigegeben)
- Die Türme sollen grundsätzlich das Turmverhalten von League of Legends übernehmen, einschliesslich physischem Schaden, Zielprioritäten, Champion-Aggro, ansteigendem Schaden bei wiederholten Treffern und dazugehörigen Reset-Regeln.
- **Einzige bewusst abweichende Mechanik: Angriffsreichweite**, die auf die kleinere Champion-Arena-Karte und Lane-Geometrie abgestimmt wird; exakter Wert folgt nach Test.
- Die freigegebene Anordnung von zwei Türmen hintereinander bleibt erhalten.
- Aktuelle LoL-Details sind vor Implementierung anhand verlässlicher Quellen zu prüfen; diese Freigabe ist ein Designziel und bedeutet noch keine technische Umsetzung in V01.6.

## Nexus/Kristall: aktive letzte Verteidigung (freigegeben)
- Solange mindestens einer der beiden eigenen Türme steht, bleibt der Nexus durch seinen Schild unangreifbar und greift selbst nicht an.
- Erst wenn **beide** eigenen Türme zerstört sind, fällt der Schild: Der Nexus wird angreifbar **und aktiviert eine eigene Verteidigungsattacke**.
- Die Zerstörung des Nexus beendet das Match mit einem Sieg der gegnerischen Mannschaft.
- Bewusste Abweichung vom klassischen LoL-Nexus, damit nach dem Verlust beider Türme eine letzte Verteidigung bleibt.
- Reichweite, Schaden, Angriffstempo und Zielpriorität der Nexus-Verteidigung werden noch abgestimmt; noch keine Live-Implementierung.

## Nexus-Verteidigung: wie ein stärkerer Turm (freigegeben)
- Nach Zerstörung beider eigenen Türme aktiviert der Nexus eine automatische Verteidigung, die sich mechanisch wie ein Turm verhält.
- Einzelzielangriffe, physischer Schaden, LoL-orientierte Zielpriorität und Champion-Aggro sowie ansteigender Schaden bei wiederholten Treffern auf denselben Champion.
- Der Nexus verursacht **etwas mehr Grundschaden** als ein normaler Turm. +20 % ist ein noch nicht freigegebener Balancevorschlag, kein festgelegter Wert.
- Nexus-Reichweite wird an die Arena angepasst; Details später im Balancing.
- Keine Änderung am Live-Spiel V01.6.

## Nexus: Treffer-Balancing (freigegeben)
- Der aktive Nexus soll **vollständig gesunde Melee-Minions in genau 3 Treffern** besiegen.
- Vollständig gesunde Caster-Minions sollen **genau 2 Treffer** benötigen.
- Gegen Champions erhält der Nexus **+20 % Grundschaden gegenüber einem normalen Turm**; die LoL-orientierte Turm-Aggro und der ansteigende Schaden bei Folgetreffern bleiben erhalten.
- Für Minions muss die Schadensberechnung/Zieltyp-Skalierung so abgestimmt werden, dass die gewünschten Trefferzahlen trotz höherem Nexus-Schaden gelten. Dies ist eine Designvorgabe, keine Behauptung über bereits implementierte Werte.
- Bei skalierenden Minion-HP sind die Trefferzahlen beim Balancing über die Spielzeit zu prüfen.
- V01.6 bleibt vorerst unverändert.
