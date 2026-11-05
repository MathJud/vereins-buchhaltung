# vereins-buchhaltung
Eine doppelte Buchhaltung mit Kontenrahmen für Schweizer Vereine. Konten können einfach angepasst werden, Buchhaltungsassistent mit Claude für Belegsverarbeitung und CSV Import vom Kontoauszug, beispielsweise Neon Hypi Lenzburg. Pull-Requests willkommen. Super schnell, läuft alles im Browser und speichert in local storage. Backup und Import mit JSON. Einfachstes Deployment: die HTML-Datei im Browser öffnen. 

Auf der Website https://claude-buha.werckmeister.app/Werckmeister_Buchhaltung.html läuft eine Instanz. 

Für die KI-Belegsverarbeitung `config.example.js` duplizieren nach `config.js` – dann den Claude-API-Key eintragen. Ist im .gitignore drin.

## Lokales Modell statt Claude

Der Buchungsassistent kann statt Claude auch ein lokales Modell über einen OpenAI-kompatiblen Server verwenden (Ollama, LM Studio, llama.cpp `llama-server`, vLLM). In `config.js`:

```js
window.LLM_CONFIG = {
  provider: "openai",
  baseUrl:  "http://localhost:11434/v1",   // Ollama
  model:    "qwen2.5vl:7b",
  jsonMode: true,
  csvBatchSize: 15,
};
```

- **CORS:** Der Server muss Anfragen aus dem Browser erlauben – Ollama mit `OLLAMA_ORIGINS="*" ollama serve`, LM Studio mit «Enable CORS».
- **Belege:** Für Fotos/Scans ein Vision-Modell verwenden. PDFs werden im Browser per pdf.js in Text umgewandelt; Scans ohne Textebene werden als Bild (max. 3 Seiten) gesendet.
- **CSV-Import:** Die Transaktionen werden in Blöcken (`csvBatchSize`) analysiert. Vorschläge mit Konten, die nicht im Kontenplan stehen, werden markiert und nicht gebucht.
- Weitere Optionen siehe `config.example.js`.


## Fremdwährungskonten

Buchwährung ist CHF (OR 957a Abs. 4). Aktiv- und Passivkonten können im Kontenplan eine Währung erhalten (z. B. `1021 Bankkonto EUR`). Buchungen auf solche Konten werden mit Betrag in Fremdwährung und Transaktionskurs erfasst; der CHF-Betrag wird daraus berechnet. Im Tab **Fremdwährung** werden die Stichtagskurse per 31.12. erfasst und die Bewertungsbuchungen erstellt (Kursverluste immer, unrealisierte Kursgewinne nur auf flüssigen Mitteln/Wertschriften 10xx – Imparitätsprinzip). Gegenkonten: `3450 Kursgewinne` / `6700 Kursverluste`. Die Bilanz zeigt die Fremdwährungspositionen mit Stichtagskurs für den Anhang.
