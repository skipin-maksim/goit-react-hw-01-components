import React from "react";

import PropTypes from "prop-types";
import colorPicker from "./colorPicker";

import s from "./Statistics.module.scss";

function Statistics({ title, stats }) {
  const isShowTitle = title;

  return (
    <section className={s.statistics}>
      {isShowTitle && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map((elem) => (
          <li key={elem.id} className={colorPicker(elem.label)}>
            <span className={s.label}>{elem.label}</span>
            <span className={s.percentage}>{elem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Statistics;
