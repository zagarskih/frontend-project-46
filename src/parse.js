const getFileParse = (fileData, fileType) => {
  let fileParse;
  if (fileType === 'json') {
    fileParse = JSON.parse(fileData);
  }
  return fileParse;
};

export default getFileParse;
