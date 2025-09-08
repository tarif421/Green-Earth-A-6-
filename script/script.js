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

//3
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
                            <h2 class="font-semibold text-xl mt-2">${card.name}</h2>
                            <p class="text-[#1F293780] mt-2 text-[10px]">${card.description}</p>
                        </div>
                        <div class="flex justify-between mt-3">
                            <button class="text-[#15803D] bg-[#DCFCE7] py-1 px-2 rounded-full text-[10px]">Fruit
                                Tree</button>
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

// loadCategory();
const displayCategories = (titles) => {
  const titleContainer = document.getElementById("Tree-options-container");
  titleContainer.innerHTML = "";

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
