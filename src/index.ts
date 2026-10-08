//Improving  .catch () using custom errors
import { NetworkError, DataError } from "./errors.js";

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
        // console.log("Something went wrong, Couldnt fetch the data requested", error);
        if (error instanceof NetworkError) {

            console.error("Network problem:", error.message);

        } else if (error instanceof DataError) {

            console.error("Data problem:", error.message);

        } else {

            console.error("Unknown error:", error);

        }

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

// Second testing Output after building the actual Promise chain
// Products: [
//   { id: 1, name: 'Laptop', price: 1200 },
//   { id: 2, name: 'Headphones', price: 200 }
// ]
// Reviews: [
//   {
//     productId: 1,
//     reviewer: 'Customer1',
//     rating: 5,
//     comment: 'The Product is good '
//   },
//   {
//     productId: 1,
//     reviewer: 'Customer2',
//     rating: 3,
//     comment: 'The Product is not so good '
//   },
//   {
//     productId: 1,
//     reviewer: 'Customer3',
//     rating: 1,
//     comment: 'Poor Quality '
//   }
// ]
// Sales Report: { totalSales: 15000, unitsSold: 25, averagePrice: 600 }
// All API calls have been attempted.

// Third testing Output after adding NetworkError and DataError and updated error handling.

// Attempt 1

//  { id: 2, name: 'Headphones', price: 200 }
// ]
// Network problem: Failed to fetch reviews for product ID 1
// All API calls have been attempted.


// Attempt 3

// Products: [
//   { id: 1, name: 'Laptop', price: 1200 },
//   { id: 2, name: 'Headphones', price: 200 }
// ]
// Reviews: [
//   {
//     productId: 1,
//     reviewer: 'Customer1',
//     rating: 5,
//     comment: 'The Product is good '
//   },
//   {
//     productId: 1,
//     reviewer: 'Customer2',
//     rating: 3,
//     comment: 'The Product is not so good '
//   },
//   {
//     productId: 1,
//     reviewer: 'Customer3',
//     rating: 1,
//     comment: 'Poor Quality '
//   }
// ]
// Sales Report: { totalSales: 15000, unitsSold: 25, averagePrice: 600 }
// All API calls have been attempted.
