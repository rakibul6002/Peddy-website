let currentPetsData = [];
let currentCategoryData = []; 
// create LoadCategory 
const loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then((res) => res.json())
        .then((data) => displayCategory(data.categories))
        .catch((error) => console.log(error));
};

// create allCardCategory
const cardCategory = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then((res) => res.json())
        .then((data) => {
            currentPetsData = data.pets; // Store all pets data
            cardDisplayCategory(currentPetsData); // Display all pets initially
        })
        .catch((error) => console.log(error));
};
// Short price
const sortByPrice = () => {
    const petsToSort = currentCategoryData.length > 0 ? currentCategoryData : currentPetsData;

    const sortedPets = [...petsToSort].sort((a, b) => b.price - a.price);
    cardDisplayCategory(sortedPets);
};


let currentActiveBtn = null; // Track the currently active button

const categoryCardHandler = (category) => {
    const spinner = document.getElementById('spinner');
    const itemDisplay = document.getElementById('display');

    // Get all category buttons
    const activeBtns = document.getElementsByClassName('category-btn');

    // Remove the 'active' class from the previously active button
    if (currentActiveBtn) {
        currentActiveBtn.classList.remove('bg-[#0E7A81]');
        currentActiveBtn.classList.add('bg-white');
    }

    // Find the clicked button
    const activeBtn = document.querySelector(`button[onclick*="${category}"]`);
    if (activeBtn) {
        activeBtn.classList.remove('bg-white');
        activeBtn.classList.add('bg-[#0E7A81]');
        currentActiveBtn = activeBtn; // Update currentActiveBtn
    }

    // Show the spinner and hide the data
    spinner.classList.remove('hidden');
    itemDisplay.innerHTML = ''; // Clear previous data

    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
        .then((res) => res.json())
        .then((data) => {
            // Use a timeout to simulate loading time
            setTimeout(() => {
                currentCategoryData = data.data; // Store filtered category data
                cardDisplayCategory(currentCategoryData);
                spinner.classList.add('hidden'); // Hide spinner after loading
            }, 2000);
        })
        .catch((error) => {
            console.log(error);
            spinner.classList.add('hidden'); // Hide spinner on error
        });
};
// Like button handler
const likeHandler=(imageSrc)=>{
    const displayData2 = document.getElementById('display-2');
    const div = document.createElement('div');
    div.innerHTML=
    `
        <div class="p-2 bg-white border rounded-lg m-2 ">
                <img class="w-40 h-24 rounded-lg"  src="${imageSrc}" alt="">
        </div>

    `
    displayData2.append(div)
 }

// Details button handler
 const dtailsHandler = async(id)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    const data= await res.json()
   

    .catch((error) => console.log(error))

     const needData = data.petData;
    const modalhndle =document.getElementById('modal')
   
    modalhndle.classList.remove('hidden');

    const  modalText = document.getElementById('modalText')
    
    const div = document.createElement('div')
    div.innerHTML=
    `
            <div class="p-4 flex flex-col   gap-3">
                                <img class=" w-full h-auto text-center rounded-lg " src=${needData.image} alt="pet image">
                                <h1 class="text-3xl   font-bold">${needData.pet_name}</h1>
                                <div class="flex flex-col md:flex-row gap-0  md:gap-10 lg:gap-20 mt-3 text-xl">
                                    <div>
                                        <div class="flex items-center  gap-3">
                                            <img
                                                class=" "
                                                src="./images/pet details icon/brade.png"
                                                alt="Brade image" />
                                            <h5>Breed : ${needData.breed || "Not Available"}</h5>
                                        </div>
                                   
                                        <div class="flex items-center  gap-3">
                                            <img
                                                class=" "
                                                src="./images/pet details icon/gender.png"
                                                alt="Gender image" />
                                            <h5>Gender : ${needData.gender || "Not Available"}</h5>
                                        </div>
                                        <div class="flex items-center  gap-3">
                                            <img
                                                class=" "
                                                src="./images/pet details icon/gender.png"
                                                alt="Gender image" />
                                            <h5>Vaccinated status : ${needData.vaccinated_status || "Not Available"}</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex items-center  gap-3">
                                            <img
                                                class=" "
                                                src="./images/pet details icon/date.png"
                                                alt="Date image" />
                                            <h5>Birth : ${needData.date_of_birth || "Not Available"}</h5>
                                        </div>
                                        <div class="flex items-center  gap-3">
                                            <img
                                                class=" "
                                                src="./images/pet details icon/doler.png"
                                                alt="Doler image" />
                                            <h5>Price : ${needData.price || "Not Available"}</h5>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <h2 class=" text-2xl font-bold my-3">Details Information</h2>
                                <p  >${needData.pet_details}</p>

                                <button id="closeModal" class="px-4 py-2  text-black font-bold bg-zinc-300 rounded">Cancel</button>
            </div>
    `;
    modalText.append(div)
    //   Modal close Button
    const closeModalButtons = document.querySelectorAll('#closeModal');
        closeModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                modal.classList.add('hidden');
                modalText.innerHTML = '';
            });
 });
 }
 // Adopt button handler
 const adoptHandler = (id) => {
    
    const modal2 = document.getElementById('modal2');
    const modalText2 = document.getElementById('modalText2');
    const adoptButton = document.getElementById(`btn-${id}`)
    
    // Clear previous content and show modal
    modalText2.innerHTML = ''; 
    modal2.classList.remove('hidden');

    let countdown = 3;

    const interval = setInterval(() => {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="flex flex-col items-center justify-center ">
                <img class="w-32 h-32 p-5" src="./images/adepted.jpg" alt="Adopted">
                <h1 class="text-2xl font-bold pb-5">Congrates!</h1>
                <h1 class=" font-bold pb-5">Your pet adoptation succesful.</h1>
                <h1 class=" font-bold pb-5 ">${countdown}</h1>
            </div>
        `;

        modalText2.innerHTML = ''; 
        modalText2.append(div);

        if (countdown === 0) {
            clearInterval(interval);
            modalText2.innerHTML = '';
            adoptButton.innerText = 'Adopted';
            adoptButton.classList.add('bg-gray-400')
            adoptButton.disabled=true;
            
            setTimeout(() => {
                modal2.classList.add('hidden'); // Close modal after 1 second
            }, 1000); // 1 second delay before closing modal
        }
        
        countdown--;
    },1000); // Update countdown every second
};
// create displayCategory 
const displayCategory = (categories) => {
    const categoriesButton = document.getElementById('Category');
    categories.forEach((item) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <button onclick="categoryCardHandler('${item.category}')" class="category-btn flex items-center justify-center border rounded-full bg-white px-12 py-4 gap-3">
                <img src="${item.category_icon}" alt="Peddy Logo">
                <h1 class="text-2xl font-bold">${item.category}</h1>
            </button>
        `;
        categoriesButton.append(div);
    });
};

const cardDisplayCategory= (categoriesdata)=>{
    const itemDisplay = document.getElementById('display');
    itemDisplay.innerHTML="";

    if(categoriesdata.length === 0){
        itemDisplay.innerHTML=
        `
            <div class="col-span-9 bg-zinc-300 rounded-xl">
                <div class="flex flex-col items-center justify-center py-32 ">
                        <img
                            class=" "
                            src="./images/error.webp"
                            alt="404" .
                        />
                        <h1 class="text-3xl font-bold mb-3">No Information Available</h1>
                        <p class="text-center">We’re sorry, but no information is currently available.Please check back later. <br class="hidden md:block"> we have no updates at this time.</p>
                </div>
            </div>
        `;
        return;
    }
    categoriesdata.forEach((itemData)=>{
        const div = document.createElement('div')
        div.innerHTML=`
            <div class="rounded-xl border-2 p-5  ">
                    <figure class="h-[160px]">
                        <img id="display-img"
                        class="h-full w-full rounded-xl"
                        src=${itemData.image}
                        alt="Pet image" />
                    </figure>
                    <div class=" px-0 py-5">
                        <h2 class="card-title">${itemData.pet_name || "Not Available"}</h2>
                        <div class="mt-3">
                            <div class="flex items-center  gap-3">
                                <img
                                    class=" "
                                    src="./images/pet details icon/brade.png"
                                    alt="Pet image" />
                                <h5>Breed : ${itemData.breed || "Not Available"}</h5>
                            </div>
                            <div class="flex items-center  gap-3">
                                <img
                                    class=" "
                                    src="./images/pet details icon/date.png"
                                    alt="Pet image" />
                                <h5>Birth : ${itemData.date_of_birth || "Not Available"}</h5>
                            </div>
                            <div class="flex items-center  gap-3">
                                <img
                                    class=" "
                                    src="./images/pet details icon/gender.png"
                                    alt="Pet image" />
                                <h5>Gender : ${itemData.gender || "Not Available"}</h5>
                            </div>
                            <div class="flex items-center  gap-3">
                                <img
                                    class=" "
                                    src="./images/pet details icon/doler.png"
                                    alt="Pet image" />
                                <h5>Price : ${itemData.price || "Not Available"}</h5>
                            </div>
                        </div>
                    </div>
                    <hr  class="h-1">
                    <div class="flex items-center justify-between">
                        <button onclick=" likeHandler(('${itemData.image}'))"  class="border rounded-lg px-4 py-2">
                            <img
                                    
                                    src="./images/pet details icon/like.png"
                                    alt="Pet image" />

                        </button>
                        <button id=btn-${itemData.petId} onclick=" adoptHandler(${itemData.petId})" class="border rounded-lg px-4 py-2 text-[#0E7A81] font-bold">Adopt</button>
                        <button onclick=" dtailsHandler(${itemData.petId})" class="border rounded-lg px-4 py-2 text-[#0E7A81] font-bold">Details</button>
                    </div>
                    
            </div>
        `;
        itemDisplay.append(div)
    });
    
};
 


loadCategory();
cardCategory();


