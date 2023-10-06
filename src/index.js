import path from 'path';
import { readFileSync } from 'node:fs';
import getFileParse from './parsers.js';
import makeTree from './buildTree.js';
import formatTree from './formatters/index.js';

const getPath = (fileName) => path.resolve(process.cwd(), fileName);

const getFileType = (fileName) => path.extname(fileName).slice(1);

const getParsedData = (filePath) => {
  const fileData = readFileSync(filePath, 'utf-8');
  const fileType = getFileType(filePath);
  const parsedData = getFileParse(fileData, fileType);
  return parsedData;
};

const genDiff = (path1, path2, format = 'stylish') => {
  const filePath1 = getPath(path1);
  const filePath2 = getPath(path2);

  const parsedFile1 = getParsedData(filePath1);
  const parsedFile2 = getParsedData(filePath2);

  const tree = makeTree(parsedFile1, parsedFile2);

  return formatTree(tree, format);
};

export default genDiff;
