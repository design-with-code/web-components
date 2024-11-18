# Designing with Code - Part 4: Data, Document Object Model, and Events

Creating prototypes in code allows designers to gain a deeper understanding of the way user interfaces are constructed. This can help to get more sensitive to concerns by engineers, but it can also strengthen the designer's position in the discussion with development.

In the previous article of this series, we created a first simple static prototype. We created a very simple setup with no installation required and we added all parts of our simple application in a single HTML file. This allowed us to combine web components and place them into layouts we created using flex layouts.

The important thing about prototypes of course isn't the static display of components, which is what we can do much easier with our design tools, but to add interactivity to it.

This article will address the most important aspects that are required to add interactivity. It is helpful if you already have some experience with web technologies, but I will attempt to add sufficient information for everyone to follow.

The following topics are necessary to create interactive prototypes:

* Data model: our prototype will display a list of addresses with a flag whether we are allowed to send ads to that address. We will allow the user to change this flag and store this in the data model. To make sure the data is consistent, we will encapsulate the data model in a single class that is used by the application to read and change the data.
* Document object model: we will create the table rows dynamically from the list of addresses. For this purpose, we will add, remove, and change elements in the HTML document using the document object model operations.
* Events: to make the user interface interactive and react to user input, we must listen to the events initiated by the interface components. If a user for instance clicks a button, the button initiates a click event to which we register a method that then be called on click. Event handling is the basis for making user interfaces interactive.

In this article, we will shed some light on each of these aspects. For all details, you can access all sources on the GitHub page.

## Contents

* [Debugging](./Debugging.md): Explains how you can debug your application in the broser console provided by the developer tools in Chrome
* [01_data](./01_data/index.html): Example how to set up a data model and test it using a test script. You have to open the browser console to see the output.
* [02_dom](./02_dom/index.html): Example how to manipulate the document structure with JavaScript. Here, we add the rows to the table.
* [03_events](./03_events/index.html): Add interactivity to the prototype by reacting to user events.
