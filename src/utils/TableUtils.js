
const getTableRows = (arr) => {
    const keys = Object.keys(arr[0]);
    return arr.map((col, rowIndex) => {
      return (
        <tr key={rowIndex}>
          {keys.map((row, index) => {
            return <td key={index}>{col[row]}</td>;
          })}
        </tr>
      );
    });
  };
  
  const getTableHeaders = (arr) => {
    const keys = Object.keys(arr[0]);
    return (
      <tr>
        {keys.map((val, index) => {
          return <th key={index}>{val}</th>;
        })}
      </tr>
    );
  };
  
  
  
  export { getTableRows, getTableHeaders };
  