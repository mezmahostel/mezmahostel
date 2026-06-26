document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let checkin = document.getElementById("checkin").value;
  let checkout = document.getElementById("checkout").value;
  let guests = document.getElementById("guests").value;

  let message =
Hello, I want to book a room:
Name: ${name}
Email: ${email}
Check-in: ${checkin}
Check-out: ${checkout}
Guests: ${guests};

  let url = "https://wa.me/37495169597?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
});
