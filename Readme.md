<p align="center">
<img src="./images/logo.webp"  />
</p>
 <h1 align="center">
  Peddy - Pet Adoption Platform
 </h1>
<p   style="font-size: 24px;">
  Peddy is a web-based Pet Adoption application where users can choose,adopt and watch pets sorted by categories such as Cat, Dog,Rabbit and Bird.Users can also watch pets sorted by price.
</p>

<hr/>
<h3 align="center" >
 5 key features of the project.
</h3>

- ### View More Button

  If you click on the See More button, you will see the main section.

- ### Category Button

  If you click on any specific category buttons, you will see the specific category data such as if you click on Cat category Button,you will see the Cat category Data.

- ### Short By Price Button

  If you click on Short By Price button, you will see sort pets in descending order based on price.

- ### Like Button
 
  If you click the Like button on a card, you'll see that card's image in the right sidebar.

 - ### Details Button

  If you click on a card details button, you will see the details of that card in a model.
<hr/>

<h3 align="center" >
 ES6 features used in this project
</h3>

 - ### let and const:
        These are used for variable declarations. let allows you to declare variables that can be reassigned, while const is used for constants that cannot be reassigned after their initial assignment.

        let currentPetsData = [];
        const loadCategory = () => { ... };
- ### Arrow Functions: 
        Shorter syntax for function expressions. They also preserve the this context from their enclosing scope.

        const loadCategory = () => { ... };
- ### Template Literals: 
        Used for multi-line strings and string interpolation, which allows you to easily embed variables and expressions.
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="p-4 flex flex-col gap-3">
            <img class="w-full h-auto" src=${needData.image} alt="pet image">
            <h1>${needData.pet_name}</h1>
        </div>
        `;
- ### Destructuring Assignment: 
        Although not explicitly used in the provided code, it's a common ES6 feature. You can destructure properties from objects or arrays to simplify variable assignments.
        
        const { image, pet_name } = needData; // Example usage (not in your code)
- ###  Spread Operator: 
        Used to create a new array or object by copying properties from an existing array or object. In your case, it's used to create a sorted copy of an array.

        const sortedPets = [...petsToSort].sort((a, b) => b.price - a.price);
- ### Promises and Async/Await: 
        The code uses Promises for handling asynchronous operations with fetch(). The async/await syntax simplifies working with Promises, making the code easier to read and write.
          
          const dtailsHandler = async (id) => {
          const res = await fetch(`...`);
          const data = await res.json();
          };
- ### Array Methods: 
        Methods like forEach, map, and sort are used for iterating over arrays, which provide cleaner and more concise ways to handle data.
        
        categories.forEach((item) => { ... });

<h3 align="center" >
 Live link to the deployed project.
</h3>

Live project link:- https://peddy-pet-adoptation.netlify.app

