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
    await queryInterface.bulkInsert("Owners", [
      {
        firstName: "Meg",
        lastName: "Div",
        pet: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "James",
        lastName: "Jackson",
        pet: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "George",
        lastName: "Perkins",
        pet: 3,
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
    await queryInterface.bulkDelete("Owners", null, {});
  },
};
