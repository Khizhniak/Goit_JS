const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  if (login.length <= 16 && login.length >= 4) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = function (arr, login) {
  if (arr.includes(login)) {
    return false;
  } else {
    return true;
  }
};

const addLogin = function (arr, login) {
  const log1 = isLoginValid(login);
  const log2 = isLoginUnique(login);

  if (log1 && log2) {
    arr.push(login)
    console.log('Login is pushed')
  } else {
    console.log('Invalid login')
  }
};

// Вызовы функции для проверки
addLogin(logins, 'Ajax');
addLogin(logins, 'robotGoogles');
addLogin(logins, 'Zod');
addLogin(logins, 'jqueryisextremelyfast');