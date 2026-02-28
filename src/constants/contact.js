export const CONTACT = {
  phone: {
    raw: '+5491168674207',
    display: '11 6867-4207',
    hours: 'Lunes a Viernes, 8–18hs',
  },
  email: {
    full: 'solucionesindustrialesns@gmail.com',
    user: 'solucionesindustrialesns',
    domain: '@gmail.com',
  },
  address: {
    city: 'Presidente Derqui',
    region: 'Buenos Aires, Argentina',
  },
  whatsapp: {
    number: '5491168674207',
    message: 'Hola, me comunico desde su sitio web. Quisiera consultar sobre sus servicios industriales.',
  },
  company: {
    name: 'SI Soluciones Industriales',
    short: 'Soluciones Industriales',
    location: 'Pte. Derqui · Bs. As.',
  },
};

export const getWhatsAppUrl = () => {
  const msg = encodeURIComponent(CONTACT.whatsapp.message);
  return `https://wa.me/${CONTACT.whatsapp.number}?text=${msg}`;
};

export const getPhoneUrl = () => `tel:${CONTACT.phone.raw}`;
export const getEmailUrl = () => `mailto:${CONTACT.email.full}`;
export const getGmailComposeUrl = () => {
  const subject = encodeURIComponent('Consulta desde sitio web');
  return `https://mail.google.com/mail/?view=cm&to=${CONTACT.email.full}&su=${subject}`;
};
