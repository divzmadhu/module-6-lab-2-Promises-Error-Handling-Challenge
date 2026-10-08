import {
    fetchProductCatalog,
    fetchProductReviews,
    fetchSalesReport,
} from "./apiSimulator.js";

fetchProductCatalog()
    .then((products) => {
        console.log("Products:", products);
        return fetchProductReviews(products[0].id);
    })
    .then((reviews) => {
        console.log("Reviews:", reviews);
        return fetchSalesReport();
    })
    .then((SalesReport) => {
        console.log("Sales Report:", SalesReport);
    })
    .catch((error) => {
    console.log("Something went wrong, Couldnt fetch the data requested", error);
})
.finally(() => {
    console.log("All API calls have been attempted.");

});


//Initial testing Output

//     $ npx tsx src/index.ts
// Products: [
//   { id: 1, name: 'Laptop', price: 1200 },
//   { id: 2, name: 'Headphones', price: 200 }
// ]
