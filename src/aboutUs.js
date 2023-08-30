export default function loadAboutUs(contentDiv) {
  const aboutUsDiv = document.createElement("div");
  aboutUsDiv.setAttribute("class", "about-us-section");

  const title = document.createElement("h1");
  title.textContent = "About us - Est. 1949";
  aboutUsDiv.appendChild(title);

  function subTitle(titleString) {
    const tempTitle = document.createElement("h2");
    tempTitle.textContent = `${titleString}`;
    aboutUsDiv.appendChild(tempTitle);
  }

  function description(descriptionString) {
    const tempTitle = document.createElement("div");
    tempTitle.textContent = `${descriptionString}`;
    aboutUsDiv.appendChild(tempTitle);
  }

  //   About Us - Est. 1949

  // Nestled in Culinary Excellence Since 1949

  // At Exquisite Dining Delights, we take immense pride in our rich history that spans over seven decades of culinary innovation and dedication. Established in 1949, our establishment has been a beacon of refined dining experiences, consistently offering an unparalleled fusion of gastronomic artistry, top-tier service, and timeless elegance.
  subTitle("Nestled in Culinary Excellence Since 1949");
  description(
    "At Exquisite Dining Delights, we take immense pride in our rich history that spans over seven decades of culinary innovation and dedication. Established in 1949, our establishment has been a beacon of refined dining experiences, consistently offering an unparalleled fusion of gastronomic artistry, top-tier service, and timeless elegance."
  );

  // Our Legacy

  // Founded by visionary chef Antoine Laurent, our restaurant embarked on a journey to redefine the boundaries of fine dining. Chef Laurent's passion for flavors and his commitment to using only the finest ingredients laid the foundation for the legacy we carry forward today.
  subTitle("Our Legacy");
  description(
    "Founded by visionary chef Antoine Laurent, our restaurant embarked on a journey to redefine the boundaries of fine dining. Chef Laurent's passion for flavors and his commitment to using only the finest ingredients laid the foundation for the legacy we carry forward today."
  );

  // Culinary Craftsmanship

  // With each dish meticulously crafted, our culinary team strives to create an orchestra of tastes that dance on the palates of our esteemed guests. Our menu pays homage to traditional techniques while embracing contemporary flavors, resulting in an unforgettable symphony of textures and aromas.
  subTitle("Culinary Craftsmanship");
  description(
    "With each dish meticulously crafted, our culinary team strives to create an orchestra of tastes that dance on the palates of our esteemed guests. Our menu pays homage to traditional techniques while embracing contemporary flavors, resulting in an unforgettable symphony of textures and aromas."
  );

  // Timeless Elegance

  // Step into our tastefully designed dining haven, where every detail, from the ambient lighting to the plush furnishings, has been thoughtfully curated to ensure an ambiance that matches the culinary excellence we serve. We believe that a dining experience is not just about the food; it's about creating memories.
  subTitle("Timeless Elegance");
  description(
    "Step into our tastefully designed dining haven, where every detail, from the ambient lighting to the plush furnishings, has been thoughtfully curated to ensure an ambiance that matches the culinary excellence we serve. We believe that a dining experience is not just about the food; it's about creating memories."
  );
  // Uncompromising Service

  // Our commitment to impeccable service is as strong as it was in 1949. Our dedicated staff, each a connoisseur of hospitality, is here to ensure your every need is met with grace and warmth. We believe that the harmony of excellent food and impeccable service is the heart of an extraordinary dining experience.

  subTitle("Uncompromising Service");
  description(
    "Our commitment to impeccable service is as strong as it was in 1949. Our dedicated staff, each a connoisseur of hospitality, is here to ensure your every need is met with grace and warmth. We believe that the harmony of excellent food and impeccable service is the heart of an extraordinary dining experience."
  );
  // A Culinary Journey Through Time

  // For over seven decades, Exquisite Dining Delights has been a cornerstone of elegance, flavor, and hospitality. We invite you to join us on a journey that celebrates the past while embracing the present. Whether you're celebrating a special occasion, sharing a quiet moment, or indulging in the art of dining, our doors are open to welcome you to a world of culinary splendor.

  subTitle("A Culinary Journey Through Time");
  description(
    "For over seven decades, Exquisite Dining Delights has been a cornerstone of elegance, flavor, and hospitality. We invite you to join us on a journey that celebrates the past while embracing the present. Whether you're celebrating a special occasion, sharing a quiet moment, or indulging in the art of dining, our doors are open to welcome you to a world of culinary splendor."
  );
  contentDiv.appendChild(aboutUsDiv);
}
