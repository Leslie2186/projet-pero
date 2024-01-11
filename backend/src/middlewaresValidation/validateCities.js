const validateCities = (req, res, next) => {
  const {
    city,
    cash,
    picture,
    sunshine,
    monuments0,
    monuments1,
    monuments2,
    monuments3,
    monuments4,
    monuments5,
    monuments6,
  } = req.body;
  const errors = [];

  if (city == null) {
    errors.push({ field: "city", message: "This field is required" });
  } else if (city.length >= 255) {
    errors.push({
      field: "city",
      message: "Should contain less than 255 characters",
    });
  }
  if (req.body.countries_id == null) {
    errors.push({ field: "countries_Id", message: "This field is required" });
  }
  if (cash == null) {
    errors.push({ field: "cash", message: "This field is required" });
  } else if (cash.length !== 1) {
    errors.push({
      field: "cash",
      message: "Should contain only 1 characters",
    });
  }
  if (picture == null) {
    errors.push({ field: "picture", message: "This field is required" });
  } else if (picture.length >= 255) {
    errors.push({
      field: "picture",
      message: "Should contain less than 255 characters",
    });
  }
  if (sunshine == null) {
    errors.push({ field: "sunshine", message: "This field is required" });
  }
  if (monuments0 == null) {
    errors.push({ field: "monuments0", message: "This field is required" });
  } else if (monuments0.length >= 255) {
    errors.push({
      field: "monuments0",
      message: "Should contain less than 255 characters",
    });
  }
  if (monuments1 == null) {
    errors.push({ field: "monuments1", message: "This field is required" });
  } else if (monuments1.length >= 255) {
    errors.push({
      field: "monuments1",
      message: "Should contain less than 255 characters",
    });
  }
  if (monuments2 == null) {
    errors.push({ field: "monuments2", message: "This field is required" });
  } else if (monuments2.length >= 255) {
    errors.push({
      field: "monuments2",
      message: "Should contain less than 255 characters",
    });
  }
  if (monuments3 == null) {
    errors.push({ field: "monuments3", message: "This field is required" });
  } else if (monuments3.length >= 255) {
    errors.push({
      field: "monuments3",
      message: "Should contain less than 255 characters",
    });
  }
  if (monuments4 == null) {
    errors.push({ field: "monuments4", message: "This field is required" });
  } else if (monuments4.length >= 255) {
    errors.push({
      field: "monuments4",
      message: "Should contain less than 255 characters",
    });
  }
  if (monuments5 == null) {
    errors.push({ field: "monuments5", message: "This field is required" });
  } else if (monuments5.length >= 255) {
    errors.push({
      field: "monuments5",
      message: "Should contain less than 255 characters",
    });
  }
  if (monuments6 == null) {
    errors.push({ field: "monuments6", message: "This field is required" });
  } else if (monuments6.length >= 255) {
    errors.push({
      field: "monuments6",
      message: "Should contain less than 255 characters",
    });
  }

  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};

module.exports = validateCities;
