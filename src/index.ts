
// Part 5:
import { retryPromise } from "./retry.js";

// Part 3: Build the Main Application Logic


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


/*******************************************************************************
 *                             TEST RUN RESULTS                                *
 *******************************************************************************/

// =============================================================================
// STAGE 1: INITIAL BASELINE TEST
// Command: $ npx tsx src/index.ts
// =============================================================================
/*
Products: [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Headphones', price: 200 }
]
*/


// =============================================================================
// STAGE 2: SEQUENTIAL PROMISE CHAIN
// Full flow: Fetch Products -> Fetch Reviews -> Fetch Sales Report
// =============================================================================
/*
Products: [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Headphones', price: 200 }
]
Reviews: [
  {
    productId: 1,
    reviewer: 'Customer1',
    rating: 5,
    comment: 'The Product is good '
  },
  {
    productId: 1,
    reviewer: 'Customer2',
    rating: 3,
    comment: 'The Product is not so good '
  },
  {
    productId: 1,
    reviewer: 'Customer3',
    rating: 1,
    comment: 'Poor Quality '
  }
]
Sales Report: { totalSales: 15000, unitsSold: 25, averagePrice: 600 }
All API calls have been attempted.
*/


// =============================================================================
// STAGE 3:  ERROR HANDLING (CUSTOM ERRORS + RETRY LOGIC)
// =============================================================================

// -----------------------------------------------------------------------------
// [RUN 1] Intermittent Network Failure (Caught & Handled)
// -----------------------------------------------------------------------------
/*
Attempt 1

Products: [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Headphones', price: 200 }
]
Network problem: Failed to fetch reviews for product ID 1
All API calls have been attempted.
*/

// -----------------------------------------------------------------------------
// [RUN 3] Successful Retry Execution
// -----------------------------------------------------------------------------
/*
Attempt 3

Products: [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Headphones', price: 200 }
]
Reviews: [
  {
    productId: 1,
    reviewer: 'Customer1',
    rating: 5,
    comment: 'The Product is good '
  },
  {
    productId: 1,
    reviewer: 'Customer2',
    rating: 3,
    comment: 'The Product is not so good '
  },
  {
    productId: 1,
    reviewer: 'Customer3',
    rating: 1,
    comment: 'Poor Quality '
  }
]
Sales Report: { totalSales: 15000, unitsSold: 25, averagePrice: 600 }
All API calls have been attempted.
*/


//Implementing Part 5
retryPromise()
    .then((products) => {
        console.log("Products fetched successfully:", products);
    })
    .catch((error) => {
        console.error("Failed even after retry:", error.message);
    });


// =============================================================================
// Testing Output: Promise Chain with Retry Mechanism
// Added retryPromise() to retry fetching products if the first attemt fails
// Products were fetched successfully, but fetching reviews failed with a NetworkError.
// =============================================================================
/*
npx tsx src/index.ts
Products: [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Headphones', price: 200 }
]
Products fetched successfully: [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Headphones', price: 200 }
]
Network problem: Failed to fetch reviews for product ID 1
All API calls have been attempted.*/