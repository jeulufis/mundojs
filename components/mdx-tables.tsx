import React from 'react';

const MdxTables = ({ columns, data, renderCell }:any) => {
  return (
    <table className='table-auto border-collapse'>
      <thead>
        <tr>
          {columns.map((column:any, index:any) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row:any, rowIndex:any) => (
          <tr key={rowIndex}>
            {columns.map((_:any, columnIndex:any) => (
              <td key={columnIndex}>
                {renderCell ? renderCell(row, columnIndex) : row[columns[columnIndex]]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MdxTables;
