const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://vedantbothikar.github.io',
  title: '',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Vedant Bothikar',
  role: 'Software Engineer',
  description: [
    {
      id: 'para1',
      text: 'I am Vedant Shyam Bothikar, an experienced software engineer with a strong foundation in computer engineering and a passion for technology. I have experience working as a software engineer at Mastercard and multiple tech startups, gaining expertise in various tech stacks, including C++, JavaScript, Java, Python, and more.',
    },
    {
      id: 'para2',
      text: 'Currently, I am pursuing advanced studies in Computer Science at Georgia Tech. I am looking for ways to apply my technical skills to create innovative solutions.',
    },
  ],
  resume: '/resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/vedantbothikar',
    github: 'https://github.com/vedantbothikar',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Content Evaluation using NLP',
    description:
      'Engineered a grading system to automatically scan & grade student answer sheets through extensive research on content-evaluation techniques in NLP',
    stack: ['NLP', 'Flask'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Quick Permit',
    description:
      'Launched software to approve permission requests sent by college students to professors for conducting workshops and seminars.',
    stack: ['Node.js', 'MongoDB', 'Express.js'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'CovMeal',
    description:
      'Created a homemade nutritious food ordering software for COVID-19 patients during the pandemic by utilizing the React.js library and Cloud Firestore database. Handled a traffic of more than 600 users at one point in time.',
    stack: ['React.js', 'Firebase', 'Materialize'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C++',
  'Java',
  'Python',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Spring',
  'Node.js',
  'Mongoose',
  'Redux',
  'Material UI',
  'Bootstrap',
  'HTML/CSS',
  'Git',
  'MongoDB',
  'SQL',
  'Firebase',
  'GraphQL',
  'Blockchain',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'vbothikar2001@gmail.com',
}

export { header, about, projects, skills, contact }
