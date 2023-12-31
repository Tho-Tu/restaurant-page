export default function loadHomePage(contentDiv) {
  // HEADLINE
  const headLine = document.createElement("div");
  headLine.setAttribute("class", "head-line");
  headLine.textContent = "The Restaurant";
  contentDiv.appendChild(headLine);

  // ATTRIBUTION
  const attribution = document.createElement("a");
  attribution.setAttribute("class", "attribution");
  attribution.setAttribute("target", "_blank");
  attribution.setAttribute(
    "href",
    "https://www.freepik.com/free-photo/restaurant-interior_1243339.htm#query=restuarant&position=11&from_view=search&track=sph"
  );
  attribution.textContent = "Image by evening_tao on Freepik";
  contentDiv.appendChild(attribution);
}
