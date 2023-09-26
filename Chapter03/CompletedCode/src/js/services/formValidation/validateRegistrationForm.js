export default function validateRegistrationForm(formValues) {

  const result = {
    username: validateUserName(formValues.username),
    email: validateEmail(formValues.email),
    phone: validatePhone(formValues.phone),
    age: validateAge(formValues.age),
    profession: validateProfession(formValues.profession),
    experience: validateExperience(formValues.experience),
  };

  let field, isValid = true;
  for(field in result) {
    isValid = isValid && result[field];
  }

  return {
    isValid,
    result,
  };

}

function validateUserName(name) {
  return name.length > 3;
}

function validatePhone(phone) {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phoneRegex.test(phone);
}

function validateAge(age) {
  return age >= 10 && age <= 25;
}

function validateProfession(profession) {
  const acceptedValues = ['school','college','trainee','employee'];
  return acceptedValues.indexOf(profession) > -1;
}

function validateExperience(experience) {
  return experience > 0 && experience < 4;
}
