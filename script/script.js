const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((title) => displayCategories(title.categories));
};
//3
const loadCard = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((card) => displayCards(card.plants));
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
                        <button class="btn btn-success w-full  border-none text-left  text-white rounded-full mt-3">Add
                            to Cart</button>
                    </div>
    `;
    cardsContainer.append(cardDiv);
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
                       <button onclick="loadCard('${title.id}')"
                        class="btn btn-outline btn-success w-full  border-none text-left justify-start text-[#1F2937]">${title.category_name}</button>
    `;
    titleContainer.append(btnTitles);
  }
};
loadCategories();
