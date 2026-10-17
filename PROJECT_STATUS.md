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
