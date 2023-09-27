import yaml from 'js-yaml';

const getFileParse = (fileData, fileType) => {
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

export default getFileParse;
