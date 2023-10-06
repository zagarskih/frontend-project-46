import _ from 'lodash';

const makeTree = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const unsortedKeys = _.union(keys1, keys2);
  const sortedKeys = _.sortBy(unsortedKeys);

  return sortedKeys
    .map((key) => {
      if (typeof data1[key] === 'object' && typeof data2[key] === 'object') {
        return { key, children: makeTree(data1[key], data2[key]), status: 'nested' };
      }
      if (!Object.hasOwn(data1, key)) {
        return { key, value: data2[key], status: 'added' };
      }
      if (!Object.hasOwn(data2, key)) {
        return { key, value: data1[key], status: 'removed' };
      }
      if (data1[key] === data2[key]) {
        return { key, value: data1[key], status: 'unupdated' };
      }
      return {
        key, oldValue: data1[key], newValue: data2[key], status: 'updated',
      };
    });
};

export default makeTree;
