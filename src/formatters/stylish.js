const addReplacer = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat(depth * spacesCount - 2);

const getString = (data, depth = 1) => {
  if (typeof data !== 'object' || data === null) {
    return `${data}`;
  }
  const str = Object
    .entries(data)
    .map(([key, value]) => `${addReplacer(depth)}  ${key}: ${getString(value, depth + 1)}`);
  return `{\n${str.join('\n')}\n${addReplacer(depth - 1)}  }`;
};

const makeStylish = (tree, depth = 1) => {
  const result = tree.map((node) => {
    const {
      key, value, newValue, oldValue, children, status,
    } = node;

    switch (status) {
      case 'added':
        return `${addReplacer(depth)}+ ${key}: ${getString(value, depth + 1)}`;
      case 'removed':
        return `${addReplacer(depth)}- ${key}: ${getString(value, depth + 1)}`;
      case 'unupdated':
        return `${addReplacer(depth)}  ${key}: ${getString(value, depth + 1)}`;
      case 'updated': {
        const str1 = `${addReplacer(depth)}- ${key}: ${getString(oldValue, depth + 1)}`;
        const str2 = `${addReplacer(depth)}+ ${key}: ${getString(newValue, depth + 1)}`;
        return `${str1}\n${str2}`;
      }
      case 'nested': {
        return `${addReplacer(depth)}  ${key}: ${makeStylish(children, depth + 1)}`;
      }
      default:
        throw new Error(`Unknow ${status}!`);
    }
  });

  return `{\n${result.join('\n')}\n${addReplacer(depth)}  }`;
};

export default makeStylish;
