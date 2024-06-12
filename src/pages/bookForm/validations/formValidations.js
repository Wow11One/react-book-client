const stringValueValidation = (value) => value.length < 3;
const minNumberValueConstraint = (value, min) => value < min;
const foreignKeyEmpty = (key) => !key;

export default {
  stringValueValidation,
  minNumberValueConstraint,
  foreignKeyEmpty,
};
