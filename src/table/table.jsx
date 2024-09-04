import React from 'react';

const Table = ({ rowData = [] }) => { 
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>password</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        
        {rowData.map((eachRow, index) => (
          <tr key={index}> 
            <td>{eachRow.firstname}</td>
            <td>{eachRow.password}</td> 
            <td>{eachRow.email}</td> 
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
