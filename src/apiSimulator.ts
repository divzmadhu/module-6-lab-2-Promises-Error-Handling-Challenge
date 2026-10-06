// Lab 2
// Promises and Error Handling Challenge

// fetchProductCatalog(): Simulates fetching a list of products, each with id, name, and price.

interface Product{
     id: number;
     name: string; 
     price: number;

}
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
        reject("Failed to fetch product catalog");
        }
    }, 1000);
    });
};




// fetchProductReviews(productId: number): Simulates fetching reviews for a product.

//     Resolve the Promise with an array of reviews after a 1.5-second delay.
//     Reject the Promise randomly with an error message, e.g., "Failed to fetch reviews for product ID ${productId}".

// fetchSalesReport(): Simulates fetching a sales report with totalSales, unitsSold, and averagePrice.

//     Resolve the Promise with a mock sales report after a 1-second delay.
//     Reject randomly with an error message, e.g., "Failed to fetch sales report".

