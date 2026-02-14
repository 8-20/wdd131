
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
            "./images/sweet-avocado-toast.webp"
    },
    {
        nameofdish: "Bean Burrito",
        category: "Lunch, Dinner",
        preptime: "10 minutes",
        servings: 1,
        imageUrl:
            "./images/burrito.webp"
    },
    {
        nameofdish: "Refried Beans",
        category: "Dinner",
        preptime: "2.5 Hours",
        servings: 25,
        imageUrl:
            "./images/refried-beans.webp"
    },
    {
        nameofdish: "Jackie's Killer Krab Dip",
        category: "Snack",
        preptime: "15 minutes",
        servings: 50,
        imageUrl:
            "./images/jackies-killer-krab-dip.webp"
    },
    {
        nameofdish: "Lenticchie",
        category: "Lunch, Dinner",
        preptime: "30 Minutes",
        servings: 6,
        imageUrl:
            "./images/lenticchie.webp"
    },
    {
        nameofdish: "Fish Tacos",
        category: "Lunch, Dinner",
        preptime: "30 Minutes",
        servings: 4,
        imageUrl:
            "./images/fish-tacos.webp"
    },
    {
        nameofdish: "Lasagna Bolognese",
        category: "Dinner",
        preptime: "1 Hour",
        servings: 8,
        imageUrl:
            "./images/lasagne-bolognese.webp"
    },
    {
        nameofdish: "Prime Rib",
        location: "Dinner",
        preptime: "3.5 Hours",
        servings: 6,
        imageUrl:
            "./images/prime-rib.webp"
    },

    {
        nameofdish: "Tropical Toffee Bars",
        category: "Dessert",
        preptime: "30 Minutes",
        servings: 12,
        imageUrl:
            ".images/tropical-toffee-bars.webp"
    },

    {
        nameofdish: "Pear Ravioli",
        category: "Dinner",
        preptime: "2 Hours",
        servings: 6,
        imageUrl:
            "./images/pear-ravioli.webp"
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
        let dedication = document.createElement("p");
        let servings = document.createElement("p");
        

        name.textContent = recipe.nameofdish;
        img.setAttribute("src", recipe.imageUrl);
        img.setAttribute("alt", `${recipe.nameofdish} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400");
        img.setAttribute("height", "250");
        category.innerHTML = `<span class="label">category:</span> ${recipe.category}`;
        dedication.innerHTML = `<span class="label">preptime:</span> ${recipe.preptime}`;
        servings.innerHTML = `<span class="label">servings:</span> ${recipe.servings}`;
        
        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(category);
        card.appendChild(dedication);
        card.appendChild(servings);
        

        document.querySelector(".res-grid").appendChild(card);
    });

}