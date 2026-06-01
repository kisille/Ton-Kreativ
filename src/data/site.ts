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

/** Basis-URL der (vorerst wiederverwendeten) Bilder von der aktuellen Seite. */
export const IMG_BASE =
  'https://primary.jwwb.nl/public/u/v/v/temp-slexemfinehrltjvtwst/';

/**
 * Hilfsfunktion: vollständige Bild-URL aus einem Dateinamen.
 * Quelle ist aktuell die bestehende ton-kreativ.at-Seite. Sobald Original-
 * dateien (volle Auflösung) im Projekt liegen, muss nur diese Funktion bzw.
 * IMG_BASE angepasst werden — alle Aufrufstellen bleiben unverändert.
 */
export const img = (file: string): string => `${IMG_BASE}${file}`;

/**
 * Benannte Fotos der aktuellen Seite (alle von Guntram Fechtig).
 * An EINER Stelle gepflegt, damit sie projektweit wiederverwendbar sind.
 */
export const photos = {
  janaPortrait: 'l1150497-2-standard.jpg',
  ueberMich1: 'l1150468-2.jpg',
  ueberMich2: 'l1150477.jpg',
  kinderToepfern: 'l1150349-2.jpg',
  veranstaltungen: 'videocapture_20260522-121731.jpg',
  malzeit: 'l1150269.jpg',
  toepfern: '20260312_135702.jpg',
  schwangerschaft: '1779553705384.jpg',
  events: 'l1150366.jpg',
  grossKlein: '20260319_162210.jpg',
} as const;

/** Bildergalerien (Dateinamen, gleiche Quelle wie photos). */
export const galleries = {
  malzeit: ['l1150258.jpg', 'l1150404-2.jpg', 'l1150318.jpg', 'l1150337-2.jpg'],
  impressionen: [
    '20260413_080202.jpg',
    '20251018_093552.jpg',
    '20250511_121516.jpg',
    '20250710_103632.jpg',
    '20250704_143342.jpg',
    '20250704_143333.jpg',
    '1773854795795.jpg',
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
 * Standort für die Karte/Anfahrt. Koordinaten = Kirchplatz Satteins
 * (Näherung). `mapsQuery` wird für den exakten "Route planen"-Link genutzt.
 */
export const location = {
  lat: 47.2331,
  lon: 9.6489,
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
