import {
    fetchProductCatalog,
    fetchProductReviews,
    fetchSalesReport
} from "./apiSimulator.js";

fetchProductCatalog()
    .then((products) => {
        console.log("Products:", products);
    })
    .catch((error) => {
        console.error("Error:", error);
    });


//Initial testing Output

//     $ npx tsx src/index.ts
// Products: [
//   { id: 1, name: 'Laptop', price: 1200 },
//   { id: 2, name: 'Headphones', price: 200 }
// ]
