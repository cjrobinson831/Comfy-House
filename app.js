//variables

const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDom = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDom = document.querySelector('.products-center');


//cart 
let cart = [];


//getting the products
class Prodcucts {
    async getProducts() {
        try {
            let result = await fetch('products.json')
            let data = await result.json()
            let products = data.items;
            products = products.map(item => {
                const { title, price } = item.fields;
                const { id } = item.sys
                const image = item.fields.image.fields.file.url;
                return (title, price, id, image)
            })
            return products
        } catch (error) {
            console.log(error)
        }
    }
}

// display products
class UI {
    displayProducts(products) {
        let result = '';
        products.forEach(product => {
            result += `
              <!--- single product-->
            <article class="product">
                <div class="img-container">
                    <img src=${prduct.image}
                    <button class="bag-btn" data-id=${product.id}>
                        <i class="fa fa-shopping-cart"></i>
                        add to bag
                    </button>
                </div>
                <h3>${product.title}</h3>
                <h4>$${product.price}</h4>
            </article>

            <!--- end of single product-->
            `;
        });
        productsDOM.innerHTML = results;
    }
}

//local storage
class Storage {

}

document.addEventListener("DOMContenetLoaded", () => {
    const ui = new UI()
    const products = new Products()

    // get all products
    products.getProducts().then(products => ui.displayProducts(products));
});