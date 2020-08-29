import React from "react";

import PropTypes from "prop-types";

import LineTable from "./LineTable";

import s from "./Transaction.module.scss";

function Transaction({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.headerTable}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={s.bodyTable}>
        {items.map((item) => {
          const { id } = item;

          return <LineTable key={id} item={item} />;
        })}
      </tbody>
    </table>
  );
}

Transaction.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default Transaction;
