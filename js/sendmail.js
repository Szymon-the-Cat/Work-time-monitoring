const sendMail = function () {
  const tempParams = {
    from_name: document.getElementById("name").value,
    to_name: document.getElementById("email").value,
    from_name: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_kjoll2s", "service_kjoll2s", tempParams)
    .then(function (res) {
      console.log("sucess", res.status);
    });
};
