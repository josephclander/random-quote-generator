# A Random Quote Generator

An app that displays random famous quotes each time a button is clicked.

## Client Requirements

1.  Create an Array of objects to store the data for your quotes
    A data structure is necessary to store and organize the quotes in your app. A basic array of objects is a lightweight way to store information.

    In your js/script.js file:

    1. Create a variable named quotes and set it equal to an empty array.
    2. Add a minimum of five empty objects to your quotes array.

2.  Add data to your quote objects
    The objects in the quotes array store the individual properties of the quotes.

    1. Add the following properties to each quote object:

       - quote - string - the actual quote
       - source - string - the person or character who said it

    2. Add a citation property to at least one quote object. The value should be a string holding a reference to the source of the quote, like the book, movie or song where the quote originates.

    3. Add a year property to at least one quote object. The value should be a string or number representing the year the quote originated.

3.  Pause development and test your code
    Frequently testing your code can catch bugs as they arise, and avoid the undesirable experience of writing dozens of lines of code, just to discover that your code contains multiple bugs that need to be tracked down and fixed.

    - Project Warm Up: Logging values can help you better understand your code, the state of your app, and ensure that the code you've written is doing what you think it’s doing. For some helpful practice, check out the project Warm Up Logging Values and Types.

    1. Below your array of quote objects, use the `console.log()` method to log the quotes array to the console. You can click on those objects in the console to open them and inspect their contents.

    2. Delete or comment out your log statements as you no longer need them; they can quickly accumulate and clutter up your code and the console, making things harder to manage.

    3. If you’re having issues with your code, opening your project or the console, or seeing errors in the console, be sure to review your resources. Check out the Study Guide, Practice Sessions, Warm Ups and Walkthrough as needed, and reach out in Slack.

4.  Create the `getRandomQuote` function
    The `getRandomQuote` function should create a random number, and use that random number to return a random quote object from the quotes array.

    Project Warm Up: Dealing with functions, arrays and random numbers can be confusing at first. For some helpful practice, check out the project Warm Up Random Array Index.

    1. Create a function named `getRandomQuote`.

    2. In the function body, create a variable to store a random number ranging from zero to the index of the last item in the quotes array.

    3. Lastly, the function should return a random quote object using the random number variable above and bracket notation on the quotes array.

5.  Pause development and test your code

    1. Use `console.log()` inside of the getRandomQuotes function to log out the random number and the random quote object from the quotes array.

    2. Call the `getRandomQuote()` function immediately after the function definition to run the code inside, including the new log statements.

    3. If you’re having issues with your code or feel stuck, check out the Study Guide, Practice Sessions, Warm Ups and Walkthrough as needed, and reach out in Slack.

6.  Create the `printQuote` function
    The app should display a new quote each time the user clicks the "Show another quote" button using a `printQuote` function.

    1. Create a function named `printQuote`.
       You will program the `printQuote` function to perform three tasks: call the `getRandomQuote` function, use the returned quote object to build a string of HTML and quote properties, then use that string to display a random quote in the browser.

    2. In the body of the `printQuote` function, create a variable to store a random quote object from the `getRandomQuote()` function.

    3. Create another variable to store the HTML string. Set it equal to a string containing two `<p>` elements. Use this code snippet as a guide for what the HTML string should look like at this point:

       ```
       <p class="quote"> A random quote </p>
       <p class="source"> quote source </p>
       ```

    - The first `<p>` element should have a class equal to “quote”, and the random quote object’s .quote property nested between the opening and closing <p> tags.

    - The second `<p>` element should have a class equal to “source”, and the random quote object’s .source property nested between the tags.

            Important Notes:

            - Do not include the second closing `</p>` tag for now – you will add it at the end of this step.

            - You can use template literals here if you’re comfortable with that approach. But if you use traditional strings instead, be sure to wrap the strings in single quotes, so that the HTML classes can use their recommended double quotes.

    4. Create two separate if statements below the variables. You will need to add decision making to this function:

    - Project Warm Up: Using conditionals to test if objects or elements exist before trying to do something with them is a common developer task. For some helpful practice, check out the project Warm Up Conditional String.

    - If the random quote object has a citation property, concatenate a `<span>` element with the class "citation" to the HTML string.

    - If the random quote object has a year property, concatenate a `<span>` element with the class "year" to the HTML string.

    Use the following code snippet as a guide for what the HTML string should look like with the added "citation" and "year" `<span>` elements (like earlier, omit the second closing `</p>` tag for now):

    ```
    <p class="quote"> A random quote </p>
    <p class="source"> quote source
        <span class="citation"> quote citation </span>
        <span class="year"> quote year </span>
    </p>
    ```

    5. Below the if statements, complete the string by concatenating a closing `</p>` tag to the HTML string. This is the closing tag for the second paragraph with the class source.

    6. Lastly, set the `printQuote` function to return the full HTML string displaying a random quote.

    Use the following code snippet, along with the variable storing the string you’ve assembled, to update your project’s HTML with a random quote:

    ```
    document.getElementById('quote-box').innerHTML = yourStringHere;
    ```

        Note: You'll learn all about document.getElementById() and .innerHTML in an upcoming course. In this project, it's going to help you select the 'quote-box' div and update its HTML content with the random quote markup.

7.  Pause development and test your code
    Your app should now display a new quote every time the user clicks the "Show another quote" button. At the bottom of the js/script.js file, we’ve included a line of code that calls the printQuote function each time the user clicks that button. You’ll learn more about handling events like a button click in subsequent units.

    1. If you want to double-check any of the values in this section, log them out in the `printQuote` function so that any time the button is clicked, the log statements will be printed to the console.

    2. If you’re running into trouble, check out the Study Guide, Practice Sessions, Warm Ups and Walkthrough as needed, and reach out to your team on Slack.

8.  Finishing the project
    The final stage of the project is perhaps the most important. This is where your developer skills really shine as you carefully double-check that you've accomplished all requirements and that your project is ready for submission.

    1. Code comments - It’s a best practice for development code to be well commented. Replace provided comments with your own to briefly describe your code.

    2. Code readability - Readability is second only to functionality. Double-check your code to ensure the spacing and indentation is consistent.

    3. Cross browser consistency - To pass, your project only needs to work in Chrome. But it’s common for developers to test their projects in multiple browsers to know how they will perform out in the wild.

    4. Quality Assurance Testing - This is the keystone step in the development process.
       - Open and run your app.
       - Open the Chrome DevTools console.
       - Pretend to be a user and test all aspects of functionality and every possible state of the app, while monitoring the console for bugs and resolving any that arise.

# Extra Credit

1.  Object Properties

    - At least one object has at least one additional property, such as tags.
    - At least one additional property prints to the page with the its quote.

2.  `printQuote` function

    - Quotes automatically refresh at regular intervals.
    - Background color changes to a random color each time the quote refreshes.
