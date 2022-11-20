# designCards
List view to present cards

Task (written in german)
# MYPOSTER Frontend Bewerbung

## Willkommen

Vielen Dank für Deine Bewerbung! Um die praktischen Fähigkeiten unserer Bewerber zu prüfen, bitten wir jeden Bewerber die anschließende Aufgabe zu bearbeiten.

Bitte verwende für die Umsetzung der Aufgabe ein JavaScript Framework. Da wir selbst Vue.js einsetzen, würden wir dieses bevorzugen, jedes andere moderne JavaScript Framework ist aber auch in Ordnung. Der Einsatz von TypeScript ist dabei optional. Weiterhin würden wir Dich bitten kein CSS Framework (wie z.B. Bootstrap oder TailwindCSS) einzusetzen und darauf zu achten, dass semantisches HTML verwendet wird.

Die Aufgabe ist so ausgelegt, dass sie in ungefähr 3 Stunden abgeschlossen werden kann. Bitte nimm Dir hierfür trotzdem ausreichend Zeit um Dein bestmögliches Ergebnis zu erzielen.

Um Deine Aufgabe einzureichen, teile bitte eine `.zip` Datei, welche den gesamten Quellcode beinhaltet, über ein Tool wie Dropbox, WeTransfer, o.Ä. mit uns oder erstelle ein privates GitHub-Repository.

## Aufgabenstellung

Bei dieser Aufgabe geht es um die Umsetzung eines responsiven Karten-Layouts, wobei die Karten gefiltert und sortiert werden können.

Die Daten für die Karten können über eine von uns bereitgestellte API abgefragt werden.

Setze bitte das mitgelieferte Design, sowie die beschriebenen Funktionalitäten um. Achte dabei bitte auch darauf die Applikation ausreichend zu testen.

### Teil 1 - Design umsetzen

Im Verzeichnis `mockups` findest Du die umzusetzenden Layouts:

<img src="./mockups/1_desktop.jpg" width="300px">
<img src="./mockups/2_tablet.jpg" width="200px">
<img src="./mockups/3_mobile.jpg" width="76.5px">

Die Liste von Karten soll responsiv umgesetzt werden, wobei die maximale Breite des Content-Bereichs 920px und die minimale 320px betragen soll.

Bei jedem Breakpoint soll der zur Verfügung stehenden Platz optimal ausgenutzt werden. Das heißt auch, dass die Karten innerhalb eines Breakpoints die Größe verändern können.

Das Gesamtlayout besteht aus einem Header mit Überschrift, einer Funktionsleiste und einer Liste mit Karten.

Die Funktionsleiste beinhaltet ein Suchfeld, ein Filter-Dropdown, sowie eine Checkbox.

Die einzelnen Karten sind folgendermaßen aufgebaut:

- Titelbild
- Autoren-Avatar (blauer Kreis mit Initialen des Autors)
- Name des Autors
- Erstellungsdatum des Artikels
- Titel des Beitrags
- Like-Button, welcher in Abhängigkeit des Zustands das Styling ändert (siehe `active-states.jpg`)
- Anzahl der Likes

Bitte verwende für die Umsetzung das folgende Color Scheme, dieses ist auch nochmal in der Datei `color-scheme.jpg` enthalten.

<img src="./color-scheme.jpg" width="300px">

Die Daten für die Karten können über den Endpunkt `https://myposter.de/web-api/job-interview` abgefragt werden. Eine Spezifikation der API Schnittstelle befindet sich in der Datei `api.json`.

**Hinweise:**

- Die zu verwendenden Icons findest Du im Verzeichnis `assets`
- In den Designs wird unsere Brand Font (`AvenirNext`) verwendet, da diese proprietär ist, bitte eine andere verwenden

### Teil 2 - Funktionalität umsetzen

Bitte setze die nachfolgend beschriebenen Funktionen um.

**App Funktionen**

Über die Suchfunktion soll man nach Autoren und Titeln suchen können. Dabei sollen nur die gefilterten Karten angezeigt werden.

Die Beiträge sollen weiterhin über ein Dropdown nach Name des Autors (alphabetisch) oder Datum (auf- und absteigend) sortiert werden können.

Wenn die Checkbox aktiviert wird, sollen nur Beiträge aus dem aktuellen Jahr angezeigt werden.

**Card Funktionen**

Der User kann über einen Button den Beitrag liken/unliken. In Abhängigkeit davon ändert sich auch das Styling des Buttons (siehe `active-states.jpg`), sowie die Anzahl der Likes.

<img src="./mockups/4_active-states.jpg" width="200px">

### Teil 3 - Tests schreiben
Bitte schreibe sinnvolle Tests für Deine Applikation.
