import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Item</th>
        <th>Quantity</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.itemData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.item}</td>
        <td>{row.quantity}</td>
        <td>
          <button onClick={() => props.removeItem(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  console.log(rows);
  return <tbody>{rows}</tbody>;
};

const Table = props => {
  const { itemData, removeItem } = props;
  return (
    <table>
      <TableHeader />
      <TableBody itemData={itemData} removeItem={removeItem} />
    </table>
  );
};
export default Table;
