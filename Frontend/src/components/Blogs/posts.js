import blogs1 from '../assets/images/Stories1.jpg';
import blogs2 from '../assets/images/Stories2.jpg';
import blogs3 from '../assets/images/Stories3.jpg';

const posts = [
  {
    id: 1,
    title: 'First Post',
    excerpt: 'This is the first post...',
    content: 'This is the full content of the first post.',
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
