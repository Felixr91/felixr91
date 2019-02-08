let phoneIcon = document.getElementById("phone-icon")
let phoneNumber = document.getElementById("number")

let emailIcon = document.getElementById("email-icon")
let email = document.getElementById("email")

let displayPhone = true

phoneIcon.addEventListener("click", function () {
  phoneIcon.style.display = "none"
  phoneNumber.classList.remove("hide-number")
})

emailIcon.addEventListener("click", function () {
  emailIcon.style.display = "none"
  email.classList.remove("hide-email")
})

