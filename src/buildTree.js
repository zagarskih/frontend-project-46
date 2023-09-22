const makeTree = (data1, data2) => {
  const keys2 = Object.keys(data2);
  const keys1 = Object.keys(data1);
  const diffs1 = keys2.reduce((acc, key) => {
    if (!Object.hasOwn(data1, key)) {
      acc.push(['+', `${key}`, `${data2[key]}`]);
    } else if (Object.hasOwn(data1, key) && data1[key] !== data2[key]) {
      acc.push(['-', `${key}`, `${data1[key]}`]);
      acc.push(['+', `${key}`, `${data2[key]}`]);
    } else if (Object.hasOwn(data1, key) && data1[key] === data2[key]) {
      acc.push([' ', `${key}`, `${data1[key]}`]);
    }
    return acc;
  }, []);

  const diffs2 = keys1.reduce((acc, key) => {
    if (!Object.hasOwn(data2, key)) {
      acc.push(['-', `${key}`, `${data1[key]}`]);
    }
    return acc;
  }, []);

  const diffs = [...diffs1, ...diffs2];
  const sortedDiffs = diffs.sort((arr1, arr2) => {
    if (arr1[1] < arr2[1]) {
      return -1;
    }
    if (arr1[1] > arr2[1]) {
      return 1;
    }
    return 0;
  });

  const strOfDiffs = sortedDiffs.map((elem) => `  ${elem[0]} ${elem[1]}: ${elem[2]}`).join('\n');
  const tree = `{\n${strOfDiffs}\n}`;
  return tree;
};

export default makeTree;
