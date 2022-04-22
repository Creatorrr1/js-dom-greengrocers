// part1
// render the list of veggies in the header by appending the list items
// add list to the ul
// add div to ul
// add img to ul
// add img to ul
// part2
// add an event listener that executes the add to cart button
// add the item to the cart when button is clicked on


const storeItemListUl = document.querySelector('.store--item-list')
const cartItemListUl =document.querySelector('.cart--item-list')

state.items.forEach(item => {
//   const product = state.items[i];
  const currentItem = item
  console.log(currentItem);

  //create and add an li to ul
  const itemLi = document.createElement("li");
  storeItemListUl.append(itemLi);

  //create and add div to ul
  const divForImg = document.createElement("div");
  divForImg.setAttribute("class", "store--item-icon");
  itemLi.append(divForImg);

  //create and add img to ul
  const itemImg = document.createElement("img");
  itemImg.src = `assets/icons/${currentItem.id}.svg`;
  divForImg.append(itemImg);

  //create and add img to ul
  const addCartBtn = document.createElement("button");
  addCartBtn.innerHTML = "Add to cart";
  itemLi.append(addCartBtn);
});