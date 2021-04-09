export const mockLoginApi = (email, password) => {
  if (email === 'true@gmail.com' && password === '12345') {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(false);
      }, 2000);
    });
  }
};
