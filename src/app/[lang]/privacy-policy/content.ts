import type { Lang } from '@/i18n/config'

export const privacyContent: Record<
  Lang,
  {
    title: string
    updated: string
    intro: string
    sections: { heading: string; body?: string; items?: string[] }[]
  }
> = {
  es: {
    title: 'Política de Privacidad – John O’Brien',
    updated: 'Última actualización: 05/08/2026',
    intro:
      'En el sitio web de John O’Brien valoramos y respetamos la privacidad de las personas que interactúan con nuestra marca. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos la información personal que obtenemos a través de nuestros canales digitales.',
    sections: [
      {
        heading: '1. Información que recopilamos',
        body: 'Podemos recopilar la siguiente información cuando completás formularios, nos escribís o interactuás con nuestros anuncios:',
        items: [
          'Nombre y apellido',
          'Dirección de correo electrónico',
          'Número de teléfono',
          'Información sobre las clases o servicios que te interesan',
          'Cualquier otro dato que decidas compartir voluntariamente',
        ],
      },
      {
        heading: '2. Cómo utilizamos la información',
        body: 'La información recopilada se utiliza para:',
        items: [
          'Contactarte en relación a tu consulta sobre clases de guitarra',
          'Coordinar y brindarte información sobre nuestros servicios',
          'Enviarte información relevante sobre nuestras clases y eventos',
          'Mejorar nuestros procesos comerciales y de comunicación',
        ],
      },
      {
        heading: '3. Publicidad y plataformas externas',
        body: 'Podemos recopilar datos a través de herramientas publicitarias como Meta Ads (Facebook e Instagram) y Google Analytics. Esta información se utiliza para:',
        items: ['Mostrar anuncios relevantes', 'Medir el rendimiento de nuestras campañas', 'Optimizar nuestra comunicación'],
      },
      {
        heading: '4. Compartir información',
        body: 'No vendemos ni compartimos tu información personal con terceros, excepto en los siguientes casos:',
        items: [
          'Cuando sea necesario para prestar nuestros servicios',
          'Cuando lo exija la ley',
          'Con proveedores tecnológicos que nos ayudan a operar (por ejemplo, plataformas de publicidad o análisis de datos)',
        ],
      },
      {
        heading: '5. Almacenamiento y seguridad',
        body: 'Adoptamos medidas razonables para proteger tu información personal y evitar accesos no autorizados, pérdida o alteración.',
      },
      {
        heading: '6. Derechos del usuario',
        body: 'Podés solicitar en cualquier momento:',
        items: ['Acceder a tus datos personales', 'Rectificar información incorrecta', 'Solicitar la eliminación de tus datos'],
      },
      {
        heading: '',
        body: 'Para ejercer estos derechos, podés escribirnos a: johnobrien.dev@gmail.com',
      },
      {
        heading: '7. Uso de cookies',
        body: 'Nuestro sitio web puede utilizar cookies para mejorar la experiencia del usuario y analizar el comportamiento de navegación.',
      },
      {
        heading: '8. Cambios en esta política',
        body: 'Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Recomendamos revisarla periódicamente.',
      },
      {
        heading: '9. Contacto',
        body: 'Si tenés preguntas sobre esta Política de Privacidad, podés escribirnos a: johnobrien.dev@gmail.com',
      },
    ],
  },
  en: {
    title: 'Privacy Policy – John O’Brien',
    updated: 'Last updated: 08/05/2026',
    intro:
      'At the John O’Brien website, we value and respect the privacy of people who interact with our brand. This Privacy Policy explains how we collect, use, and protect the personal information we obtain through our digital channels.',
    sections: [
      {
        heading: '1. Information we collect',
        body: 'We may collect the following information when you fill out forms, write to us, or interact with our ads:',
        items: [
          'First and last name',
          'Email address',
          'Phone number',
          'Information about the lessons or services you’re interested in',
          'Any other data you choose to share voluntarily',
        ],
      },
      {
        heading: '2. How we use the information',
        body: 'The information we collect is used to:',
        items: [
          'Contact you regarding your inquiry about guitar lessons',
          'Coordinate and provide information about our services',
          'Send you relevant information about our lessons and events',
          'Improve our business and communication processes',
        ],
      },
      {
        heading: '3. Advertising and third-party platforms',
        body: 'We may collect data through advertising tools such as Meta Ads (Facebook and Instagram) and Google Analytics. This information is used to:',
        items: ['Show relevant ads', 'Measure the performance of our campaigns', 'Optimize our communication'],
      },
      {
        heading: '4. Sharing information',
        body: 'We do not sell or share your personal information with third parties, except in the following cases:',
        items: [
          'When necessary to provide our services',
          'When required by law',
          'With technology providers that help us operate (for example, advertising or analytics platforms)',
        ],
      },
      {
        heading: '5. Storage and security',
        body: 'We take reasonable measures to protect your personal information and prevent unauthorized access, loss, or alteration.',
      },
      {
        heading: '6. Your rights',
        body: 'You may request at any time to:',
        items: ['Access your personal data', 'Correct inaccurate information', 'Request deletion of your data'],
      },
      {
        heading: '',
        body: 'To exercise these rights, you can write to us at: johnobrien.dev@gmail.com',
      },
      {
        heading: '7. Use of cookies',
        body: 'Our website may use cookies to improve the user experience and analyze browsing behavior.',
      },
      {
        heading: '8. Changes to this policy',
        body: 'We reserve the right to update this Privacy Policy at any time. We recommend reviewing it periodically.',
      },
      {
        heading: '9. Contact',
        body: 'If you have questions about this Privacy Policy, you can write to us at: johnobrien.dev@gmail.com',
      },
    ],
  },
}
