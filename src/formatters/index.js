import makeStylish from './stylish.js';

const formatTree = (tree, format) => {
  switch (format) {
    case 'json':
      return JSON.stringify(tree);
    case 'stylish':
      return makeStylish(tree);
    default:
      throw new Error(`Unknow format: ${format}!`);
  }
};

export default formatTree;
