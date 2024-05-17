import blogs1 from '../assets/images/Stories1.jpg';
import blogs2 from '../assets/images/Stories2.jpg';
import blogs3 from '../assets/images/Stories3.jpg';

const posts = [
  {
    id: 1,
    title: 'Choosing the right title for your project, article, or piece of content is crucial as it serves as the initial hook to attract your audience.',
    excerpt: 'JavaScript (JS) is a versatile programming language...',
    content: `JavaScript (JS) is a versatile programming language used primarily for web development. It enables dynamic behavior on web pages, allowing developers to create interactive elements, handle user input, and modify content in real-time without reloading the page. JS can run on both client-side (in web browsers) and server-side (with Node.js), offering broad compatibility. It supports a wide range of frameworks and libraries like React, Angular, and Vue.js, facilitating efficient development of complex applications. JavaScript's flexibility, speed, and extensive community support make it an essential tool for building modern web applications, ranging from simple websites to complex web-based software solutions.`,
    date: 'May 16, 2024',
    image: blogs1 // Corrected the image import
  },
  {
    id: 2,
    title: 'Second Post',
    excerpt: 'This is the second post...',
    content: 'This is the full content of the second post.',
    date: 'May 17, 2024',
    image: blogs2
  },
  {
    id: 3,
    title: 'Third Post',
    excerpt: 'This is the second post...',
    content: 'This is the full content of the second post.',
    date: 'May 17, 2024',
    image: blogs3
  },

  {
    id: 4,
    title: 'Forth  Post',
    excerpt: 'This is the full content of the second post. lorem20 A theory is a rational type...',
    content: `This is the full content of the second post. lorem20 A theory is a rational type of abstract thinking about a phenomenon, or the results of such thinking. The process of contemplative and rational thinking is often associated with such processes as observational study or research. Theories may be scientific, belong to a non-scientific discipline, or no discipline at all. Depending on the context, a theory's assertions might, for example, include generalized explanations of how nature works. The word has its roots in ancient Greek, but in modern use it has taken on several related meanings.

    In modern science, the term "theory" refers to scientific theories, a well-confirmed type of explanation of nature, made in a way consistent with the scientific method, and fulfilling the criteria required by modern science. Such theories are described in such a way that scientific tests should be able to provide empirical support for it, or empirical contradiction ("falsify") of it. Scientific theories are the most reliable, rigorous, and comprehensive form of scientific knowledge,[1] in contrast to more common uses of the word "theory" that imply that something is unproven or speculative (which in formal terms is better characterized by the word hypothesis).[2] Scientific theories are distinguished from hypotheses, which are individual empirically testable conjectures, and from scientific laws, which are descriptive accounts of the way nature behaves under certain conditions.`,
    date: 'May 17, 2024',
    image: blogs1
  },
  // Add more posts as needed
];

export default posts;
