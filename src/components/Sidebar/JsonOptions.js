import React from "react";
import { Toggle } from "buffetjs";
import PropTypes from "prop-types";

import FieldSet, { HorizontalField, HorizontalLabel } from "./FieldSet";

function JsonOptions({ values, handleChange, handleBlur }) {
  const handleToggleChange = event => {
    handleChange(event);
    const {
      target: { name, value },
    } = event;
    handleBlur({ [name]: value });
  };
  return (
    <FieldSet>
      <h2>JSON Options</h2>
      <HorizontalField>
        <HorizontalLabel htmlFor="validate">Validate</HorizontalLabel>
        <Toggle
          id="validate"
          value={values.validate}
          name="validate"
          onChange={handleToggleChange}
        />
      </HorizontalField>
      <HorizontalField>
        <HorizontalLabel htmlFor="allow-comments">
          Allow Comments
        </HorizontalLabel>
        <Toggle
          id="allow-comments"
          value={values.allowComments}
          name="allowComments"
          onChange={handleToggleChange}
        />
      </HorizontalField>
    </FieldSet>
  );
}

JsonOptions.defaultProps = {
  handleBlur: () => {},
};

JsonOptions.propTypes = {
  values: PropTypes.any.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func,
};

export default JsonOptions;