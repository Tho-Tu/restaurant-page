import "./style.css";

export default function loadHomePage() {
  console.log("load home page");
  const contentDiv = document.querySelector("#content");

  // NAVIGATION BAR
  const navBar = document.createElement("nav");
  const hyperLinks = document.createElement("ul");
  let navBarLinks = ["Home", "Menu", "About Us", "Reservation"];

  for (const link of navBarLinks) {
    const navLink = document.createElement("li");
    navLink.textContent = `${link}`;
    hyperLinks.appendChild(navLink);
  }

  navBar.appendChild(hyperLinks);
  contentDiv.appendChild(navBar);

  // HEADLINE
  const headLine = document.createElement("div");

  // ATTRIBUTION
  const attribution = document.createElement("div");
}
