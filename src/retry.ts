// Part 5: Optional Challenge  ( In progress)

//     Create a Retry Mechanism:
//         Write a utility function retryPromise that accepts an async function, the number of retry attempts, and the delay between attempts.
//             Hint: Use setTimeout to delay the next attempt.
//             Hint: You will need to utilize recursion to implement this function. Not sure what recursion is, or don’t quite remember? This is an opportunity to practice your research abilities or review!
//         Use this function to retry API calls that fail initially.

//     Implement retryPromise with API Calls to retry up to three times for each API call before giving up.

// Logic 
// Create a retryPromise() function that calls an API, such as fetchProductCatalog().
import { fetchProductCatalog } from "./apiSimulator.js";
export const retryPromise = () => {
    return fetchProductCatalog()
    .catch (() => {
    console.log("First attempt failed. Trying again...");
    return fetchProductCatalog();
});

};


// If the API call fails, use .catch() to try calling the API one more time.
// If the second attempt also fails, display or handle the error instead of trying again.



