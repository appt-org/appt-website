const dataContext = require.context('@site/src/data/generated/data-features', false, /\.json$/);

const getFileNameOnly = filePath => {
  return filePath.split('/').pop().split('.').shift();
};

const dataJson = {};
dataContext.keys().map(key => {
  const dataObject = dataContext(key);
  const dataKey = getFileNameOnly(key);
  dataJson[dataKey] = dataObject;
});

export default dataJson;
