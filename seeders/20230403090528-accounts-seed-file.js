'use strict'
const { faker } = require('@faker-js/faker')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const DEFAULT_ACCOUNTS_EACH_TYPE = 1
    const accountTypesId = await queryInterface.sequelize.query(
      'SELECT id FROM AccountTypes;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    ) // 取出accounttypes的所有id

    const usersId = await queryInterface.sequelize.query(
      'SELECT id FROM Users;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    ) // 取出Users的所有id

    const accounts = []
    usersId.forEach(user => {
      accountTypesId.forEach(accountTypeId => {
        accounts.push(
          ...Array.from({ length: DEFAULT_ACCOUNTS_EACH_TYPE }, () => ({
            userId: user.id,
            name: faker.finance.accountName(),
            initialAmount: faker.datatype.number({ precision: 0.01 }),
            description: faker.lorem.words(9),
            accountTypeId: accountTypeId.id,
            isDeleted: false,
            createdAt: new Date(),
            updatedAt: new Date(),
          }))
        )
      })
    })
    await queryInterface.bulkInsert('Accounts', accounts, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Accounts', null, {})
  },
}
