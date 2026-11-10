// MOBILE NAVIGATION
function toggleMenu() {
  const navigation = document.getElementById("navigation");
  if (navigation) {
    navigation.classList.toggle("show");
  }
}

// NEWSLETTER SUBSCRIPTION
async function subscribe(event) {
  event.preventDefault();

  const name = document.getElementById("subscriberName").value;
  const email = document.getElementById("subscriberEmail").value;
  const phone = document.getElementById("subscriberPhone").value;
  const message = document.getElementById("subscribeMessage");

  message.textContent =
    "Thank you, " + name + "! Your form is ready, but email delivery still needs to be connected.";

  console.log("Newsletter details:", { name, email, phone });
}

// DOMINION SUMMIT REGISTRATION
async function registerSummit(event) {
  event.preventDefault();

  const name = document.getElementById("summitName").value;
  const phone = document.getElementById("summitPhone").value;
  const email = document.getElementById("summitEmail").value;
  const attendance = document.getElementById("attendanceType").value;
  const from = document.getElementById("dateFrom").value;
  const to = document.getElementById("dateTo").value;
  const message = document.getElementById("registrationMessage");

  if (to < from) {
    message.textContent = "Your ending date cannot be before your starting date.";
    return;
  }

  message.textContent =
    "Thank you, " + name + "! Your registration details have been entered. Online submission still needs to be connected.";

  console.log("Summit registration:", {
    name,
    phone,
    email,
    attendance,
    from,
    to
  });
}
