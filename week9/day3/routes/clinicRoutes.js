//imports the Express module using require()
const express = require("express");

//imports the sequelize module
const { Op } = require("sequelize");

//imports the bcrypt module using require()
const bcrypt = require("bcrypt");

//link the model files being used
const { Clinics, Employees, Patient } = require("../models");

//reate a new router object to handle requests
const router = express.Router();

//use postman:
//localhost:3007/clinic/get_clinic

//add in clinic
router.post("/add_clinic", async (req, res) => {
  const { clinicName, location, size } = req.body;
  const clinics = await Clinics.create({
    clinicName,
    location,
    size,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.send(clinics);
});

//update/modify
router.put("/update_clinic", async (req, res) => {
  const { clinicName, location, size } = req.body;
  const clinics = await Clinics.update(
    {
      clinicName,
      location,
      size,
      updatedAt: new Date(),
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  res.send(clinics);
});

//delete
router.delete("/delete_clinic", async (req, res) => {
  const { clinicName, location, size } = req.body;
  const clinics = await Clinics.destroy({
    where: {
      id: req.body.id,
    },
  });
  res.send(`Deleted ${req.body.id}`);
});

//find one specific
router.get("/get_clinic", async (req, res) => {
  const clinics = await Clinics.findOne({
    where: {
      id: req.body.id,
    },
  });
  res.send(clinics);
});

//find all in table
router.get("/get_clinics", async (req, res) => {
  const clinics = await Clinics.findAll({});
  res.send(clinics);
});

//Employees:

//add in Employee
router.post("/add_employee", async (req, res) => {
  const { firstName, lastName, id, password } = req.body;
  bcrypt.hash(password, 10, async (err, hash) => {
    const employees = await Employees.create({
      firstName,
      lastName,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
      password: hash,
    });
    res.send(employees);
  });
});

//update/modify
router.put("/update_employee", async (req, res) => {
  const { firstName, lastName, id } = req.body;
  const employees = await Employees.update(
    {
      firstName,
      lastName,
      id,
      updatedAt: new Date(),
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  res.send(employees);
});

//delete
router.delete("/delete_employee", async (req, res) => {
  const { firstName, lastName, id } = req.body;
  const employees = await Employees.destroy({
    where: {
      id: req.body.id,
    },
  });
  res.send(`Deleted ${req.body.id}`);
});

//find one specific
router.get("/get_employee", async (req, res) => {
  const employees = await Employees.findOne({
    where: {
      id: req.body.id,
    },
  });
  res.send(employees);
});

//find all in table
router.get("/get_employees", async (req, res) => {
  const employees = await Employees.findAll({});
  res.send(employees);
});

//Patients:

//add in Patient
router.post("/add_patient", async (req, res) => {
  const { firstName, lastName, id } = req.body;
  const patients = await Patient.create({
    firstName,
    lastName,
    id, //employee id
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.send(patients);
});

//update/modify
router.put("/update_patient", async (req, res) => {
  const { firstName, lastName, id } = req.body;
  const patients = await Patient.update(
    {
      firstName,
      lastName,
      id,
      updatedAt: new Date(),
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  res.send(patients);
});

//delete
router.delete("/delete_patient", async (req, res) => {
  const { firstName, lastName, id } = req.body;
  const patients = await Patient.destroy({
    where: {
      id: req.body.id,
    },
  });
  res.send(`Deleted ${req.body.id}`);
});

//find one specific
router.get("/get_patient", async (req, res) => {
  const patients = await Patient.findOne({
    where: {
      id: req.body.id,
    },
  });
  res.send(patients);
});

//find all in table
router.get("/get_patients", async (req, res) => {
  const patients = await Patient.findAll({});
  res.send(patients);
});

module.exports = router;
