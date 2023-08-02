import { getComments } from './comments-interaction.js';

const countCommnets = async (id) => {
  const temp = await getComments(id);
  if (temp.length > 0) {
    return temp.length;
  }

  return 0;
};

export default countCommnets;