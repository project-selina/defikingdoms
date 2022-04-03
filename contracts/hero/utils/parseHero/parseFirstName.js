import { maleFirstNames, femaleFirstNames } from '../../../../constants/firstNames.js';

export default ({ gender, id }) => {
  let firstName = id;

  if (gender === 'male') firstName = maleFirstNames[id] ?? id;

  if (gender === 'female') firstName = femaleFirstNames[id] ?? id;

  if (firstName !== id) return firstName[0].toUpperCase() + firstName.slice(1);
  else return firstName;
};
