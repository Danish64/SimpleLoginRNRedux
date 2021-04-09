export const validateEmail = (email) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!email) {
    return false;
  } else if (reg.test(email)) {
    return true;
  }
  return false;
};

export const validatePassword = (password) => {
  if (password.length > 4) {
    return true;
  }
  return false;
};
