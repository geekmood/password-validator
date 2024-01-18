export default function inputValidationChecker(password, confirmPassword) {
  let issues = [];

  if (password.length < 6) {
    issues.push("Password must have a minimum length of 6 characters");
  }
  if (!password.match(/[A-Z]/))
    issues.push("Password must have at least 1 uppercase character");

  if (!password.match(/[a-z]/))
    issues.push("Password must have at least 1 lowercase character");

  if (!password.match(/[\d]/))
    issues.push("Password must have at least 1 number");

  if (!password.match(/[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/))
    issues.push("Password must have at least 1 special character");

  if (confirmPassword !== password) {
    issues.push("Confirm Password must match the Password");
  }

  if (issues.length === 0) {
    return ["Success"];
  } else {
    return issues;
  }
}
