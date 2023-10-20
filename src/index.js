import path from 'path';
import { readFileSync } from 'node:fs';
import parse from './parsers.js';
import makeTree from './buildTree.js';
import formatTree from './formatters/index.js';

const getPath = (fileName) => path.resolve(process.cwd(), fileName);

const getFileType = (fileName) => path.extname(fileName).slice(1);

const getData = (filePath) => {
  const fileData = readFileSync(filePath, 'utf-8');
  const fileType = getFileType(filePath);
  return parse(fileData, fileType);
};

const genDiff = (path1, path2, format = 'stylish') => {
  const parsedFile1 = getData(getPath(path1));
  const parsedFile2 = getData(getPath(path2));

  const tree = makeTree(parsedFile1, parsedFile2);

  return formatTree(tree, format);
};

export default genDiff;
