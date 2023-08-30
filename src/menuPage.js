export default function loadMenuPage(contentDiv) {
  const menuDiv = document.createElement("div");
  menuDiv.setAttribute("class", "menu-div");
  menuDiv.textContent = `Exquisite Dining Delights

  Appetizers:
  
  Seared Scallop Medley
  Plump scallops seared to perfection, accompanied by a citrus-infused arugula salad and a saffron aioli drizzle.
  
  Truffle-Stuffed Mushrooms
  Delicate button mushrooms stuffed with a blend of earthy truffle, herbed cream cheese, and toasted breadcrumbs.
  
  Foie Gras Pâté
  Luxurious duck foie gras pâté served with toasted brioche, a blackberry compote, and microgreens.
  
  Soup & Salad:
  
  Lobster Bisque
  Creamy lobster bisque with chunks of tender lobster meat, garnished with chervil and a touch of sherry.
  
  Heirloom Tomato Caprese
  Vibrant heirloom tomatoes paired with fresh buffalo mozzarella, basil leaves, drizzled with aged balsamic reduction.
  
  Wild Mushroom Consommé
  A clear and refined wild mushroom broth garnished with chive oil and delicate mushroom confetti.
  
  Main Courses:
  
  Filet Mignon
  Prime beef filet, cooked to your preference, served with a red wine reduction, truffle-infused mashed potatoes, and grilled asparagus.
  
  Pan-Seared Halibut
  Succulent halibut fillet with a crispy skin, accompanied by saffron-infused risotto and lemon beurre blanc.
  
  Vegetable Wellington
  Seasonal roasted vegetables encased in flaky puff pastry, served with a velvety sun-dried tomato coulis and watercress salad.
  
  Chef's Specialties:
  
  Duck à l'Orange
  Roasted duck breast glazed with a zesty orange and Grand Marnier reduction, accompanied by caramelized Brussels sprouts and sweet potato puree.
  
  Miso-Glazed Black Cod
  Marinated black cod with a delicate miso glaze, served atop black forbidden rice and baby bok choy.
  
  Risotto Primavera
  Creamy Arborio risotto infused with seasonal vegetables, finished with Parmesan cheese, lemon zest, and a drizzle of truffle oil.
  
  Decadent Desserts:
  
  Molten Chocolate Lava Cake
  Decadent chocolate lava cake with a gooey center, served with raspberry coulis and Madagascar vanilla bean ice cream.
  
  Crème Brûlée Trio
  A trio of classic vanilla bean, lavender-infused, and espresso crème brûlées, garnished with delicate spun sugar.
  
  Citrus Basil Sorbet
  Refreshing sorbet trio featuring tangy grapefruit, zesty lemon, and aromatic basil, served in a frozen citrus shell.
  
  Wine Pairing Recommendations Available.`;

  contentDiv.appendChild(menuDiv);
}
