# NodejsServerExercise

Node.js Web Server Exercises

Problem 1. Rewrite the server

Rewrite the server as it was presented on the lecture. Rewrite the favicon, index and static files handlers. Try to

rewrite them without copy-paste driven development.

Problem 2. Restrict the static file handler

Restrict the handler to serve only files from the &#39;content&#39; folder. Restrict it to serve only html, css, js and jpg files.

Problem 3. Create HTML with a form

Users should be able to fill name and URL of an image and send the data to the server. The request should be POST.

The server should save the name and the URL in a memory array. If the name or the URL are null or empty, the

server should return a friendly error message.

HINT: Search online how to parse the form data on the server.

Problem 4. Create HTML listing all saved images by their name

The server should return HTML containing all images with links to their details page.

HINT: The HTML should be a generated runtime string depending on the current saved images.
