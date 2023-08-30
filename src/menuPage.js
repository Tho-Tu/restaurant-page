export default function loadMenuPage(contentDiv) {
  const menuDiv = document.createElement("div");
  menuDiv.setAttribute("class", "menu-section");

  const title = document.createElement("h1");
  title.textContent = "Exquisite Dining Delights";
  menuDiv.appendChild(title);

  function subTitle(titleString) {
    const tempTitle = document.createElement("h2");
    tempTitle.textContent = `${titleString}`;
    menuDiv.appendChild(tempTitle);
  }

  function foodName(foodString) {
    const tempTitle = document.createElement("h4");
    tempTitle.textContent = `${foodString}`;
    menuDiv.appendChild(tempTitle);
  }

  function foodDescription(descriptionString) {
    const tempTitle = document.createElement("div");
    tempTitle.textContent = `${descriptionString}`;
    menuDiv.appendChild(tempTitle);
  }

  //   Appetizer

  //   Seared Scallop Medley
  //   Plump scallops seared to perfection, accompanied by a citrus-infused arugula salad and a saffron aioli drizzle.

  //   Truffle-Stuffed Mushrooms
  //   Delicate button mushrooms stuffed with a blend of earthy truffle, herbed cream cheese, and toasted breadcrumbs.

  //   Foie Gras Pâté
  //   Luxurious duck foie gras pâté served with toasted brioche, a blackberry compote, and microgreens.

  subTitle("Appetizer");
  foodName("Seared Scallop Medley");
  foodDescription(
    "Plump scallops seared to perfection, accompanied by a citrus-infused arugula salad and a saffron aioli drizzle."
  );
  foodName("Truffle-Stuffed Mushrooms");
  foodDescription(
    "Delicate button mushrooms stuffed with a blend of earthy truffle, herbed cream cheese, and toasted breadcrumbs."
  );
  foodName("Foie Gras Pâté");
  foodDescription(
    "Luxurious duck foie gras pâté served with toasted brioche, a blackberry compote, and microgreens."
  );

  //   Soup & Salad:

  //   Lobster Bisque
  //   Creamy lobster bisque with chunks of tender lobster meat, garnished with chervil and a touch of sherry.

  //   Heirloom Tomato Caprese
  //   Vibrant heirloom tomatoes paired with fresh buffalo mozzarella, basil leaves, drizzled with aged balsamic reduction.

  //   Wild Mushroom Consommé
  //   A clear and refined wild mushroom broth garnished with chive oil and delicate mushroom confetti.

  subTitle("Soup & Salad:");
  foodName("Lobster Bisque");
  foodDescription(
    "Creamy lobster bisque with chunks of tender lobster meat, garnished with chervil and a touch of sherry."
  );

  foodName("Heirloom Tomato Caprese");
  foodDescription(
    "Vibrant heirloom tomatoes paired with fresh buffalo mozzarella, basil leaves, drizzled with aged balsamic reduction."
  );

  foodName("Wild Mushroom Consommé");
  foodDescription(
    "A clear and refined wild mushroom broth garnished with chive oil and delicate mushroom confetti."
  );

  //   Main Courses:

  //   Filet Mignon
  //   Prime beef filet, cooked to your preference, served with a red wine reduction, truffle-infused mashed potatoes, and grilled asparagus.

  //   Pan-Seared Halibut
  //   Succulent halibut fillet with a crispy skin, accompanied by saffron-infused risotto and lemon beurre blanc.

  //   Vegetable Wellington
  //   Seasonal roasted vegetables encased in flaky puff pastry, served with a velvety sun-dried tomato coulis and watercress salad.

  subTitle("Main Courses:");
  foodName("Filet Mignon");
  foodDescription(
    "Prime beef filet, cooked to your preference, served with a red wine reduction, truffle-infused mashed potatoes, and grilled asparagus."
  );

  foodName("Pan-Seared Halibut");
  foodDescription(
    "Succulent halibut fillet with a crispy skin, accompanied by saffron-infused risotto and lemon beurre blanc."
  );

  foodName("Vegetable Wellington");
  foodDescription(
    "Seasonal roasted vegetables encased in flaky puff pastry, served with a velvety sun-dried tomato coulis and watercress salad."
  );

  //   Chef's Specialties:

  //   Duck à l'Orange
  //   Roasted duck breast glazed with a zesty orange and Grand Marnier reduction, accompanied by caramelized Brussels sprouts and sweet potato puree.

  //   Miso-Glazed Black Cod
  //   Marinated black cod with a delicate miso glaze, served atop black forbidden rice and baby bok choy.

  //   Risotto Primavera
  //   Creamy Arborio risotto infused with seasonal vegetables, finished with Parmesan cheese, lemon zest, and a drizzle of truffle oil.

  subTitle("Chef's Specialties:");
  foodName("Duck à l'Orange");
  foodDescription(
    "Roasted duck breast glazed with a zesty orange and Grand Marnier reduction, accompanied by caramelized Brussels sprouts and sweet potato puree."
  );

  foodName("Miso-Glazed Black Cod");
  foodDescription(
    "arinated black cod with a delicate miso glaze, served atop black forbidden rice and baby bok choy."
  );

  foodName("Risotto Primavera");
  foodDescription(
    "Creamy Arborio risotto infused with seasonal vegetables, finished with Parmesan cheese, lemon zest, and a drizzle of truffle oil."
  );

  //   Decadent Desserts:

  //   Molten Chocolate Lava Cake
  //   Decadent chocolate lava cake with a gooey center, served with raspberry coulis and Madagascar vanilla bean ice cream.

  //   Crème Brûlée Trio
  //   A trio of classic vanilla bean, lavender-infused, and espresso crème brûlées, garnished with delicate spun sugar.

  //   Citrus Basil Sorbet
  //   Refreshing sorbet trio featuring tangy grapefruit, zesty lemon, and aromatic basil, served in a frozen citrus shell.

  subTitle("Decadent Desserts:");
  foodName("Molten Chocolate Lava Cake");
  foodDescription(
    "Decadent chocolate lava cake with a gooey center, served with raspberry coulis and Madagascar vanilla bean ice cream."
  );

  foodName("Crème Brûlée Trio");
  foodDescription(
    "A trio of classic vanilla bean, lavender-infused, and espresso crème brûlées, garnished with delicate spun sugar."
  );

  foodName("Citrus Basil Sorbet");
  foodDescription(
    "Refreshing sorbet trio featuring tangy grapefruit, zesty lemon, and aromatic basil, served in a frozen citrus shell."
  );

  //   Wine Pairing Recommendations Available.

  subTitle("Wine Pairing Recommendations Available.");

  contentDiv.appendChild(menuDiv);
}
