const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((title) => displayCategories(title.categories));
};
const displayCategories = (titles) => {
  const titleContainer = document.getElementById("Tree-options-container");
  titleContainer.innerHTML = "";

  for (const title of titles) {
    console.log(title);
    const btnTitles = document.createElement("div");
    btnTitles.innerHTML = `
                       <button
                        class="btn btn-outline btn-success w-full  border-none text-left justify-start text-[#1F2937]">${title.category_name}</button>
    `;
    titleContainer.append(btnTitles);
  }
};
loadCategories();
