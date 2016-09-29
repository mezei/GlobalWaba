# Global Waba
A little project trying to raise global warming awareness and building a light community around it! Having such a global topic as our focus, accessibility became one of our topmost priorities. By creating a stable, responsible but gracefully degrading site we can ensure this information gets delivered to everyone. We also tried to avoid unnecessary floating and hover elements and relied on a relative layout to make sure our core site direction stays the same even on the most primitive of devices and displays.

When it comes to JavaScript, we only use it for user experience enhancements - both usability and visuals!
By having it enabled, the content you'll be seeing throughout our site will all be dynamically loaded. We'll also have the option to use greatly enhanced tools to display visuals such as charts and statistics.
Still, having JavaScript enabled is completely up to you and if you choose to disable it you will still be able to use our site - as close as possible - to its full functionality.

# Usability Tips & Stuff

 - In both modes: On the first, index page, there is a blueish link on the panel right next to the form which you can use to check our statistics without submitting any data!

 - In non-JavaScript mode: If you don't know how to type your country's full name properly, don't worry, just leave some gibberish in the country input and submit it! The next page will show a list of countries to help you find what you were looking for! :)

 - In non-JavaScript mode: If you are on the second, results page (r.php) you can keep on refreshing the page to replay the animation - you will also be shuffled some new comments from our database down below!
 
# Installation
Just copy everything excluding the develop directory. (That folder contains the uncompressed project.)

Even though we are using php, our root is index.html and not index.php. This is because we are not using anything server generated on the initial home page and it would be unnecessary to call php to serve static content.

# Server Notes
We are using a file database to store some minor user data (db.data and countriesdb.data), so the "s" folder inside the project might need write permissions to function properly. We only store 2-3 megabytes of data at max capacity because we have various limits in place.
