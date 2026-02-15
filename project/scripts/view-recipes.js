
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
        directions: ["1. Finely chop the pears (or grate on a box grater). Add the pears to a skillet drizzled lightly with olive oil and sprinkle with the spices. Cook until softened, about 5 minutes. Remove from heat and allow to cool."],
    },
    
    {
        nameofdish: "Bean Burrito",
        category: "Lunch, Dinner",
        preptime: "10 minutes",
        servings: 1,
        imageUrl:
            "./images/burrito.webp",
        ingredients: ["1 large flour tortilla", "1/2 Cup Refried Beans", "1/4 cup rice", " 1/4 cup sliced tomatoes", "1/4 avocado - sliced", "2 T Mango Chunks", "1/4 cup Peach Manago Salsa", "2 T grated cheese"],
        directions: ["1. Finely chop the pears (or grate on a box grater). Add the pears to a skillet drizzled lightly with olive oil and sprinkle with the spices. Cook until softened, about 5 minutes. Remove from heat and allow to cool."],
    },
    {
        nameofdish: "Refried Beans",
        category: "Dinner",
        preptime: "2.5 Hours",
        servings: 25,
        imageUrl:
            "./images/refried-beans.webp",
        ingredients: ["2 Cups Pinto Beans (or beans of your choice)", "1 diced onion", "1 shredded carrot", "1 t salt", "2 T sugar"],
        directions: ["1. Finely chop the pears (or grate on a box grater). Add the pears to a skillet drizzled lightly with olive oil and sprinkle with the spices. Cook until softened, about 5 minutes. Remove from heat and allow to cool."],
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
        directions: ["1. Finely chop the pears (or grate on a box grater). Add the pears to a skillet drizzled lightly with olive oil and sprinkle with the spices. Cook until softened, about 5 minutes. Remove from heat and allow to cool."],
    },
    {
        nameofdish: "Lenticchie",
        category: "Lunch, Dinner",
        preptime: "30 Minutes",
        servings: 6,
        imageUrl:
            "./images/lenticchie.webp",
        ingredients: ["1 Cup lentils", "2 Cups water", "16 oz. Pasta (small shapes)", "1 carrot (diced)", "1 T celery stalk (diced)", "1  onion (diced)", "1/2 Cup Olive Oil"], 
        directions: ["1. Finely chop the pears (or grate on a box grater). Add the pears to a skillet drizzled lightly with olive oil and sprinkle with the spices. Cook until softened, about 5 minutes. Remove from heat and allow to cool."],
    },
    {
        nameofdish: "Fish Tacos",
        category: "Lunch, Dinner",
        preptime: "30 Minutes",
        servings: 4,
        imageUrl:
            "./images/fish-tacos.webp",
        ingredients: ["1 lb Fresh Salmon or other fish", "6 small corn tortillas", "1 Avocado (sliced)", "1 Tomato (sliced in strips)", "1/4 Cup diced mango chunks", "2 T Peach Mango Salsa"],
        directions: ["1. Finely chop the pears (or grate on a box grater). Add the pears to a skillet drizzled lightly with olive oil and sprinkle with the spices. Cook until softened, about 5 minutes. Remove from heat and allow to cool."],
    },
    {
        nameofdish: "Lasagna Bolognese",
        category: "Dinner",
        preptime: "1 Hour",
        servings: 8,
        imageUrl:
            "./images/lasagne-bolognese.webp",
        ingredients: ["16 oz. Lasagna Noodles (Green if possible)", "1/2 Cup Olive Oil", "1 carrot (diced)", "1 stalk celery (diced)", "1 Onion (diced)", "1 t salt", "1 lb Hamburger", "2 8 oz. cans tomatoes (pureed)", "1 8 oz. can Tomato Sauce", "1 Qt. Milk", "1 t Black Pepper", "1/2 t nutmeg", "4 T Butter", "1/4 Cup Flour", "1 lb. Mozzarella Cheese", "1 Cup Parmasean Cheese"],
        directions: ["1. Finely chop the pears (or grate on a box grater). Add the pears to a skillet drizzled lightly with olive oil and sprinkle with the spices. Cook until softened, about 5 minutes. Remove from heat and allow to cool."],
    },
    {
        nameofdish: "Prime Rib",
        location: "Dinner",
        preptime: "3.5 Hours",
        servings: 6,
        imageUrl:
            "./images/prime-rib.webp",
        ingredients: ["4 pounds prime rib roast", "1/4 Cup Butter (softened)", "1 T freshly ground black pepper", "1 t herbes de Provence", "1 pinch Kosher Salt"],
        directions: ["1. Finely chop the pears (or grate on a box grater). Add the pears to a skillet drizzled lightly with olive oil and sprinkle with the spices. Cook until softened, about 5 minutes. Remove from heat and allow to cool."],
    },

    {
        nameofdish: "Tropical Toffee Bars",
        category: "Dessert",
        preptime: "30 Minutes",
        servings: 12,
        imageUrl:
            "./images/tropical-toffee-bars.webp",
        ingredients: ["1 cube Butter", "1-1/2 Cups Brown Sugar", "1 Cup + 2 T Flour", "2 eggs", "1 t Vanilla", "1 t Baking Powder", "1 Cup Coconut (shredded)", "1/2 Cup Walnuts (chopped)"],
        directions: ["1. Finely chop the pears (or grate on a box grater). Add the pears to a skillet drizzled lightly with olive oil and sprinkle with the spices. Cook until softened, about 5 minutes. Remove from heat and allow to cool."],
    },

    {
        nameofdish: "Pear Ravioli",
        category: "Dinner",
        preptime: "2 Hours",
        servings: 6,
        imageUrl:
            "./images/pear-ravioli.webp",
        ingredients: ["3+ Cups Flour", "1 t Kosher Salt", "1 t Olive Oil", "4 eggs1", "6 Bartlett pears, peeled and cored", "1 teaspoon nutmeg", "1 teaspoon cinnamon", "1 cup ricotta cheese", "1 cup mascarpone cheese", "1 cup pecorino-romano cheese (grated)", "1 cup parmesan cheese (grated)", "Egg wash", "1 Cube Butter", "1 Shallot (finely diced)", "1/4 Cup Fresh Sage Leaves (lightly torn)", "1 t Brown Sugar", "1 T Pistachios (finely chopped raw, peeled)", "Salt and pepper (to taste)"],
        directions: ["1. Finely chop the pears (or grate on a box grater). Add the pears to a skillet drizzled lightly with olive oil and sprinkle with the spices. Cook until softened, about 5 minutes. Remove from heat and allow to cool."],
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
        ingredients.textContent = "Ingredients:"
        let ingredientsList = document.createElement("ul");
        let directions = document.createElement("textarea")
        

        name.textContent = recipe.nameofdish;
        img.setAttribute("src", recipe.imageUrl);
        img.setAttribute("alt", `${recipe.nameofdish} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400");
        img.setAttribute("height", "250");
        category.innerHTML = `<span class="label">Category:</span> ${recipe.category}`;
        preptime.innerHTML = `<span class="label">Preptime:</span> ${recipe.preptime}`;
        servings.innerHTML = `<span class="label">Servings:</span> ${recipe.servings}`;
        recipe.ingredients.forEach(ingredient => {
            let li = document.createElement("li");
            li.textContent = ingredient;
            ingredientsList.appendChild(li);
        });
        directions.innerHTML = `${recipe.directions}`;
        
        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(category);
        card.appendChild(preptime);
        card.appendChild(servings);
        card.appendChild(ingredients);
        card.appendChild(ingredientsList);
        card.appendChild(directions);
        

        document.querySelector(".res-grid").appendChild(card);
    });

}