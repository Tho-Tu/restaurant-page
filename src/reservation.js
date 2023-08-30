export default function loadReservation(contentDiv) {
  const reservationDiv = document.createElement("div");
  reservationDiv.setAttribute("class", "reservation-section");

  const title = document.createElement("h1");
  title.textContent = "Reservation";
  reservationDiv.appendChild(title);

  const description = document.createElement("div");
  description.textContent = `We eagerly anticipate the honor of your company. To make a reservation or inquire about private events, please contact our reservations team at (123 456 789). Join us as we continue to write the next chapter in our storied history of culinary excellence.`;
  reservationDiv.appendChild(description);

  contentDiv.appendChild(reservationDiv);
}
