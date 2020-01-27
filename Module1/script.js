"use strict";
const adminLogin = "admin";
const adminPassword = "m4ngo1zh4ackz0r";

let someLogin = prompt("login:");

if (someLogin === adminLogin) {
  let somePass = prompt("password:");

  if (somePass === adminPassword) {
    alert("welcome!");
  } else if (somePass === null) {
    alert("bye!");
  } else if (somePass !== adminPassword) {
    alert("wrong!");
  }
} else if (someLogin === null) {
  alert("bye!");
} else if (someLogin !== adminLogin) {
  alert("wrong!");
}
