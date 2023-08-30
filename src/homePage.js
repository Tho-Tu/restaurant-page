import "./style.css";

export default function loadHomePage() {
  const contentDiv = document.querySelector("#content");

  // NAVIGATION BAR
  const navBar = document.createElement("nav");
  const hyperLinks = document.createElement("ul");
  let navBarLinks = ["Home", "Menu", "About Us", "Reservation"];

  for (const link of navBarLinks) {
    const navLink = document.createElement("li");
    navLink.textContent = `${link}`;
    navLink.setAttribute("id", `${link}Page`);
    hyperLinks.appendChild(navLink);
  }

  navBar.appendChild(hyperLinks);
  contentDiv.appendChild(navBar);

  // HEADLINE
  const headLine = document.createElement("div");
  headLine.setAttribute("class", "head-line");
  headLine.textContent = "The Restaurant";
  contentDiv.appendChild(headLine);

  // ATTRIBUTION
  const attribution = document.createElement("a");
  attribution.setAttribute("class", "attribution");
  attribution.setAttribute(
    "href",
    "https://www.freepik.com/free-photo/restaurant-interior_1243339.htm#query=restuarant&position=11&from_view=search&track=sph"
  );
  attribution.textContent = "Image by evening_tao on Freepik";
  contentDiv.appendChild(attribution);
}
