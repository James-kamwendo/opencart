const form = document.getElementById("login-form");
const submitBtn = document.getElementById("submit-btn");

// // Handle submitted form to login a user
form.addEventListener("submit", function (e) {
  e.preventDefault();
  submitBtn.innerText = "Loading...";

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log(email, password);

  // login the user
  fetch("https://api-web-service-g48n.onrender.com/api/v1/users", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.success) {
        console.log(json);
        submitBtn.innerText = "Login";
        window.location.href = "index.html";
      } else {
        submitBtn.innerText = "Login";
        alert(`Something went wrong: ${json.status}`);
      }
    })
    .catch((error) => {
      submitBtn.innerText = "Login";
      alert(`Error logging into your account ${error}`);
      console.error("Error logging into your account ", error);
    });
});

// fetch("https://fakestoreapi.com/auth/login", {
//   method: "POST",
//   body: JSON.stringify({
//     username: "mor_2314",
//     password: "83r5^_",
//   }),
//   headers: {
//     "Content-Type" : "application/json"
//   }
// })
//   .then((res) => res.json())
//   .then((json) => console.log(json));