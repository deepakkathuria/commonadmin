// utils/auth.js
const STATIC_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
};

export const login = (username, password) => {
  if (
    username === STATIC_CREDENTIALS.username &&
    password === STATIC_CREDENTIALS.password
  ) {
    localStorage.setItem('isAuthenticated', 'true');
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem('isAuthenticated');
};

export const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};
