
// ************************Javascript for Hamburger Button**********************

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});


// **********************Format Footer************************************
document.addEventListener('DOMContentLoaded', function () {
    // Get the span element by its ID
    const lastModifiedSpan = document.getElementById('lastModifiedDate');

    // Get the last modified date of the document
    const lastModified = document.lastModified;

    // Create a new Date object from the last modified string
    const dateObject = new Date(lastModified);

    // Format the date for display (e.g., using toLocaleDateString and toLocaleTimeString)
    const formattedDate = dateObject.toLocaleDateString() + ' ' + dateObject.toLocaleTimeString();

    // Update the innerHTML of the span with the formatted date
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = formattedDate;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("currentYear");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});


//************Javescript for filtered-recipes.html project********************************

const recipes = [
    {
        nameofdish: "Sweet Avocado Toast",
        category: "Lunch",
        preptime: "20 minutes",
        servings: 1,
        imageUrl:
            "./images/sweet-avocado-toast.webp",
        ingredients: ["2 slices of multi-grain bread", "1 T Cream Cheese", "1 T your favorite jam", "1 avocado", "2 eggs"],
        directions: ["Lay two slices on your favorite bread on a plate. Spread cream cheese and jam on each slice. Cut an avocado into slices and arrange half of the slices on each slice of bread. Fry two eggs and place one on top of each slice of bread. Prepare to enjoy a very yummy sandwich."],
        bytheway: ["This sandwich is super yummy, but difficult to eat except with a knife and fork. I usually cut the two open-faced sandwiches into 1/2 inch squares before attempting to eat them."],
        contributedby: "Paul A. Scherbel"
    },
    
    {
        nameofdish: "Bean Burrito",
        category: "Lunch, Dinner",
        preptime: "10 minutes",
        servings: 1,
        imageUrl:
            "./images/burrito.webp",
        ingredients: ["1 large flour tortilla", "1/2 Cup Refried Beans", "1/4 cup rice", " 1/4 cup sliced tomatoes", "1/4 avocado - sliced", "2 T Mango Chunks", "1/4 cup Peach Manago Salsa", "2 T grated cheese"],
        directions: ["Lay a large tortilla on a plate, add beans, rice, tomatoes sliced in strips, slices of avocado, chunks of mango and your favorite yummy salsa and voila a burrito extraordinaire."],
        bytheway: ["I uwually microwave the assembled burrito for 1 minute before eating."],
        contributedby: "Paul A. Scherbel"
    },
    {
        nameofdish: "Refried Beans",
        category: "Dinner",
        preptime: "2.5 Hours",
        servings: 25,
        imageUrl:
            "./images/refried-beans.webp",
        ingredients: ["2 Cups Pinto Beans (or beans of your choice)", "1 diced onion", "1 shredded carrot", "1 t salt", "2 T sugar"],
        directions: ["Add the dry beans, water, carrots, onion and spices to a saucepan or pressure cooker. (You an also use canned beans to save time.) Cook on top of stove or in pressure cooker until beans an veggies are tender. Blend in a regular blender or with an imersion blender until creamy."],
        bytheway: ["I always use my Insta-Pot to make refried beans. I am able to use inexpensive dry beans and have them ready in about 2 hours."],
        contributedby: "Paul A. Scherbel"
    },

    {
        nameofdish: "Jackie's Killer Krab Dip",
        category: "Snack",
        preptime: "15 minutes",
        servings: 50,
        imageUrl:
            "./images/jackies-killer-krab-dip.webp",
        ingredients: ["8 oz.pkg.Philadelphia cream cheese", "1 cup Miracle Whip", "1/4 cup sour cream","1 cup Krab chunks crumbled","1 T dried dill weed", "1 C shredded cheddar cheese", "2.25 oz. can chopped black olives",
            "1/4 t Vinegar based hot pepper sauce (optional)"],
        directions: ["Mince the Krab and mix everything together. Adjust quantities to taste. Nothing to it."],
        bytheway: ["Ritz crackers go great with this yummy dip."],
        contributedby: "Paul A. Scherbel"
    },

    {
        nameofdish: "Lenticchie",
        category: "Lunch, Dinner",
        preptime: "30 Minutes",
        servings: 6,
        imageUrl:
            "./images/lenticchie.webp",
        ingredients: ["1 Cup lentils", "2 Cups water", "16 oz. Pasta (small shapes)", "1 carrot (diced)", "1 T celery stalk (diced)", "1  onion (diced)", "1/2 Cup Olive Oil", "1 t Salt", "1 t Curry Powder"], 
        directions: ["Cover lentils with 2 cups of water and cook until tender. (depending on size of lentils between ½ and 1 hour)Heat on almost high 1/2 cup olive oil in a skillet, cook carrot 3 minutes first and add other two vegetables and cook another 3 minutes.  Add this to your lentils as they cook. 10 minutes before your lentils are tender start cooking the pasta in a separate pan until it is almost tender. (al dente)   Pour out most but not all of your pasta water and add the lentils with its liquid to the drained pasta.  Cook for another minute or two.  I season with salt and curry powder. Do not drain as it gets absorbed into the mixture the longer it sits.  It makes a big batch and is great for leftovers."],
        bytheway: ["This dish is not only super yummy, but is extremely inexpensive."],
        contributedby: "Paul A. Scherbel"
    },

    {
        nameofdish: "Fish Tacos",
        category: "Lunch, Dinner",
        preptime: "30 Minutes",
        servings: 4,
        imageUrl:
            "./images/fish-tacos.webp",
        ingredients: ["1 lb Fresh Salmon or any other yummy fish", "6 small corn tortillas", "1 Avocado (sliced)", "1 Tomato (sliced in strips)", "1/4 Cup diced mango chunks", "2 T Peach Mango Salsa", "Salt sufficient to make ocean-tasting water", "approx. 2 t of black pepper or pepper mix"],
        directions: ["Poach the fish by boiling it in salted and peppered water. Use enough salt to make the water taste like the ocean. Pepper to taste. Heat tortillas in frying pan or in microwave. Slice tomatoes into strips, slice avocado, dice mango chunks. Place a bite-sized portion of fish on the tortillas, add tomatoes, avocado, and mango and cover with salsa."],
        bytheway: ["These are at the top of my yummy list."],
        contributedby: "Paul A. Scherbel"
    },

    {
        nameofdish: "Lasagna Bolognese",
        "category": "Dinner",
        preptime: "1 Hour",
        servings: 8,
        imageUrl:
            "./images/lasagne-bolognese.webp",
        ingredients: ["16 oz. Lasagna Noodles (Green if possible)", "1/2 Cup Olive Oil", "1 carrot (diced)", "1 stalk celery (diced)", "1 Onion (diced)", "1 t salt", "1 lb Hamburger", "2 8 oz. cans tomatoes (pureed)", "1 8 oz. can Tomato Sauce", "1 Qt. Milk", "1 t Black Pepper", "1/2 t nutmeg", "4 T Butter", "1/4 Cup Flour", "1 lb. Mozzarella Cheese", "1 Cup Parmasean Cheese"],
        directions: ["RED SAUCE: Heat olive oil to almost smoking and add diced carrots first while you cut celery and onion. Cook carrot 3 minutes then add other vegetables. Add salt and hamburger to cooked vegetables and brown all together about three minutes. Add canned tomatoes with juice that have been blended lightly. Cook for 25 minutes. Add tomato sauce and cook 10 more minutes.\n \nWHITE SAUCE: Bring to a boil.Sprinkle black pepper and nutmeg on top of milk as you bring it to a boil.Stir constantly to avoid scorching. As it starts to boil add soft butter which has already been mixed with flour. Turn down heat to medium and continue stirring.Cook for 2 - 3 minutes until sauce thickens, and then remove from heat.\n \nASSEMBLY: Put a spoonful of red sauce and a spoonful of white sauce on the bottom of a 9 in. X 13 in. baking pan. Add a layer of uncooked lasagna noodles. Add a thin layer of mozzarella cheese, red sauce and white sauce to barely cover the noodles. Continue similar layers until pan is nearly full. Last layer is mozzarella cheese, red sauce, white sauce and topped with parmesan cheese. Bake at 375 degrees for 20 - 25 minutes or until top is slightly brown."],
        bytheway: ["This yummy lasagna is quite a bit of work. The secret is to build thin layers of pasta, sauces, and cheese so you end up with about 7 layers."],
        contributedby: "Paul A. Scherbel"
    },

    {
        nameofdish: "Prime Rib",
        location: "Dinner",
        preptime: "3.5 Hours",
        servings: 6,
        imageUrl:
            "./images/prime-rib.webp",
        ingredients: ["4 pounds prime rib roast", "1/4 Cup Butter (softened)", "1 T freshly ground black pepper", "1 t herbes de Provence", "1 pinch Kosher Salt"],
        directions: ["Place rib roast on a plate and bring it to room temperature (may take a few hours.) Preheat oven to 500 degrees. Combine butter, pepper, and herbs de Provence in a bowl; mix well until blended. Spread mixture over entire roast. Season roast generously with Kosher salt. Roast the 4-pound prime rib in the preheated oven for 20 minutes. Turn the oven off and, leaving leaving the roast in the oven with the door closed, let the roast sit in the oven for 2 hours. Remove the roast from the oven and serve. \n \nCOOK'S NOTE: Cooking times will vary depending on the size of your prime rib. To calculate your cooking time, multiply the exact weight of the roast by 5. Round the resulting number to the nearest whole number. The rib is cooked at 500 degrees Fahrenheit for exactly that many minutes. For example, a 6-pound roast would cook for 6 X 5 = 30 -- exactly 30 minutes. Turn the oven off and wait 2 hours before opening the oven door. Remove the prime rib and slice into the most yummy medium-rate meat you have ever tasted."],
        bytheway: ["Easiest Prime Rib ever and so yummy."],
        contributedby: "Paul A. Scherbel"
    },

    {
        nameofdish: "Tropical Toffee Bars",
        category: "Dessert",
        preptime: "30 Minutes",
        servings: 12,
        imageUrl:
            "./images/tropical-toffee-bars.webp",
        ingredients: ["1 cube Butter", "1-1/2 Cups Brown Sugar", "1 Cup + 2 T Flour", "2 eggs", "1 t Vanilla", "1 t Baking Powder", "1 Cup Coconut (shredded)", "1/2 Cup Walnuts (chopped)"],
        directions: ["Use your fingertips to press the butter, brown sugar, and flour mixture evenly into the bottom of the pan. Put the crust in a 350 degree oven for 10 minutes while you make the topping. \n \nTOPPING: Whip 2 eggs and then mix in brown sugar, vanilla, flour, baking powder, shredded coconut, and chopped walnuts. Put the topping on the cooked crust and put it back in the oven and cook it for 15 minutes."],
        bytheway: ["Small,but powerful. Beyond yummy."],
        contributedby: "Paul A. Scherbel"
    },

    {
        nameofdish: "Pear Ravioli",
        category: "Dinner",
        preptime: "2 Hours",
        servings: 6,
        imageUrl:
            "./images/pear-ravioli.webp",
        ingredients: ["3+ Cups Flour", "1 t Kosher Salt", "1 t Olive Oil", "4 eggs1", "6 Bartlett pears, peeled and cored", "1 teaspoon nutmeg", "1 teaspoon cinnamon", "1 cup ricotta cheese", "1 cup mascarpone cheese", "1 cup pecorino-romano cheese (grated)", "1 cup parmesan cheese (grated)", "Egg wash", "1 Cube Butter", "1 Shallot (finely diced)", "1/4 Cup Fresh Sage Leaves (lightly torn)", "1 t Brown Sugar", "1 T Pistachios (finely chopped raw, peeled)", "Salt and pepper (to taste)"],
        directions: ["DOUGH: Mix in mixer or by hand flour, salt, oil, eggs, and 1–2 tbsp. water, until dough forms. Transfer dough to a lightly floured surface; knead until dough is elastic: 8–10 minutes. Transfer to a greased bowl and cover with plastic wrap; let rest 1 hour at room temperature.\n \nSTUFFING: Finely chop the pears (or grate on a box grater). Add the pears to a skillet drizzled lightly with olive oil and sprinkle with the spices. Cook until softened, about 5 minutes. Remove from heat and allow to cool. Combine the pears with the cheeses and season with salt and pepper.\n \nASSEMBLY: Divide the dough into 4 pieces. Using a pasta machine or rolling pin, roll the dough out to the second-to-last setting (about 1/16-inch or 0.6mm thickness). Place teaspoon-sized mounds of filling 1-2 inches apart on a sheet of pasta. Lightly brush egg wash around the filling, then place a second sheet of pasta on top. Press firmly around each mound to remove air pockets, sealing the ravioli. Use a ravioli cutter, pizza wheel, or knife to cut into squares.\n \nCOOKING: Boil the ravioli in gently simmering salted water until they float and become translucent, about 2 minutes.\n \nSAUCE: While the ravioli are cooking, make the sauce by melting the butter over medium-low heat in a skillet. Stir or swirl the butter in the pan frequently. As soon as the edges of the butter start to turn golden brown, reduce the heat to very low and add in the shallot, sage, and sugar. Cook for 1 minute. Turn off the heat and add the pistachios. Season, to taste, with salt and pepper. Toss the cooked ravioli in the butter sauce and serve immediately with additional grated cheese, if desired."],
        bytheway: ["Any kind of ravioli takes lots of effort,but they are definitely worth it!"],
        contributedby: "Paul A. Scherbel"
   },
    // Add more recipe objects here...
]; 

createrecipeCard(recipes);

// Display all recipes
const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
    // createrecipeCard(recipes.filter(recipe => parseInt(recipe.preptime.split(",")[0]) > 0));
    createrecipeCard(recipes)
});


// Filter for recipes preptime before 1900
const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
    createrecipeCard(recipes.filter(recipe => parseInt(recipe.preptime.split(",")[0]) < 1900)); 
});


// Filter for recipes preptime after 2000
const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
    createrecipeCard(recipes.filter(recipe => parseInt(recipe.preptime.split(",")[0]) > 2000));
})

// Filter for recipes larger in servings than 90,000 square  feet
const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
    createrecipeCard(recipes.filter(recipe => parseInt(recipe.servings) > 90000));
});

// Filter for recipes smaller in servings than 10,000 square  feet
const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
    createrecipeCard(recipes.filter(recipe => parseInt(recipe.servings) < 10000));
});


function createrecipeCard(filteredrecipes) {
    document.querySelector(".res-grid").innerHTML = "";
    filteredrecipes.forEach(recipe => {
        let card = document.createElement("section");
        let img = document.createElement("img");
        let name = document.createElement("h3");
        let category = document.createElement("p");
        let preptime = document.createElement("p");
        let servings = document.createElement("p");
        let ingredients = document.createElement("p");
        ingredients.textContent = "Ingredients:";
        let ingredientsList = document.createElement("ul");
        let directionbox = document.createElement("p");
        directionbox.textContent = "Directions:";
        let directions = document.createElement("textarea");
        let bythewaybox = document.createElement("p");
        bythewaybox.textContent = "By the way...";
        let bytheway = document.createElement("textarea");
        let contributedby = document.createElement("h4");
        

        name.textContent = recipe.nameofdish;
        img.setAttribute("src", recipe.imageUrl);
        img.setAttribute("alt", `${recipe.nameofdish} Name of Dish`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400");
        img.setAttribute("height", "250");
        category.innerHTML = `<span class="label">Category:</span> ${recipe.category}`;
        preptime.innerHTML = `<span class="label">Preptime:</span> ${recipe.preptime}`;
        servings.innerHTML = `<span class="label">Servings:</span> ${recipe.servings}`;
        recipe.ingredients.forEach(ingredient => {
            let li = document.createElement("li");
            li.textContent = ingredient;
            li.style.marginLeft = "20px"; 

            ingredientsList.appendChild(li);
        });

        name.style.fontFamily = "Baskerville, Times New Roman";
        name.style.fontSize = "1.5rem";
        name.style.color = "#205915";

        ingredients.style.fontSize = "1.3rem";
        ingredients.style.color = "#880000";
 
        ingredientsList.style.listStyleType = 'none';
        ingredientsList.style.fontFamily = "Pacifico, cursive";

        directions.innerHTML = `${recipe.directions}`;
        directions.style.fieldSizing = 'content';
        directions.style.fontFamily = "Pacifico, cursive";

        bytheway.innerHTML = `${recipe.bytheway}`;
        bytheway.style.fieldSizing = 'content';
        bytheway.style.fontFamily = "Pacifico, cursive";

        contributedby.innerHTML = `<span class="label">Contributed By:</span> ${recipe.contributedby}`;
        contributedby.style.marginBottom = "30px";
        
        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(category);
        card.appendChild(preptime);
        card.appendChild(servings);
        card.appendChild(ingredients);
        card.appendChild(ingredientsList);
        card.appendChild(directionbox);
        card.appendChild(directions);
        card.appendChild(bythewaybox);
        card.appendChild(bytheway);
        card.appendChild(contributedby);
        

        document.querySelector(".res-grid").appendChild(card);
    });

}