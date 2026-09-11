import { homeFaqs } from './homeFaqs';

const aboutTopic = 'Electrical Engineering Consulting';
const leadershipTopic = 'JEF leadership team';

export const leadershipFaqs = homeFaqs.map(([question, answer]) => [
  question.replaceAll(aboutTopic, leadershipTopic),
  answer.replaceAll(aboutTopic, leadershipTopic),
]);
