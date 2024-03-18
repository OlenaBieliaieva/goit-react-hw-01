import React from "react";

export const Transaction = ({ type, amount, currency }) => {
  return (
    <React.Fragment>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </React.Fragment>
  );
};
