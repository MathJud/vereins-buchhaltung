# vereins-buchhaltung
Eine doppelte Buchhaltung mit Kontenrahmen für Schweizer Vereine. Konten können einfach angepasst werden, Buchhaltungsassistent mit Claude für Belegsverarbeitung und CSV Import vom Kontoauszug, beispielsweise Neon Hypi Lenzburg. Pull-Requests willkommen. Super schnell, läuft alles im Browser und speichert in local storage. Backup und Import mit JSON. Einfachstes Deployment: die HTML-Datei im Browser öffnen. 

Auf der Website https://claude-buha.werckmeister.app/Werckmeister_Buchhaltung.html läuft eine Instanz. 

Für die Claude-Belegsverarbeitung config.example.json duplizieren nach config.json – dann den Claude-API-Key eintragen. Ist im .gitignore drin. 

## Fremdwährungskonten

Buchwährung ist CHF (OR 957a Abs. 4). Aktiv- und Passivkonten können im Kontenplan eine Währung erhalten (z. B. `1021 Bankkonto EUR`). Buchungen auf solche Konten werden mit Betrag in Fremdwährung und Transaktionskurs erfasst; der CHF-Betrag wird daraus berechnet. Im Tab **Fremdwährung** werden die Stichtagskurse per 31.12. erfasst und die Bewertungsbuchungen erstellt (Kursverluste immer, unrealisierte Kursgewinne nur auf flüssigen Mitteln/Wertschriften 10xx – Imparitätsprinzip). Gegenkonten: `3450 Kursgewinne` / `6700 Kursverluste`. Die Bilanz zeigt die Fremdwährungspositionen mit Stichtagskurs für den Anhang.
