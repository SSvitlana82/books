import { refs } from './modules/refs';
/* refs.donations.addEventListener(); */

import { supportsTemplate } from './modules/render-functions';
const support = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: 'icon-ukraine',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: 'icon-ukraine',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: 'icon-ukraine',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: 'icon-ukraine',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: 'icon-ukraine',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: 'icon-ukraine',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: 'icon-ukraine',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: 'icon-ukraine',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: 'icon-user',
  },
];

const markup = supportsTemplate(support);
refs.donations.innerHTML = markup;
