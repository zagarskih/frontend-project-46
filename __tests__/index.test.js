import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filepath) => path.join(__dirname, '..', '__fixtures__', filepath);
const readFile = (filepath) => readFileSync(getFixturePath(filepath), 'utf-8');

const expectedStylish = readFile('expectedStylish.txt');
const expectedPlain = readFile('expectedPlain.txt');
const expectedJSON = readFile('expectedJSON.txt');

const fileTypes = ['json', 'yml', 'yaml'];

test.each(fileTypes)('genDiff test', (fileType) => {
  const fileBefore = `__fixtures__/file1.${fileType}`;
  const fileAfter = `__fixtures__/file2.${fileType}`;
  expect(genDiff(fileBefore, fileAfter, 'stylish')).toEqual(expectedStylish);
  expect(genDiff(fileBefore, fileAfter, 'plain')).toEqual(expectedPlain);
  expect(genDiff(fileBefore, fileAfter, 'json')).toEqual(expectedJSON);
  expect(genDiff(fileBefore, fileAfter)).toEqual(expectedStylish);
});
