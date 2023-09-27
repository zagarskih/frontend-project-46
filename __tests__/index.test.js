import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { expect, test } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filepath) => path.join(__dirname, '..', '__fixtures__', filepath);
const readFile = (filepath) => readFileSync(getFixturePath(filepath), 'utf-8');

const expected = readFile('expectedJSON.txt');

const fileTypes = ['json', 'yml', 'yaml'];

test.each(fileTypes)('genDiff test', (fileType) => {
  const fileBefore = `__fixtures__/file1.${fileType}`;
  const fileAfter = `__fixtures__/file2.${fileType}`;
  expect(genDiff(fileBefore, fileAfter)).toEqual(expected);
});
