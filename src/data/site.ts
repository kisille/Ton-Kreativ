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

/** Basis-URL der (vorerst wiederverwendeten) Bilder von der alten Seite. */
export const IMG_BASE =
  'https://primary.jwwb.nl/public/u/v/v/temp-slexemfinehrltjvtwst/';
