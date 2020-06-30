const ratingItem = document.querySelectorAll(".rating__item");
//for IE
const ratingItemsArray = Array.prototype.slice.call(ratingItem);

ratingItemsArray.forEach(item => {
  item.addEventListener("click", () => {
    const itemValue = item.dataset.itemValue;
    item.parentNode.dataset.totalValue = itemValue;
  });
});