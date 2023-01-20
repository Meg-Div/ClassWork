"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Clinics", [
      {
        clinicName: "Berts Mortury",
        location: "Winnepeg",
        size: "57",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        clinicName: "Planned Parenthood",
        location: "San Francisco",
        size: "35",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Clinics", null, {});
  },
};
