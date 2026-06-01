/**
 * Zentrale Seiten-Daten — von Navbar & Footer gemeinsam genutzt,
 * damit Navigation und Kontaktangaben nur an EINER Stelle gepflegt werden.
 *
 * Hinweis: In diesem ersten Schritt existiert nur die Startseite ("/").
 * Die übrigen Routen sind bereits angelegt, damit die Navigation komplett ist;
 * die zugehörigen Seiten folgen in den nächsten Schritten.
 */

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Buche deine Malzeit', href: '/buche-malzeit' },
  { label: 'Events & Termine', href: '/events' },
  { label: 'Nutzungspreise töpfern', href: '/nutzungspreise' },
  { label: 'Schwangerschaft & Erinnerungen', href: '/erinnerungen' },
  { label: 'Über mich', href: '/ueber-mich' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Impressionen & Feedback', href: '/impressionen' },
  { label: 'Impressum & AGB', href: '/impressum' },
];

export const site = {
  name: 'Ton-kreativ',
  owner: 'Jana Gams',
  street: 'Kirchplatz 3',
  city: '6822 Satteins',
  country: 'Österreich',
  email: 'tonkreativ@gmx.at',
  gisa: '35653110',
  photographer: 'Guntram Fechtig',
  photographerUrl: 'https://www.guntramfechtig.com',
};

/** Basis-Pfad der lokalen Bilder (liegen in /public/images/). */
export const IMG_BASE = '/images/';

/**
 * Hilfsfunktion: vollständiger Bildpfad aus einem Dateinamen.
 * Die Bilder liegen lokal in /public/images/. Zum Austauschen einfach die
 * Datei mit DEMSELBEN Namen dort ersetzen — alle Aufrufstellen bleiben gleich.
 */
export const img = (file: string): string => `${IMG_BASE}${file}`;

/**
 * Benannte Fotos. Dateinamen sind bewusst sprechend gewählt, damit klar ist,
 * welches Motiv wohin gehört. Liegen in /public/images/ (aktuell als
 * beschriftete Platzhalter; Originale einfach gleichnamig ersetzen).
 */
export const photos = {
  janaPortrait: 'jana-portrait.jpg',
  ueberMich1: 'atelier-ueber-mich-1.jpg',
  ueberMich2: 'atelier-ueber-mich-2.jpg',
  ueberMichVision: 'ueber-mich-vision.jpg',
  kinderToepfern: 'kinder-toepfern.jpg',
  veranstaltungen: 'veranstaltungen.jpg',
  malzeit: 'malzeit.jpg',
  malzeitHero: 'malzeit-kind.jpg',
  toepfern: 'toepfern.jpg',
  schwangerschaft: 'schwangerschaft-erinnerungen.jpg',
  events: 'afterwork-painting.jpg',
  grossKlein: 'gross-und-klein.jpg',
  grossKleinDetail: 'gross-und-klein-detail.jpg',
} as const;

/** Bildergalerien (lokale Dateinamen in /public/images/). */
export const galleries = {
  malzeit: [
    'galerie-malzeit-1.jpg',
    'galerie-malzeit-2.jpg',
    'galerie-malzeit-3.jpg',
    'malzeit.jpg',
  ],
  impressionen: [
    'galerie-impressionen-1.jpg',
    'galerie-impressionen-2.jpg',
    'galerie-impressionen-3.jpg',
    'galerie-impressionen-4.jpg',
    'galerie-impressionen-5.jpg',
    'galerie-impressionen-6.jpg',
  ],
} as const;

/** Teburio-Buchungs-Widgets (siehe Projekt-Brief). */
export const booking = {
  malplatz: 'https://app.teburio.de/widget/Res7oGqehPGrRv4eE',
  afterWork: 'https://app.teburio.de/widget/e/K66dPL4szeto9btFy',
  grossKlein: 'https://app.teburio.de/widget/e/hP9AmScED3dTzsnLy',
} as const;

/** Reguläre Öffnungszeiten (zentral, von mehreren Seiten genutzt). */
export const openingHours = [
  { day: 'Donnerstag', time: '14:00 – 18:30' },
  { day: 'Freitag', time: '14:00 – 21:00' },
  { day: 'Samstag', time: '9:30 – 18:30' },
] as const;

/**
 * Standort für die Karte/Anfahrt. Koordinaten = Kirchplatz Satteins.
 * `mapsQuery` wird für den exakten "Route planen"-Link genutzt.
 */
export const location = {
  lat: 47.2246,
  lon: 9.6721,
  mapsQuery: 'Kirchplatz 3, 6822 Satteins, Österreich',
} as const;

/**
 * Formular-Konfiguration.
 * Web3Forms-Access-Key (öffentlich, kostenlos unter https://web3forms.com).
 * Sobald hier der Key eingetragen ist, verschickt das Kontaktformular die
 * Nachrichten direkt an die hinterlegte E-Mail — kein Server nötig.
 * Alternativ per Umgebungsvariable PUBLIC_WEB3FORMS_KEY setzen.
 */
export const forms = {
  web3formsAccessKey: '',
} as const;
