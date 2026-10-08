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

    Retry is still in progress. Will be updating soon
