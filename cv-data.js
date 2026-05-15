const CV = {
  name: 'Andrea Peltokorpi',
  photo: 'photos/photo.jpg',

  contact: [
    { icon: 'phone', text: '+358 40 685 9920' },
    { icon: 'email', text: 'apeltoko@gmail.com' },
    { icon: 'location', text: 'Oulu' },
    { icon: 'linkedin', text: 'anpeltok' },
  ],

  languages: ['Finnish — native', 'English — excellent'],

  // Each item becomes its own paragraph group in the sidebar
  technologies: [
    'TypeScript, JavaScript, React',
    'Node.js, PostgreSQL, AWS',
    'Clojure, PHP, Drupal',
    'GitHub Copilot, Claude Code, Amazon Q',
  ],

  profile: [
    'Full-stack developer based in Oulu with 6+ years of professional experience. Detail-oriented (some might say nitpicky) and able to ramp up fast on unfamiliar stacks. When something catches my interest, I dig deep until I understand it.',
    'Strong frontend skills in React/TypeScript, backend experience spanning Node.js, Clojure and PHP/Drupal, with PostgreSQL and AWS experience. Interested and experienced in integrating AI development tools into daily workflow.',
  ],

  // Each job: { dates, role, company, bullets }
  work: [
    {
      dates: '2022—Present',
      role: 'Developer',
      company: 'Nordcloud Oy',
      bullets: [
        'Full-stack development on multiple public sector projects.',
        'Multi-year development on a transport infra-structure management system. Built on AWS with Clojure, TypeScript and React.',
        'Primary developer on a critical railway infra-structure feature, coordinating with stakeholders across multiple organizations. Built on AWS with TypeScript, React and PostgreSQL.',
      ],
    },
    {
      dates: '2020—2022',
      role: 'Developer',
      company: 'Exove Oy',
      bullets: [
        'Full-stack development across multiple public-facing projects. Primarily Drupal/PHP with JavaScript, React, Node.js.',
      ],
    },
  ],

  // Each degree: { year, degree, field, school }
  education: [
    {
      year: '2021',
      degree: 'Bachelor of Science',
      field: 'Information processing science',
      school: 'University of Oulu',
    },
  ],

  hobbies:
    'Storytelling across different media — video games, films, tabletop RPGs. And finding any possible excuse to make a spreadsheet.',
};
