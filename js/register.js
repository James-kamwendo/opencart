const form = document.getElementById("register-form");
const submitBtn = document.getElementById("submit-btn");

// Handle submitted form to register an account
form.addEventListener("submit", function (e) {
  e.preventDefault();
  submitBtn.innerText = "Loading...";

  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value;

  console.log(email, name, password);

  fetch("https://api-web-service-g48n.onrender.com/api/v1/users", {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      password,
      phone,
      dob: "--",
      signin_by: "form"
    }),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      if (json.success == true) {
        submitBtn.innerText = "Create";
        alert(json.status);
        window.location.href = "login.html";
      } else {
        submitBtn.innerText = "Create";
        alert(
          `Something went wrong while creating your account ${json?.status}`
        );
      }
    })
    .catch((error) => {
      submitBtn.innerText = "Create";
      alert(`Error creating your account ${error}`);
      console.error("Error creating your account ", error);
    });
});
