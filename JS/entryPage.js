const prodctCategory = [
    { id: 1, category: 'Maggie' },
    { id: 2, category: 'Biryani' },
    { id: 3, category: 'Burger' },
    { id: 4, category: 'Sandwich' },
]
const products1 = [
    { id: 1, hotelName: 'Gulshanplaza', category: 'maggie', nameOfMaggie: 'Plain Maggie', rateOfMaggie: 10.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/img1.jpg' },
    { id: 2, hotelName: 'BombayWala', category: 'maggie', nameOfMaggie: 'Masala Maggie', rateOfMaggie: 10.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/img2.jpg' },
    { id: 3, hotelName: 'Dawat-E-Ishq', category: 'maggie', nameOfMaggie: 'Masala Maggie', rateOfMaggie: 10.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/img5.jpg' },
    { id: 4, hotelName: 'MidNight-Maggie-Mania', category: 'maggie', nameOfMaggie: 'Masala Maggie', rateOfMaggie: 10.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/img7.png' },
    { id: 5, nameOfMaggie: 'Plain Maggie', category: 'maggie', rateOfMaggie: 10.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/img8.png' },
    { id: 6, nameOfMaggie: 'Cheese Maggie', category: 'maggie', rateOfMaggie: 10.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/img3.jpg' },
    { id: 7, nameOfMaggie: 'Masala Maggie', category: 'maggie', rateOfMaggie: 10.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/img4.jpg' },
    { id: 8, nameOfMaggie: 'Masala Maggie', category: 'Biryani', rateOfMaggie: 10.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/pulav1.png' },
    { id: 9, nameOfMaggie: 'Cheese Maggie', category: 'Biryani', rateOfMaggie: 10.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/pulav2.png' },
    { id: 10, nameOfMaggie: 'Masala Maggie', category: 'Biryani', rateOfMaggie: 10.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/pulav3.png' },
    { id: 11, nameOfMaggie: 'Masala Maggie', category: 'Biryani', rateOfMaggie: 10.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/pulav4.png' },
    { id: 12, nameOfMaggie: 'Masala Maggie', category: 'Biryani', rateOfMaggie: 10.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/pulav5.png' },
    { id: 13, nameOfMaggie: 'Masala Maggie', category: 'Biryani', rateOfMaggie: 10.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/pulav6.png' },
];
const products = [
    { id: 1, hotelName: 'Gulshanplaza', category: 'maggie', nameOfMaggie: 'Italian Maggie', rateOfMaggie: 70.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/img1.jpg' },
    { id: 2, hotelName: 'Gulshanplaza', category: 'maggie', nameOfMaggie: 'Plain Maggie', rateOfMaggie: 50.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/img2.jpg' },
    { id: 3, hotelName: 'Gulshanplaza', category: 'maggie', nameOfMaggie: 'Vege Maggie', rateOfMaggie: 60.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/img3.jpg' },
    { id: 4, hotelName: 'Gulshanplaza', category: 'maggie', nameOfMaggie: 'Masala Maggie', rateOfMaggie: 55.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/img4.jpg' },
    { id: 5, hotelName: 'Gulshanplaza', category: 'maggie', nameOfMaggie: 'Gravey Maggie', rateOfMaggie: 80.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/img5.jpg' },
    { id: 6, hotelName: 'Gulshanplaza', category: 'maggie', nameOfMaggie: 'Corrainder Vege Maggie', rateOfMaggie: 65.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/img6.png' },
    { id: 7, hotelName: 'Gulshanplaza', category: 'maggie', nameOfMaggie: 'Soup Maggie', rateOfMaggie: 60.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/img7.png' },
    { id: 8, hotelName: 'Dawat-E-Ishq', category: 'Biryani', nameOfMaggie: 'Mughalai Biryani', rateOfMaggie: 110.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/pulav2.png' },
    { id: 9, hotelName: 'MidNight-Maggie-Mania', category: 'Biryani', nameOfMaggie: 'Luncknowi Biryani', rateOfMaggie: 210.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/pulav3.png' },
    { id: 10, hotelName: 'BombayWala', category: 'Biryani', nameOfMaggie: 'Ambur Biryani', rateOfMaggie: 100.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/pulav4.png' },
    { id: 11, hotelName: 'Dawat-E-Ishq', category: 'Biryani', nameOfMaggie: 'Calcutta Biryani', rateOfMaggie: 230.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/pulav5.png' },
    { id: 12, hotelName: 'MidNight-Maggie-Mania', category: 'Biryani', nameOfMaggie: 'Hyderabadi Biryani', rateOfMaggie: 350.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/pulav6.png' },
    { id: 13, hotelName: 'BombayWala', category: 'Biryani', nameOfMaggie: 'Kashmiri Biryani', rateOfMaggie: 230.00, descpofMaggie: 'Serves 1 | Double the fun with lots of cheese and masala infused maggi noodles and topping of cheese', imageOfMaggie: '../ASSETS/pulav1.png' },
    { id: 14, hotelName: 'BombayWala', category: 'Burger', nameOfMaggie: 'Chimango', rateOfMaggie: 10.00, descpofMaggie: 'Burgers so good you’ll come back again and again.', imageOfMaggie: '../ASSETS/burger2.png' },
    { id: 15, hotelName: 'Dawat-E-Ishq', category: 'Burger', nameOfMaggie: 'LA PLATA Burger', rateOfMaggie: 100.00, descpofMaggie: 'Burgers so good you’ll come back again and again.', imageOfMaggie: '../ASSETS/burger3.png' },
    { id: 16, hotelName: 'MidNight-Maggie-Mania', category: 'Burger', nameOfMaggie: 'MACANUDO Burger', rateOfMaggie: 190.00, descpofMaggie: 'Burgers so good you’ll come back again and again.', imageOfMaggie: '../ASSETS/burger4.png' },
    { id: 17, hotelName: 'BombayWala', category: 'Burger', nameOfMaggie: 'GARIBALDI Burger', rateOfMaggie: 105.00, descpofMaggie: 'Burgers so good you’ll come back again and again.', imageOfMaggie: '../ASSETS/burger5.png' },
    { id: 18, hotelName: 'Dawat-E-Ishq', category: 'Burger', nameOfMaggie: 'CHARRUA Burger', rateOfMaggie: 178.00, descpofMaggie: 'Burgers so good you’ll come back again and again.', imageOfMaggie: '../ASSETS/burger1.png' },
    { id: 19, hotelName: 'MidNight-Maggie-Mania', category: 'Burger', nameOfMaggie: 'PIRATINI Burger', rateOfMaggie: 90.00, descpofMaggie: 'Burgers so good you’ll come back again and again.', imageOfMaggie: '../ASSETS/burger6.png' },
    { id: 20, hotelName: 'BombayWala', category: 'Sandwich', nameOfMaggie: 'Bacon Sandwich', rateOfMaggie: 130.00, descpofMaggie: 'Grilled Cheese. Comfort food’s biggest champion', imageOfMaggie: '../ASSETS/sandwich1.png' },
    { id: 21, hotelName: 'Dawat-E-Ishq', category: 'Sandwich', nameOfMaggie: 'CUBAN Sandwich', rateOfMaggie: 69.00, descpofMaggie: 'Grilled Cheese. Comfort food’s biggest champion', imageOfMaggie: '../ASSETS/sandwich2.png' },
    { id: 22, hotelName: 'MidNight-Maggie-Mania', category: 'Sandwich', nameOfMaggie: 'TUNA Sandwich', rateOfMaggie: 190.00, descpofMaggie: 'Grilled Cheese. Comfort food’s biggest champion', imageOfMaggie: '../ASSETS/sandwich3.png' },
    { id: 23, hotelName: 'BombayWala', category: 'Sandwich', nameOfMaggie: 'GRILLED CHEESE Sandwich', rateOfMaggie: 130.00, descpofMaggie: 'Grilled Cheese. Comfort food’s biggest champion', imageOfMaggie: '../ASSETS/sandwich4.png' },
    { id: 24, hotelName: 'Dawat-E-Ishq', category: 'Sandwich', nameOfMaggie: 'CLUB Sandwich', rateOfMaggie: 230.00, descpofMaggie: 'Grilled Cheese. Comfort food’s biggest champion', imageOfMaggie: '../ASSETS/sandwich5.png' },
    { id: 25, hotelName: 'MidNight-Maggie-Mania', category: 'Sandwich', nameOfMaggie: 'HAM Sandwich', rateOfMaggie: 40.00, descpofMaggie: 'Grilled Cheese. Comfort food’s biggest champion', imageOfMaggie: '../ASSETS/sandwich6.png' }
];

let cartItems = [];
let wishlist = [];


function initializePage() {
    const navItems = document.querySelectorAll('.category-name');
    const productList = document.getElementById('products-container');

    function displayProducts(products) {
        let wishlistItems = sessionStorage.getItem('wishlist') ? JSON.parse(sessionStorage.getItem('wishlist')) : [];

        productList.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            // Check if the product is in the wishlist    
            let heartIcon;
            let isInWishlist = wishlistItems.some(item => item.id === product.id);
            if (isInWishlist) {
                // Determine which heart icon to display based on whether the product is in the wishlist
                heartIcon = 'bi-heart-fill';
            } else {
                heartIcon = 'bi-heart';
            }
            productElement.innerHTML = `
            <div class="col" >
            <div class="card">
                <div class="row">
                    <div>  <img src=${product.imageOfMaggie} class="card-img-top product-image" alt="...">
                    </div>
                    <div class="col-md-10">
                        <div >
                            <label class="menu-label">${product.nameOfMaggie}</label>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div >
                        <i class="bi ${heartIcon} align-item-end text-danger " 
                        " onclick="toggleHeart(this, ${product.id})"></i>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <p class="menu-description">${product.descpofMaggie}</p>
                    <div class="col-md-5">
                        <label class="menu-description">Rs. ${product.rateOfMaggie}</label>
                    </div>
                    <div class="col-md-4">
                    <a href="#" class="btn btn-danger" onclick="addToCart(${product.id})">Add to cart</a>
                    </div>
                    <div class="col-md-2">
                    <button type="button" class="btn btn-success"> <span class="badge">4.0 &nbsp;<i class="fa fa-star"></i></span></button>
                  
                    </div>
                </div> 
                <div class="row">
                   
                </div>
            </div>
            </div>
        `;
            productList.appendChild(productElement);
        });
    }

    function updateSelectedNavItem(selectedItem) {
        navItems.forEach(item => item.classList.remove('selected'));
        selectedItem.classList.add('selected');
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.textContent.trim().toLowerCase(); // Get category from text content
            const filteredProducts = products.filter(product => product.category.toLowerCase() === category);
            displayProducts(filteredProducts);
            updateSelectedNavItem(item);
        });
    });
    // Display all products initially
    displayProducts(products);
    // Select the default category (assuming 'Maggie' is the default)
    const defaultCategory = 'maggie';
    const defaultNavItem = Array.from(navItems).find(item => item.textContent.trim().toLowerCase() === defaultCategory);
    console.log("defaultNavItem", defaultNavItem);
    updateSelectedNavItem(defaultNavItem);
}

// Call the initializePage function when the page is loaded
document.addEventListener('DOMContentLoaded', initializePage);

function displayCateProducts(ids) {
    var id = document.getElementById('ids');
    console.log("id", id);

}


function displayListOfMAggie() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = '';
    let wishlistItems = sessionStorage.getItem('wishlist') ? JSON.parse(sessionStorage.getItem('wishlist')) : [];
    products.forEach(product => {
        // Check if the product is in the wishlist    
        let heartIcon;
        let isInWishlist = wishlistItems.some(item => item.id === product.id);
        if (isInWishlist) {
            // Determine which heart icon to display based on whether the product is in the wishlist
            heartIcon = 'bi-heart-fill';
        } else {
            heartIcon = 'bi-heart';
        }
        const productCard = `
            <div class="col" >
            <div class="card">
                <div class="row">
                    <div>  <img src=${product.imageOfMaggie} class="card-img-top product-image" alt="...">
                    </div>
                    <div class="col-md-10">
                        <div >
                            <label class="menu-label">${product.nameOfMaggie}</label>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div >
                        <i class="bi ${heartIcon} align-item-end text-danger " 
                        " onclick="toggleHeart(this, ${product.id})"></i>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <p class="menu-description">${product.descpofMaggie}</p>
                    <div class="col-md-5">
                        <label class="menu-description">Rs. ${product.rateOfMaggie}</label>
                    </div>
                    <div class="col-md-4">
                    <a href="#" class="btn btn-danger" onclick="addToCart(${product.id})">Add to cart</a>
                    </div>
                    <div class="col-md-2">
                    <button type="button" class="btn btn-success"> <span class="badge">4.0 &nbsp;<i class="fa fa-star"></i></span></button>
                  
                    </div>
                </div> 
                <div class="row">
                   
                </div>
            </div>
            </div>
        `;
        productList.innerHTML += productCard;
    })
}

// Function to toggle heart icon
function toggleHeart(heart, productId) {
    const heartIcon = heart.parentElement.querySelector('.bi');

    console.log("heart", heart);
    if (heartIcon.classList.contains('bi-heart')) {
        heartIcon.classList.remove('bi-heart');
        heartIcon.classList.add('bi-heart-fill');
        addToWishlist(productId);

    } else if (heartIcon.classList.contains('bi-heart-fill')) {
        heartIcon.classList.remove('bi-heart-fill');
        heartIcon.classList.add('bi-heart');
        removeFromWishlist(productId);
    }

}
function addToWishlist(productId) {
    const product = products.find(prod => prod.id === productId);
    wishlist.push(product);
    sessionStorage.setItem('wishlist', JSON.stringify(wishlist));
    initializePage()
}

function removeFromWishlist(productId) {
    // Retrieve wishlist items from sessionStorage
    var storedJsonStr = sessionStorage.getItem('wishlist');
    // Parse JSON string back to array
    var wishlist = storedJsonStr ? JSON.parse(storedJsonStr) : [];
    console.log(wishlist)
    // Find index of product with given productId in wishlist array
    const index = wishlist.findIndex(item => item.id === productId);
    // Check if the product exists in the wishlist
    if (index !== -1) {
        // Remove the product from the wishlist array
        wishlist.splice(index, 1);
        // Update sessionStorage with the modified wishlist array
        sessionStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
    var storedJsonStr = sessionStorage.getItem('wishlist');
    console.log(JSON.parse(storedJsonStr));
    initializePage();
}

function displayWishlist() {
    const wishlist = document.getElementById('wishlist-id');
    console.log("wishlist", wishlist);
    wishlist.innerHTML = '';
    let wishlistItems = sessionStorage.getItem('wishlist') ? JSON.parse(sessionStorage.getItem('wishlist')) : [];
    
    if(wishlistItems.length === 0){
        const wishCard = `
        <div class="col-md-12">
			<div class="card mb-3">
				<div class="card-body cart">
					<div class="col-sm-12 empty-cart-cls text-center">
						<img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" class="img-fluid mb-4 mr-3">
						<h3><strong>Your wishList is Empty</strong></h3>
					</div>
				</div>
			</div>
        </div>
        `;
        wishlist.innerHTML += wishCard;
    }else{

        wishlistItems.forEach(wish => {
            let heartIcon;
            let isInWishlist = wishlistItems.some(item => item.id === wish.id);

            if (isInWishlist) {
                // Determine which heart icon to display based on whether the product is in the wishlist
                heartIcon = 'bi-heart-fill';
            } else {
                heartIcon = 'bi-heart';
            }
            const wishCard = `
            <div class="card mb-3 mt-4 ">
                <div class="card-header align-item-center"><h2>${wish.nameOfMaggie}</h2></div>
                <div class="card-body">
                        <div class="row g-0">
                        <div class="col-md-5 position-relative">
                            <i class="bi bi-heart-fill text-danger position-absolute top-0 start-30 " style="font-size: 2rem; z-index: 1;" onclick="toggleHeartfromWishList(this, ${wish.id})"></i>
                            <img src="${wish.imageOfMaggie}" class="card-img-top" alt="...">
                        </div>
                        <div class="col-md-5 ml-5">
                            <label class="card-title" style="
                                font-size: 27px;
                                padding-left: 11%;">${wish.hotelName}</label>
                            <div style="
                            font-size: 27px;
                            padding-left: 11%;">Rs. ${wish.rateOfMaggie}</div>  
                            <div style="
                            font-size: 20px;
                            padding-left: 11%;">${wish.descpofMaggie}</div> 

                        </div>
                    </div>
                </div>
            
            </div>        
        
            `
            wishlist.innerHTML += wishCard;
        });
    }   

}

function toggleHeartfromWishList(heartWIsh, wishId) {
    console.log("heartWIsh", heartWIsh);
    // Retrieve wishlist items from sessionStorage
    var storedJsonStr = sessionStorage.getItem('wishlist');

    // Parse JSON string back to array
    wishlist = storedJsonStr ? JSON.parse(storedJsonStr) : [];
    console.log(wishlist)
    // Find index of product with given productId in wishlist array
    const index = wishlist.findIndex(item => item.id === wishId);
    // Check if the product exists in the wishlist
    if (index !== -1) {
        // Remove the product from the wishlist array
        wishlist.splice(index, 1);
        // Update sessionStorage with the modified wishlist array
        sessionStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
    var storedJsonStr = sessionStorage.getItem('wishlist');
    console.log(JSON.parse(storedJsonStr));
    displayWishlist();
}

function addToCart(productId) {
    const product = products.find(prod => prod.id === productId);
    console.log("product", product);
    if (product) {
        // Check if the product already exists in cartItems
        const existingProductIndex = cartItems.findIndex(item => item.id === productId);
        if (existingProductIndex !== -1) {
            // If the product already exists, increase its quantity
            cartItems[existingProductIndex].quantity++;
        } else {
            // If the product is being added for the first time, set its quantity to 1
            const newCartItem = {
                ...product, // Spread operator to copy existing product properties
                quantity: 1 // Add quantity property
            };
            // Push the new cart item object into the cartItems array
            cartItems.push(newCartItem);
        }
        // Update sessionStorage with the modified cartItems array
        // Convert the cartItems array to JSON string
        var jsonCartItems = JSON.stringify(cartItems);
        sessionStorage.setItem('cartItems', jsonCartItems);
        // Log the updated cartItems array
        console.log("cartItems", cartItems);
    }
}


function displayCartItems() {
    // Get the container for the cart items
    const cartList = document.getElementById("cart-id");
    // Clear previous content
    cartList.innerHTML = '';
    // Retrieve cart items from sessionStorage
    let storedJsonStr = sessionStorage.getItem('cartItems');
    let cartItems1 = JSON.parse(storedJsonStr);
    if(cartItems1?.length === 0 || cartItems1 == null){
        const cartCard = `
        <h3 >Cart Items</h3>
        <div class="col-md-12 mb-3">
			<div class="card mb-3">
				<div class="card-body cart">
					<div class="col-sm-12 empty-cart-cls text-center">
						<img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" class="img-fluid mb-4 mr-3">
						<h3><strong>Your Cart is Empty</strong></h3>
					</div>
				</div>
			</div>
        `;
        cartList.innerHTML += cartCard;
        document.getElementById('count-total').style.display = 'none';

    }else{
        
    // Loop through each item in the cartItems array
        cartItems1.forEach(item => {
            const cartCard = `
            <div class="col-md-6">
            <div class="card mb-3 mt-4 ">
                <div class="row g-0">
                    <div class="col-md-5">
                        <img  src=${item.imageOfMaggie} class="img-fluid rounded-start cart-card" alt="...">
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <h5 class="card-title">${item.nameOfMaggie}</h5>
                            <h3><b><i>${item.hotelName}</i></b></h3>
                            <p class="card-text">${item.descpofMaggie}</p>
                            <p class="card-text"><small class="text-muted">Rs. ${item.rateOfMaggie}</small></p>
                            <div class="btn-group" role="group" aria-label="Quantity">
                                <button type="button" class="btn btn-secondary" onclick="decreaseQuantity(${item.id})">-</button>
                                <span id="quantity-${item.id}">${item.quantity}</span>
                                <button type="button" class="btn btn-secondary" onclick="increaseQuantity(${item.id})">+</button>
                            </div>
                            <button class="btn btn-danger" onclick="removeItem(${item.id})">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            `;
            // Append the HTML markup to the container
            cartList.innerHTML += cartCard;
        });
        document.getElementById('count-total').style.display = 'block';
        calculateCartTotal(cartItems1);
      
    }  
};

function increaseQuantity(cartId) {
    // Retrieve cart items from sessionStorage
    var storedJsonStr = sessionStorage.getItem('cartItems');
    if (storedJsonStr === null) {
        return; // Cart is empty, nothing to increase
    }

    // Parse JSON string back to array
    var cartItems = JSON.parse(storedJsonStr);

    // Find the index of the item in cartItems array
    const itemIndex = cartItems.findIndex(item => item.id === cartId);

    // If item not found, return
    if (itemIndex === -1) {
        return;
    }

    // Increase the quantity for the item with the given id
    cartItems[itemIndex].quantity++;

    // Update sessionStorage with the modified cartItems array
    var jsonCartItems = JSON.stringify(cartItems);
    sessionStorage.setItem('cartItems', jsonCartItems);
    // Refresh the displayed cart
    displayCartItems();
}
function decreaseQuantity(cartId) {
    var storedJsonStr = sessionStorage.getItem('cartItems');
    if (storedJsonStr === null) {
        return; // Cart is empty, nothing to increase
    }

    // Parse JSON string back to array
    var cartItems = JSON.parse(storedJsonStr);

    // Find the index of the item in cartItems array
    const itemIndex = cartItems.findIndex(item => item.id === cartId);

    // If item not found, return
    if (itemIndex === -1) {
        return;
    }

    // Decrease the quantity for the item with the given id
    if (cartItems[itemIndex].quantity > 1) {
        cartItems[itemIndex].quantity--;
    }

    // Update sessionStorage with the modified cartItems array
    var jsonCartItems = JSON.stringify(cartItems);
    sessionStorage.setItem('cartItems', jsonCartItems);
    // Refresh the displayed cart
    displayCartItems();
}

function removeItem(productId) {
    // Retrieve cart items from sessionStorage
    var storedJsonStr = sessionStorage.getItem('cartItems');

    // Parse JSON string back to array
    var cartItems = storedJsonStr ? JSON.parse(storedJsonStr) : [];

    // Find index of product with given productId in cartItems array
    const index = cartItems.findIndex(item => item.id === productId);

    // If product with given productId is found, remove it from cartItems array
    if (index !== -1) {
        cartItems.splice(index, 1);

        // Update sessionStorage with the modified cartItems array
        var jsonCartItems = JSON.stringify(cartItems);
        sessionStorage.setItem('cartItems', jsonCartItems);

        // Log the updated cartItems array
        console.log(cartItems);
        calculateCartTotal(cartItems);
        displayCartItems();
    }
}

function calculateCartTotal(cartItems) {
    let totalprice = 0;
    cartItems.forEach(item => {
        totalprice += item.rateOfMaggie * item.quantity;
        console.log("item.price * item.quantity", item.price * item.quantity);
    })
    console.log("totalprice", totalprice);

    // document.getElementById('sub-total').innerText = 'Rs.' + totalprice;
    // document.getElementById('total').innerText = 'Rs.'+ totalprice;

            const counttotal=`<div class=" align-items-center justify-content-center mt-3 mb-2">
                    <div class="card text-center" style="background: darkgray;">
                        <div class="card-body">
                            <h5 class="card-title">Order Summary</h5>
                            <ul class="list-group list-group-flush" style="background: darkgray;">

                                <li class="list-group-item d-flex justify-content-between">
                                    Shipping
                                    <span>Free</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between">
                                    <b>Total</b>
                                    <span id="total"><b>Rs. ${totalprice}.00</b></span>
                                </li>
                            </ul>
                            <a id="checkout-link" class="btn btn-outline-success btn-lg mt-3" style="width: 70%;" href="Checkout.html" >Checkout</a>
                        </div>
                    </div>
                </div>`

           document.getElementById('count-total').innerHTML = counttotal 
           
}

function onLogOut(event){
    event.preventDefault();
    alert("Are you sure you want to Logout?")
    localStorage.clear();
    sessionStorage.clear();
}



