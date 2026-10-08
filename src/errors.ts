// Part 4: Custom Error Classes

//     Create Custom Error Classes for different error scenarios:

//         NetworkError for network-related issues.
export class NetworkError extends Error{
    constructor(message:string){
        super(message);
        this.name = "networkError";
    }
}


// DataError for data-related issues (e.g., missing fields in the API response).
export class DataError extends Error{
    constructor(message:string){
        super(message);
        this.name ="DataError"
    }
}

// Update API Simulation Functions to use these custom error classes when rejecting Promises.