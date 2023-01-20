#How to set up a node server

1. `npm init -y` this initalizes your server to accept packages
2. Install express using `npm i express`. You will use this command to install any tool you need. Hint, you can install multiple tools at once if you put a space in the line. `npm i express cors dotenv`
3. Define your packages as variables:
    - const express = require("express");
    - const app = express();
    - const PORT = 1000;
    - app.listen(PORT, console.log(`Listening on port ${PORT}`));
