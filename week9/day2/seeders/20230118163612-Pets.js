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
    await queryInterface.bulkInsert("Pets", [
      {
        name: "Goldie",
        type: "Goldfish",
        age: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chirpie",
        type: "Bird",
        age: "10",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Purrie",
        type: "Cat",
        age: "3",
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
    await queryInterface.bulkDelete("Pets", null, {});
  },
};
