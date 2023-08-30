import homePage from "./homePage.js";
import menuPage from "./menuPage.js";
import "./style.css";

loadPage();

function loadPage() {
  const contentDiv = document.querySelector("#content");

  // clear the page
  const clearPage = () => {
    contentDiv.textContent = "";
  };

  // NAVIGATION BAR
  const loadNavBar = () => {
    const navBar = document.createElement("nav");
    const hyperLinks = document.createElement("ul");
    let navBarLinks = ["home", "menu", "about-us", "reservation"];

    for (const link of navBarLinks) {
      const navLink = document.createElement("li");
      navLink.textContent = `${link}`;
      navLink.setAttribute("id", `${link}-page`);
      hyperLinks.appendChild(navLink);
    }

    navBar.appendChild(hyperLinks);
    contentDiv.appendChild(navBar);

    const homeLink = document.querySelector("#home-page");
    const menuLink = document.querySelector("#menu-page");
    const aboutUsLink = document.querySelector("#about-us-page");
    const reservationLink = document.querySelector("#reservation-page");

    // load the page depending on user click
    homeLink.addEventListener("click", () => {
      clearPage();
      loadNavBar();
      homePage(contentDiv);
    });

    menuLink.addEventListener("click", () => {
      clearPage();
      loadNavBar();
      // menuPage(contentDiv);
    });

    aboutUsLink.addEventListener("click", () => {
      clearPage();
      loadNavBar();
      // load about us
    });

    reservationLink.addEventListener("click", () => {
      clearPage();
      loadNavBar();
      // load reservation
    });
  };

  // loads the default home page first
  loadNavBar();
  homePage(contentDiv);
}
