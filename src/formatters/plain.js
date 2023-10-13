const getValueFormat = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  }
  if (typeof (value) !== 'string') {
    return `${value}`;
  }
  return `'${value}'`;
};

const makePlain = (tree, path) => {
  const result = tree.map((node) => {
    const {
      key, value, newValue, oldValue, children, status,
    } = node;

    const prop = !path ? `${key}` : `${path}.${key}`;

    switch (status) {
      case 'added':
        return `Property '${prop}' was added with value: ${getValueFormat(value)}`;
      case 'removed':
        return `Property '${prop}' was removed`;
      case 'updated':
        return `Property '${prop}' was updated. From ${getValueFormat(oldValue)} to ${getValueFormat(newValue)}`;
      case 'unupdated':
        return null;
      case 'nested':
        return makePlain(children, prop);
      default:
        throw new Error(`Unknow type ${status}!`);
    }
  }).filter(Boolean).join('\n');

  return `${result}`;
};

export default makePlain;
