const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((title) => displayCategories(title.categories));
};

const cartBtns = document.getElementsByClassName("");
const removeActive = () => {
  const activeBtns = document.querySelectorAll(".btn-Category");
  activeBtns.forEach((btn) => btn.classList.remove("active"));
};

//modal
const loadTreeDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  displayTreeDetails(details.plants);
};
const displayTreeDetails = (treeDetails) => {
  const detailTrees = document.getElementById("modal-container");
  detailTrees.innerHTML = `
  <div class="p-4">
                        <h2 class="font-bold text-xl mb-2">${treeDetails.name}</h2>
                        <img class="rounded-2xl h-60 w-full object-cover" src="${treeDetails.image}" alt="">
                        <div class="flex mb-2">
                            <h4 class="font-medium">Category: </h4>
                            <p class="text-[#1F293790]"> ${treeDetails.category}</p>
                        </div>
                         <div class="flex mb-2">
                        <h4 class="font-medium" >Price:</h4>
                        <p class="text-[#1F293790]"><span class="text-[#1F293790]"><i
                                    class="fa-solid fa-bangladeshi-taka-sign"></i></span> ${treeDetails.price}</p>
                    </div>
                        <div class="flex mb-2">
                            <h4 class="font-medium" >Description: </h4>
                            <p class="text-[#1F293790] ">${treeDetails.description}</p>
                        </div>
                        <div class="modal-action">
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn p-1">Close</button>
                </form>
            </div>

                    </div>

  `;
  // for (const)
  document.getElementById("my_modal_5").showModal();
};

window.loadTreeDetails = loadTreeDetails;
//load card
const loadCard = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((card) => {
      removeActive();
      const ctgBtn = document.getElementById(`category-btn-${id}`);

      ctgBtn.classList.add("active");

      displayCards(card.plants);
    });
};
const displayCards = (cards) => {
  const cardsContainer = document.getElementById("card-container");
  cardsContainer.innerHTML = "";
  for (const card of cards) {
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `
    <div class="bg-white p-5 h-full flex flex-col justify-between rounded-2xl shadow-md ">
                        <div class=" rounded-2xl ">
                            <img class=" rounded-2xl h-40 w-full object-cover" src="${card.image}" alt="">
                        </div>
                        <div>
                            <button onclick="loadTreeDetails('${card.id}')" class="font-semibold text-xl mt-2">${card.name}</button>
                            <p class="text-[#1F293780] mt-2 text-[10px]">${card.description}</p>
                        </div>
                        <div class="flex justify-between mt-3">
                            <button class="text-[#15803D] bg-[#DCFCE7] py-1 px-2 rounded-full text-[10px]"> ${card.category}
                                </button>
                            <p><i class="fa-solid fa-bangladeshi-taka-sign"></i> <span class="font-bold">${card.price}</span></p>
                        </div>
                        <button   class="btn btn-success w-full  border-none text-left  text-white rounded-full mt-3 cart ">Add
                            to Cart</button>
                    </div>
    `;

    cardsContainer.append(cardDiv);

    const crtBtns = cardDiv.querySelector(".cart");

    crtBtns.addEventListener("click", function () {
      alert(card.name + " has been added to the cart");
      const crtContainer = document.getElementById("container-total");
      const crtDiv = document.createElement("div");
      crtDiv.className = "flex justify-between items-center ";
      crtDiv.innerHTML = `
                        <div>
                              
                            <h3 class="font-medium">${card.name}</h3>
                            <p><i class="fa-solid fa-bangladeshi-taka-sign"></i><span>${card.price}</span> x 1</p>
                        </div>
                        <div>
                            <p><i class="fa-solid fa-circle-xmark text-red-700 clear-btn"></i></p>
                        </div>
               
                
  `;
      crtContainer.append(crtDiv);

      const clearBTns = crtDiv.querySelector(".clear-btn");
      clearBTns.addEventListener("click", function () {
        crtDiv.innerHTML = "";
      });
    });
  }
};

window.loadCard = loadCard;

const displayCategories = (titles) => {
  const titleContainer = document.getElementById("Tree-options-container");
  // titleContainer.innerHTML = "";

  for (const title of titles) {
    const btnTitles = document.createElement("div");
    btnTitles.innerHTML = `    
                       <button id="category-btn-${title.id}" onclick="loadCard('${title.id}')"
                        class="btn btn-outline btn-success w-full border-none  text-left justify-start text-[#1F2937] btn-Category">${title.category_name}</button>
    `;
    titleContainer.append(btnTitles);
  }
};
loadCategories();
