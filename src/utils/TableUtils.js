
const getTableRows = (arr) => {
  return arr;
};

const getTableHeaders = (arr) => {
  return Object.keys(arr[0]).map(x => x.replace(/([A-Z])/g, " $1"));
};

const getTableColumns = (arr) => {
  return Object.keys(arr[0]).join('.');
}



export { getTableRows, getTableHeaders, getTableColumns };
