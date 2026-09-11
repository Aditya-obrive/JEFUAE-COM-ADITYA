import { homeFaqs } from './homeFaqs';

const aboutTopic = 'Electrical Engineering Consulting';
const aboutTopicLabel = 'JEF electrical engineering company';

export const aboutFaqs = homeFaqs.map(([question, answer]) => [
  question.replaceAll(aboutTopic, aboutTopicLabel),
  answer.replaceAll(aboutTopic, aboutTopicLabel),
]);
