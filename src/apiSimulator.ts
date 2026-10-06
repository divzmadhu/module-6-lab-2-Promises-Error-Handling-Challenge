// Lab 2
// Promises and Error Handling Challenge

// fetchProductCatalog(): Simulates fetching a list of products, each with id, name, and price.

export interface Product {
    id: number;
    name: string;
    price: number;

}

export interface Review {
    productId: string;
    reviewer: string;
    rating: number;
    comment: string;

}

export interface SalesReport {
    totalSales: number;
    unitsSold: number;
    averagePrice: number;
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
                reject("Failed to fetch reviews for product ID ${productId}");
            }
        }, 1500);
    });
};


// fetchSalesReport(): Simulates fetching a sales report with totalSales, unitsSold, and averagePrice.

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
                reject("Failed to fetch sales report");
            }
        }, 1000);
    });
};



