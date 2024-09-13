const products = ["chips", "sweets", "juice"]
const price = [10, 8, 9]

function displayProducts() {
    console.log("Available Products:");
    products.forEach((product, index) => {
        console.log(`${index + 1}. ${product} - R${prices[index]}`);
    });
}

function calculateTotalCost(cart) {
    let totalCost = 0;
    cart.forEach(item => {
        totalCost += prices[item];
    });
    return totalCost;
}

function shopSimulation(budget) {
    let cart = [];
    let shopping = true;
    
    while (shopping) {
        displayProducts();

        let selectedProduct = parseInt(prompt("Enter the number of product you want to purchase (0 to finish):")) - 1;

        if (selectedProduct === -1) {
            shopping = false;            
        } else if (selectedProduct >= 0 && selectedProduct < products.length) {
            cart.push(selectedProduct);
            console.log(`${products[selectedProduct]} added to yout cart.`);
        }else {
            console.log("Invalid selection. Please try again.");
        }
    }

    let totalCost = calculateTotalCost(cart);

    if (totalCost > budget) {
        console.log(`Sorry, your total cost is R${totalCost}, which exceeds your budget of R${budget}.`);
    } else{
        let change = budget - totalCost;
        console.log(`Your total is R${totalCost}. Your remaining change is R${change}.`);
    }
}