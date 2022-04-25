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
const totalNumber = document.querySelector('.total-number')

function renderStore() {

    state.items.forEach(item => {
        //   const product = state.items[i];
        const currentItem = item
        console.log(currentItem);
        
        //create and add an li to ul
        const itemLi = document.createElement("li");
        storeItemListUl.append(itemLi);
        
        //create and add div that should hold the img to li
        const divForImg = document.createElement("div");
        divForImg.setAttribute("class", "store--item-icon");
        itemLi.append(divForImg);
        
        //create the img and add to the div
        const itemImg = document.createElement("img");
        itemImg.src = `assets/icons/${currentItem.id}.svg`;
        divForImg.append(itemImg);
        
        //create and add img to li
        const addCartBtn = document.createElement("button");
        addCartBtn.innerHTML = "Add to cart";
        itemLi.append(addCartBtn);
          addCartBtnEvent(addCartBtn, item)
    });
}
// -----------------
    // pushes item to cart, now i just need to get visibility
function addCartBtnEvent (addCartBtn, currentItem) {
    addCartBtn.addEventListener('click', () => {
        state.cart.push(currentItem)
        renderCart()
        console.log(state.cart)
        // return state.cart
    })
}
// ----------------

function renderCart() {
    cartItemListUl.innerHTML = ""

    const displayItems = cartQuantityManager()
    displayItems.forEach(item => {
        // if (itemAdded === items) {
            const cartItem = item
            console.log(cartItem)
        // }
        // item has to mentioned again because its in another array in the cartDisplay() function
        const itemName = item.item.name
        console.log()
        // const itemID = cartItem.id
        const itemID = item.item.id

        
        // add li to ul
        const cartItemLi = document.createElement("li")
        
        // add img to cart
        const cartImg = document.createElement('img')
        cartImg.className = 'cart--item-icon'
        cartImg.src = `assets/icons/${itemID}.svg`
        cartImg.alt = itemName
        cartItemLi.append(cartImg)
        
        // add description to cart
        const nameInPTag = document.createElement("p")
        nameInPTag.innerText = itemName
        cartItemLi.append(nameInPTag)
        
        // remove item when remove button is clicked
        const removeBtn = document.createElement('button')
        // removeBtn.className = "quantity-btn remove-btn center"
        removeBtn.className = "quantity-btn, remove-btn, center"
        removeBtn.innerText = "-"
        cartItemLi.append(removeBtn)

        removeBtn.addEventListener('click', () => {
            const foundItem = state.cart.find(item => item.id === itemID)
            state.cart.splice(state.cart.indexOf(foundItem), 1)
            // item.item.quantity--
            renderCart()
            // total()
        })
        
        // quantity feature needs to be added
        const span = document.createElement('span')
        span.classList.add('quantity-text', 'center')
        span.innerText = item.quantity
        cartItemLi.append(span)

        // add item when add button is clicked
        const addBtn = document.createElement('button')
        // addBtn.className = "quantity-btn remove-btn center"
        addBtn.className = "quantity-btn, add-btn, center"
        
        addBtn.innerText = "+"
        cartItemLi.append(addBtn)

        addBtn.addEventListener('click', () => {
            state.cart.push(item.item)
            renderCart()
        })
        
        cartItemListUl.append(cartItemLi)
        // return cartItemLi
        
    })
    total()
}

// -------------
function cartQuantityManager() {
    let display = []
    state.cart.forEach(item => {
      const foundItem = display.find(displayItem => item.name === displayItem.item.name)
      if (foundItem === undefined) {
        display.push({item: item, quantity: 1})
      } else {
        foundItem.quantity++
      }
    })
    return display
}

// ---------------
function total() {
    
    initialPrice = 0
    const total = state.cart.reduce((previous, current) => previous + current.price, initialPrice)
    const totalPrice = `£${total.toFixed(2)}`
    totalNumber.innerText = totalPrice
}
    
renderStore()
