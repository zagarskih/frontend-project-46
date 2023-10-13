import makeStylish from './stylish.js';
import makePlain from './plain.js';

const formatTree = (tree, format) => {
  switch (format) {
    case 'json':
      return JSON.stringify(tree);
    case 'stylish':
      return makeStylish(tree);
    case 'plain':
      return makePlain(tree);
    default:
      throw new Error(`Unknow format: ${format}!`);
  }
};

export default formatTree;
