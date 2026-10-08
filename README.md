Critical Thinking Questions

    1. Why is it important to handle errors for each individual API call rather than just at the end of the promise chain?

    In my program, I have three API calls: fetchProductCatalog(), fetchProductReviews(), and fetchSalesReport().

    If fetchProductCatalog() fails, I know that the product information could not be loaded. If fetchProductReviews() fails, I know that the reviews could not be loaded. So, handling errors helps me know which API call caused the problem.


    2. How does using custom error classes improve debugging and error identification?
    In my program, I used NetworkError and DataError.

    For example, if fetchProductReviews() fails because of a network problem, I can check for NetworkError and display:

     Network problem: Failed to fetch reviews for product ID 1

    This makes it easier to understand what went wrong instead of having only a general error message.

    3. When might a retry mechanism be more effective than an immediate failure response?
    In my program, the API calls have a chance of failing because of a network problem. If fetchProductReviews() fails temporarily, I could try calling it again instead of immediately stopping the Promise chain.

    For example, if the reviews request fails once but the network works the second time, retrying would allow the program to get the reviews successfully.




   **Review
    Completed the Promise and Error Handling project by building a Promise chain to fetch the product catalog, reviews, and sales report. I also learned how to use .then(), .catch(), .finally(), and custom error classes. I understood how errors are handled when an API call fails. I still need to work on the critical thinking questions, which I will complete later. 
    
    