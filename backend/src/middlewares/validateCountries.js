const validateCountries = (req, res, next) => {
  const { country, flag, language } = req.body;
  const errors = [];

  if (country == null) {
    errors.push({ field: "country", message: "This field is required" });
  } else if (country.length >= 255) {
    errors.push({
      field: "country",
      message: "Should contain less than 255 characters",
    });
  }
  if (flag == null) {
    errors.push({ field: "flag", message: "This field is required" });
  } else if (flag.length > 2) {
    errors.push({
      field: "flag",
      message: "Should contain only 2 characters",
    });
  }
  if (language == null) {
    errors.push({ field: "language", message: "This field is required" });
  } else if (language.length >= 255) {
    errors.push({
      field: "language",
      message: "Should contain less than 255 characters",
    });
  }

  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};

module.exports = validateCountries;
