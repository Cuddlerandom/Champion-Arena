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

## Versioning convention
- Public versions use `V01.1`, `V01.2`, `V01.3` and so on.
- `archive/V01.1` is a Git branch snapshot of the initial working iPhone prototype from `main` (not a Git tag or release).
- Before major changes, create a new `archive/Vxx.y` branch from the current playable `main` state. Never rewrite archive branches.
- Continue developing on `develop`; user-approved playable changes can be published on `main`.
- Rollback is a deliberate Git operation after checking the target revision, not an automatic switch.

## V01.2 development (develop only, not yet published)
- Added landscape-first responsive canvas and camera panning with one finger, pinch zoom with two fingers and a recenter control.
- Added mode selector for 1v1, 3v3, 5v5, distinct map sizes, left-right mirrored lanes and team bases.
- Added automated champions and minions in each mode; structures and core invulnerability logic. This is a first playable implementation, not a final balanced design.
- Needs actual iPhone Safari testing and CI verification before publication to main. AI is still basic and the 3v3/5v5 layouts are schematic.

## V01.7 in Entwicklung (develop, nicht veröffentlicht)
- Erste Implementierung von Minion-HP-Skalierung, LoL-artiger Rüstungsformel, zeitabhängiger äusserer Turmverteidigung, Zielprioritäten und aktivem Nexus-Angriff.
- Balancing-Zahlen sind vorläufig; insbesondere Trefferzahlen gegen skalierende Minions, Lane-Fortschritt, tatsächliche Matchdauer 15–25 Minuten und 3v3/5v5 müssen getestet werden.
- Noch keine Browser-/iPhone-Verifikation, kein Merge auf main. Live-Version V01.6 bleibt unverändert.

## V01.7 – erste Headless-Logiksimulation (1v1)
- Direktes Ausführen des JavaScript-Spielcodes mit gemocktem DOM/Canvas, ohne Browser-Rendering; 3 Läufe à 30 simulierte Spielminuten, Zeitschritt 0,1 s.
- In keinem Lauf Sieger oder zerstörter Turm. Endstand aller drei Läufe: Türme [1829/3300, 2300/2300, 2697/3300, 2300/2300], Nexus beide 2600/2600.
- Ziel-Matchdauer 15–25 Minuten klar verfehlt. Läufe zeigten praktisch identische Verläufe; nicht als unabhängige statistische Stichprobe werten.
- Erforderlich: KI-/Lane-Fortschritt und Zielwahl korrigieren, Struktur- und Minion-Balance testen, danach erneut simulieren. Browser- und iPhone-Safari-Test stehen aus. Nicht auf main veröffentlichen.

## V01.7 – Caster-Fortschrittsfix und erneuter Test
- Caster prüfen nun nur nahe verbündete Melees als Frontlinie; entfernte Melees blockieren ihren Marsch nicht mehr (Commit e9e7b009).
- Headless-JS-Logiksimulation 1v1, 30 Minuten: kein Sieg, keine zerstörten Türme. Turm-HP nach 30 Minuten: [2603/3300, 2300/2300, 2510/3300, 2300/2300], beide Nexus volle HP.
- Noch nicht veröffentlichungsfähig: Team-Push-/Zielwahl und Strukturschaden weiter überarbeiten; kein Browser-Test durchgeführt.

## V01.7 – Champion-Turmabstand korrigiert
- Champion-Stand-off-Position war seitenverkehrt; korrigiert auf develop (Commit 800d4600).
- Headless 1v1 30 Minuten: kein Sieger; Turm-HP [3235,2300,2705,2300], Nexus [2600,2600]. Regression gegenüber vorherigem Lauf möglich; weitere Ursachenanalyse statt voreiligem Release nötig.

## V01.7 – Ursachenanalyse und Champion-Rückzug
- Headless-Positionsmessung: Champions verharrten bei ca. 80/95 HP (von anfangs 420) nahe der Lane und heilten nicht zuverlässig.
- Fix auf develop (5314929f): Rückzug ab 30% HP, Heimweg und Regeneration auf mindestens 90%, danach erneuter Angriff.
- Erneute 30-Minuten-Headless-Simulation: kein Sieger, Türme [2775,2300,2493,2300], Nexus unverändert; Heilung und erneuter Kampfeinstieg beobachtet. Lane-/Wellenkoordination weiterhin unzureichend; Browser-/iPhone-Test offen.

## V01.7 – Goldsystem B, Shop und Regeneration (develop)
- Implementiert: Startgold 500, passives Gold 2/s, Minion-Last-Hits und Nähebonus, Kill-/Assist-/Turmbelohnungen, 3 Basis-Items mit Shopradius und passive HP-Regeneration. Commits b77303fc und 5c63126d.
- Headless-1v1-Simulation 30 Minuten: beide Champions erwerben alle drei Items, sammeln anschliessend mehrere tausend ungenutzte Gold; kein Sieg, kein zerstörter Turm, Nexus volle HP. Turm-HP [2706,2300,2848,2300].
- Auffälligkeit: Kaufanzahl und Kaufhistorie in der 5-Minuten-Stichprobe widersprüchlich (items=1, purchases=3); Ursache vor Release prüfen. Goldfluss/Shop nur als vorläufig implementiert werten.
- Nicht auf main veröffentlichen; Matchdauer 15–25 Minuten verfehlt, Browser-/iPhone-Tests offen.

## V01.7 – Itemzweige technisch integriert (develop)
- Sechs Inventarplätze, Komponenten mit Goldanrechnung, 3 Endgegenstände (Infernoschneide 3200, Bollwerk 3000, Herz der Erneuerung 2900), passive Itemeffekte und adaptive Build-Priorisierung in index.html umgesetzt. Käufe bleiben auf die eigene Basis begrenzt.
- Erste Headless-Simulation deckte blockierende parallele Itemzweige auf; Kauf-KI korrigiert, sodass begonnene Rezepte priorisiert abgeschlossen werden.
- Nach Korrektur: 30-Minuten-Headless-1v1-Simulation, ein äusserer Turm zerstört, kein Sieger, übrige äussere Turm-HP 726, innere Türme/Nexus unbeschädigt. 15–25-Minuten-Ziel weiterhin verfehlt.
- Einschränkungen: Nur JS-Logik simuliert, kein echter Browser-/Safari-Test; Build-KI, Kaufhistorie, Inventar und Balancing benötigen zusätzliche Tests. main nicht verändert.

## Garen gegen Darius – erster technischer Prototyp
- develop Commit a9b17d6: Team Blau Garen, Team Rot Darius; individuelle Level-1-Werte, Level-Skalierung und Angriffstempo. Erste automatisierte Q/W/E/R-Effekte, Garen-Regeneration und Darius-Blutung integriert.
- **Keine vollständige LoL-Patch-Parität:** Fähigkeitsformeln, Skill-Ränge, Manasystem, Trefferzonen, Blutungs-/Ultimate-Resets, W-Passive und exakte Cooldowns sind noch zu verifizieren/ergänzen. Die aktuelle Blutungslogik muss auf unbeabsichtigtes erneutes Stapeln durch DoT-Ticks geprüft werden.
- Headless-1v1-Test 30 Minuten ohne Laufzeitfehler: beide äusseren Türme zerstört, innere Turm-HP 445 und 1925, kein Sieger. 15–25-Minuten-Ziel weiterhin verfehlt.
- Browser- und iPhone-Safari-Test offen. main bleibt unverändert.

## Garen vs Darius – Stand 17.10.2026 (develop)
- Champion-Grundwerte/Levelwachstum aus LoL Patch 26.20 und erste Q/W/E/R-Mechaniken für beide Champions im Code vorhanden; diese sind **vereinfachte Annäherungen**, nicht vollständig LoL-identisch (z. B. Mana-Kosten, Zielgeometrie, W-Passivstapel, Bleed-Details, Angriffstempo-Formel, CC und visuelle Darstellung noch unvollständig). Zusätzliche Verbesserungen Commit 7843d738.
- Headless-Isolationsduelle (keine Minions/Türme, vereinfachte Kampf-Loop): Level 1 Garen gewinnt nach 14s mit 205/788 LP; Level 6 Darius gewinnt nach 10s mit 328/1222 LP; Level 18 mit drei legendären Items Darius gewinnt nach 23s mit 2357/3790 LP. Diese Testschleife ist **kein identischer Spielmodus**, da tick()-Bewegung und passive Regeneration nicht ausgeführt werden.
- 30-Minuten-Headless-1v1 mit tick(): kein Sieger; äussere Türme beider Teams zerstört; innere Türme HP [2300, 529], Nexus beide 2600/2600. Zielmatchdauer 15–25 min weiterhin verfehlt.
- Noch offen: vollständige Skilltreue und Ressourcen, KI und Shop, UI für Fähigkeiten/Inventar, mehrfache reproduzierbare Tests, echte Browser-/iPhone-Safari-Tests. Keine Freigabe für main.

## V01.8 Utility-AI erster Prototyp – 17.10.2026
- Commit 0cb9754: Bewertung von fight/push/farm/retreat/shop, Hysterese und Aktionsprotokoll. Noch **keine** vollständige Umsetzung der Handlungsziele: farm/fight/push führen teilweise weiterhin dieselbe bestehende Zielverfolgung aus; Shop-/Retreat-Steuerung ist noch verbesserungsbedürftig.
- Ein 30-minütiger Headless-Test: kein Sieger, 2 äussere Türme zerstört, innere Türme 1871 und 2225 LP, beide Nexus 2600 LP; Garen 1 Kill, Darius 0 Kills. Gegenüber vorherigem Einzelszenario (innere Türme 2300 und 529 LP) schwächerer Push. Keine statistische Signifikanz, keine Browserprüfung.
- Aktionsprotokoll (max. letzte 120 Einträge pro Champion): Garen push 47/retreat 49/fight 24, Darius push 66/retreat 20/fight 34. Diese Zahlen sind Entscheidungswechsel, keine Sekundenanteile.
- Nächste Schritte: tatsächliche Aktionen pro Utility-Ziel, Shop-Rückkehr, bessere Turm-/Minion-Koordination und deterministische Multi-Seed-Tests.

## Utility-AI Aktionen ausgeführt – 17.10.2026
- Commit cc229a1: Kampf wählt gegnerischen Champion; Farm wählt Minions; Push verfolgt das Gebäude mit Wellenkoordination und Staging; Retreat geht zur Basis und heilt; Shop kehrt zur Basis zurück und kauft. Keine reine Score-Anzeige mehr.
- Ein 30-Minuten-Headless-Test: kein Sieger, 3/4 Türme zerstört. Blaue Türme 0/0 LP, rote Türme 0/365 LP, beide Nexus unbeschädigt. Garen Level 11, 1 Kill; Darius Level 10, 2 Kills. Gegenüber vorigem Prototyp (2/4 Türme zerstört) verbesserter Push. Keine statistisch robuste Auswertung oder Safari-Browsertest.
- Offene Probleme: Entscheidungsscores und Rückzug feinabstimmen, tatsächliche Shop-Ziele, Fähigkeiten, Nexus-Fokus; mehrere Seed-Tests und End-to-End-Browsertest. main unverändert.

## XP-Balance-Test – 17.10.2026
- Commit ecea168: XP pro Minion 10→20, Nähe 240→330, XP-Levelschwelle Level×35→Level×22.
- Ein 1v1-Headless-Lauf: Level nach 5min 6/6, 10min 9/9, 15min 11/11, 20min 14/13; Garen gewinnt nach 1361s = 22:41. Level 18 vor Matchende **noch nicht erreicht**. Kein Browser-Test, keine statistische Stichprobe.

## KI-Varianztest – 20 reproduzierbare Läufe (17.10.2026)
- Commit 1ee04cc: drei zufällig initialisierte KI-Spielstile (aggressive/balanced/defensive), individuelle Bias-Werte auf Utility-Scores; deterministisch reproduzierbar bei gesetztem Seed.
- Headless 1v1, Seeds 1–20, maximal 30 Minuten: Garen 12 Siege, Darius 5 Siege, 3 unentschieden/offen nach 30 Minuten. Schnellster Sieg 14:37, längster abgeschlossener Sieg 29:44. Level 18 erreicht in Seed 5 (Garen Level 18, Darius 17 bei 29:44), Seed 17 beide Level 18 bei 30:00 ohne Sieger. Seed 4 Garen Level 16/Darius 12, 9:0 Kills.
- Wichtig: Varianz entsteht durch zufällig vergebene Spielstile/Bias; das ist **keine** adaptive Strategie oder statistisch validierte Balance. Darius gewinnt 5/20; Garen bleibt tendenziell stärker. Nur Headless, kein Browser-/Safari-Test. main unverändert.

## Taktisches Wissen – 20 Seed-Tests (17.10.2026)
- Commit 3a430a1: tacticalKnowledge bewertet Level-/Item-/HP-Vorteile, Minion-Überzahl, Execute-Gelegenheit, Turmrisiko und Finish-Potenzial; die Scores passen sich während des Matches an. Keine neuronale KI und kein Lernen über Matches hinweg.
- Seeds 1–20, Headless maximal 30 Minuten: Garen 8 Siege, Darius 11 Siege, 1 Match ohne Sieger. Gegenüber vorigem Stand 12/5/3; gleicher Seed, aber Spielverläufe verändern sich durch Logik. Kein Browser-Test, kein statistisch abgesicherter Balancebeweis.
- Offene Aufgaben: mehr Seeds, Skill-Timing und Schadens-/Bleed-Korrektheit, keine versteckten Informationen, nachvollziehbare Aktionslogs, Browser/Safari-Test. main unverändert.
