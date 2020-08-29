import React from "react";

import s from "./Transaction.module.scss";

function LineTable({ item }) {
  const { type, amount, currency } = item;

  return (
    <tr className={s.lineTable}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

export default LineTable;
