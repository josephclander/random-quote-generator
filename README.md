# A Random Quote Generator

An app that displays random famous quotes each time a button is clicked.

## Screenshot

<img width="300px" src="https://user-images.githubusercontent.com/19231569/214089890-8ea1968e-ff6d-4269-aa22-16294a238efd.png">

## Client Requirements

1.  Create an Array with a minimum of 5 objects to store the data for your quotes.

2. Add the following properties to each quote object:

       - quote - string - the actual quote.
       - source - string - the person or character who said it.

3. Add a citation property to at least one quote object. The value should be a string holding a reference to the source of the quote, like the book, movie or song where the quote originates.

4. Add a year property to at least one quote object. The value should be a string or number representing the year the quote originated.

5.  Create the `getRandomQuote` function.
    The `getRandomQuote` function should create a random number, and use that random number to return a random quote object from the quotes array.

6.  Create the `printQuote` function.
    The app should display a new quote each time the user clicks the "Show another quote" button using a `printQuote` function.

7.  Finishing the project
    The final stage of the project is perhaps the most important. This is where your developer skills really shine as you carefully double-check that you've accomplished all requirements and that your project is ready for submission.

    i) Code comments - It’s a best practice for development code to be well commented.

    ii) Code readability - Readability is second only to functionality. Double-check your code to ensure the spacing and indentation is consistent.

    iii) Cross browser consistency - To pass, your project only needs to work in Chrome. But it’s common for developers to test their projects in multiple browsers to know how they will perform out in the wild.

    iv) Quality Assurance Testing - This is the keystone step in the development process.
       - Open and run your app.
       - Open the Chrome DevTools console.
       - Pretend to be a user and test all aspects of functionality and every possible state of the app, while monitoring the console for bugs and resolving any that arise.

## Extra Credit

1.  Object Properties

    - At least one object has at least one additional property, such as tags.
    - At least one additional property prints to the page with the its quote.

2.  `printQuote` function

    - Quotes automatically refresh at regular intervals.
    - Background color changes to a random color each time the quote refreshes.
