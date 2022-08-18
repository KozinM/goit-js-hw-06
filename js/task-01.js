const itemSearch = document.querySelectorAll(".item");
console.log("Number of categories: " + itemSearch.length );

for (let item of itemSearch) {
    console.log("Category: "+item.firstElementChild.innerHTML);
    console.log("Elements: "+item.lastElementChild.children.length);
}