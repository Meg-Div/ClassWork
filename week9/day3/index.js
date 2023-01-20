//creating a server from scratch

//imports the Express module using require()
const express = require("express");

//add in the route folder and link the files
const clinicRoutes = require("./routes/clinicRoutes");
const authRoutes = require("./routes/authRoutes");

//create the port to use
const PORT = 3007;

//calls the express() function and stores the result in the app variable
const app = express();

//allows us to use req.body
app.use(express.json());

//route to the files in Routes folder
app.use("/clinic", clinicRoutes);
app.use("/auth", authRoutes);

//localhost:3007/clinic/get_clinic

app.listen(PORT, console.log(`listening on port ${PORT}`));
