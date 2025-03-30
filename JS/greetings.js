document.addEventListener("DOMContentLoaded", () => {
  const loginInput = document.querySelector("#login-form input");
  const loginForm = document.querySelector("#login-form");
  const greeting = document.querySelector("#greeting");

  const HIDDEN_CLASSNAME = "hidden";
  const USERNAME_KEY = "username";

  function onLoginSubmit(event) {
      event.preventDefault();
      loginForm.classList.add(HIDDEN_CLASSNAME);

      const username = loginInput.value;
      paintGreetings(username);
      localStorage.setItem(USERNAME_KEY, username);
  }

  function paintGreetings(username) {
      greeting.innerText = `Hello ${username}`;
      greeting.classList.remove(HIDDEN_CLASSNAME);
  }

  const savedUsername = localStorage.getItem(USERNAME_KEY);

  console.log("Saved Username:", savedUsername); 

  if (savedUsername === null) {
      loginForm.classList.remove(HIDDEN_CLASSNAME);
      loginForm.addEventListener("submit", onLoginSubmit);
  } else {
      paintGreetings(savedUsername);
  }
});

