// Lab 2
// Promises and Error Handling Challenge

/**
 * ============================================================================
 * Module 6    : TypeScript and Advanced JavaScript
 * Lab 2       : Promises and Error Handling Challenge
 * Date        : October 2026
 * Description : Asynchronous operations and error handling in TypeScript.
 * ============================================================================

===============================================================================
LAB OBJECTIVES
===============================================================================

By the end of this lab, you will be able to:

1. Apply Promises to manage multiple asynchronous operations in JavaScript.
2. Implement chained Promises to handle sequential data retrieval and manage 
   dependencies between API calls.
3. Utilize .catch() and .finally() to handle errors and perform cleanup tasks 
   in a Promise chain.
4. Design custom error classes to improve error identification and debugging.
5. Implement a retry mechanism to manage failed asynchronous requests, 
   enhancing application resilience.
6. Analyze the benefits and challenges of using error handling strategies in 
   complex asynchronous workflows.

===============================================================================
*/


// Updating apiSimulator.ts -Part 4.2
import {NetworkError, DataError} from "./errors.js";




export interface Product {
    id: number;
    name: string;
    price: number;

}

export interface Review {
    productId: number;
    reviewer: string;
    rating: number;
    comment: string;

}

export interface SalesReport {
    totalSales: number;
    unitsSold: number;
    averagePrice: number;
}

// Part 2a fetchProductCatalog(): Simulates fetching a list of products, each with id, name, and price.
// Use Math.random() to sometimes reject the Promise with an error message, e.g., "Failed to fetch product catalog"

//{ id: number; name: string; price: number }
export const fetchProductCatalog = (): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            } else {
                // reject("Failed to fetch product catalog");
                reject(
                    new NetworkError("Failed to fetch product catalog"));
            }
        }, 1000);
    });
};


// Part 2b fetchProductReviews(productId: number): Simulates fetching reviews for a product.

//     Resolve the Promise with an array of reviews after a 1.5-second delay.
//     Reject the Promise randomly with an error message, e.g., "Failed to fetch reviews for product ID ${productId}".


export const fetchProductReviews = (productId: number): Promise<Review[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    {
                        productId: productId,
                        reviewer: 'Customer1',
                        rating: 5,
                        comment: "The Product is good ",

                    },
                    {
                        productId: productId,
                        reviewer: 'Customer2',
                        rating: 3,
                        comment: "The Product is not so good ",

                    },
                    {
                        productId: productId,
                        reviewer: 'Customer3',
                        rating: 1,
                        comment: "Poor Quality ",

                    },
                ]);
            } else {
                // reject("Failed to fetch reviews for product ID ${productId}");
                reject(
                    new NetworkError(`Failed to fetch reviews for product ID ${productId}`));
            }
        }, 1500);
    });
};


// Part 2c fetchSalesReport(): Simulates fetching a sales report with totalSales, unitsSold, and averagePrice.

//     Resolve the Promise with a mock sales report after a 1-second delay.
//     Reject randomly with an error message, e.g., "Failed to fetch sales report".

export const fetchSalesReport = (): Promise<SalesReport> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve(
                    {
                        totalSales: 15000,
                        unitsSold: 25,
                        averagePrice: 600,
                    },

                );
            } else {
                // reject("Failed to fetch sales report");
                reject(
                    new NetworkError("Failed to fetch the sales Report")
                );
            }
        }, 1000);
    });
};