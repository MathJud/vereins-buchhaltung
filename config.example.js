// KI-Konfiguration für den Buchungsassistenten
// ─────────────────────────────────────────────
// 1. Diese Datei kopieren: cp config.example.js config.js
// 2. In config.js EINE der Varianten unten aktivieren
// 3. config.js wird NICHT ins Git eingecheckt (.gitignore)

// ── Variante 1: Claude (Anthropic API) ───────────────────────
// Key: console.anthropic.com → API Keys
window.ANTHROPIC_API_KEY = "sk-ant-DEIN-KEY-HIER";
// optional anderes Modell:
// window.LLM_CONFIG = { provider: "anthropic", model: "claude-sonnet-4-20250514" };

// ── Variante 2: lokales Modell über OpenAI-kompatiblen Server ─
// Ollama:     OLLAMA_ORIGINS="*" ollama serve   ·  ollama pull qwen2.5vl:7b
// LM Studio:  Developer → Server starten, «Enable CORS» einschalten (baseUrl http://localhost:1234/v1)
// llama.cpp:  llama-server -m modell.gguf --mmproj mmproj.gguf --port 8080 (baseUrl http://localhost:8080/v1)
//
// window.LLM_CONFIG = {
//   provider: "openai",
//   baseUrl:  "http://localhost:11434/v1",  // Ollama
//   model:    "qwen2.5vl:7b",               // für Belegfotos ein Vision-Modell wählen
//   apiKey:   "",                           // nur falls der Server einen Key verlangt
//   jsonMode: true,                         // erzwingt JSON-Antworten (Ollama: true, LM Studio: false)
//   jsonSchema: true,                       // Kontoauszug: JSON-Schema mit erlaubten Kontonummern (Ollama ≥ 0.5,
//                                           //   LM Studio, llama.cpp) – verhindert erfundene Konten
//   csvBatchSize: 15,                       // Kontoauszug-Transaktionen pro Aufruf (0 = alle auf einmal)
//   pdfMode: "auto",                        // "auto": PDF-Text extrahieren, Scans als Bild · "image": immer als Bild
//   maxTokensFactor: 1,                     // höher (z. B. 4) bei Reasoning-Modellen mit <think>-Ausgabe
// };
