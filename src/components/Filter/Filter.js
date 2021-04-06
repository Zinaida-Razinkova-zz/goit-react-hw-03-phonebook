import React from "react";
import propTypes from "prop-types";
import styles from "./Filter.module.css";

function Filter({ value, onChange }) {
  return (
    <>
      <label>
        Find contacts by name
        <input
          className={styles.inputFilter}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
}

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Filter;
