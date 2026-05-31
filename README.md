# Ton-kreativ

Neubau der Website für das Töpfer- & Keramik-Atelier **Ton-kreativ** von Jana Gams
(Kirchplatz 3, 6822 Satteins). Gebaut mit [Astro](https://astro.build/).

Dieser Stand enthält die **Startseite** sowie das vollständige **Design-System**
(Farben, Typografie, Komponenten), das als Vorlage für die übrigen Seiten dient.

## Design-System

- **Farben:** Creme/Off-White (Hintergrund), Sand/Beige, Terrakotta (Akzent),
  Anthrazit (Text) — als CSS-Custom-Properties in `src/styles/global.css`.
- **Schriften (Google Fonts):** _Fraunces_ (Display-Serife, Überschriften) und
  _Inter_ (Sans, Fliesstext).
- **Stil:** minimalistisch, edel, viel Weissraum, grosse Bilder; mobil zuerst,
  voll responsiv mit Hamburger-Menü.

## Projektstruktur

```text
src/
├── layouts/BaseLayout.astro     # Grundgerüst: Head, Fonts, Navbar + Footer
├── components/                  # Navbar, Footer, Hero, ServiceCard, FaqItem, ContactTeaser
├── data/site.ts                 # Navigation & Kontaktdaten (zentral)
├── pages/index.astro            # Startseite
└── styles/global.css            # Design-Tokens & Basis-Stile
```

## Befehle

| Befehl            | Aktion                                       |
| ----------------- | -------------------------------------------- |
| `npm install`     | Abhängigkeiten installieren                  |
| `npm run dev`     | Dev-Server auf `localhost:4321` starten      |
| `npm run build`   | Produktions-Build nach `./dist/`             |
| `npm run preview` | Build lokal vorschauen                       |

## Hinweise

- Die Bilder werden vorerst von der alten Seite referenziert (Basis-URL in
  `src/data/site.ts`); idealerweise später durch Originale in voller Auflösung
  ersetzen. Bildnachweis: **Guntram Fechtig**.
- Die Navigation verlinkt bereits alle künftigen Seiten; in diesem Schritt ist
  nur die Startseite umgesetzt.
