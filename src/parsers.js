import yaml from 'js-yaml';

const parse = (fileData, fileType) => {
  switch (fileType) {
    case 'json':
      return JSON.parse(fileData);
    case 'yml':
      return yaml.load(fileData);
    case 'yaml':
      return yaml.load(fileData);
    default:
      throw new Error(`Unknown extension: '${fileType}'!`);
  }
};

export default parse;
