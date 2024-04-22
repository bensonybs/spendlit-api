# SpendLit API
Backend API of SpendLit app. \
Using Node.js & Express.js as backend server \
[Passport.js](https://www.passportjs.org) for user authentication \
MySQL as database, Swagger for API document \
Deploy on [GCP](https://spendlit-api-trww6pqemq-de.a.run.app)
## Try the APIs
- [Demo](https://spendlit-api-trww6pqemq-de.a.run.app/): Test the APIs on [Postman](https://www.postman.com/) or [Swagger](https://swagger.io/), check the API document in below.
- [API Document](https://spendlit-api-trww6pqemq-de.a.run.app/api-docs-v1)
- [ERD](https://dbdiagram.io/d/63ecfdc1296d97641d81360d/?utm_source=dbdiagram_embed&utm_medium=bottom_open)
## Features
- User: register, login, profile edition.
- Account: manage personal account for record.
- Record: add expense and income record.
## Run the APIs as local server
### Prerequisites
- Node.js@18.17.0, MySQL and MySQL Workbench(optional)
- Git
- Code edittor like VS Code (optional)
### Install and run
- Open your terminal
  cmd, PowerShell, etc.
- Clone from GitHub
  ```
  git clone https://github.com/bensonybs/spendlitAPI.git
  ```
- Switch to the directory
  ```
  cd spendlitAPI
  ```
- Install dependencies
  ```
  npm install
  ```
- Create .env file and set environment variables \
  Check [.env.example](.env.example) for more details.
- Create new database on MySQL
  Use MySQL Workbench or other tools to connect the database.
  Run the SQL command in below:
  ```
  CREATE DATABASE spendlit;
  ```
- Set database arguments
  Modify [config.json](config/config.json) with your own MySQL username and password
  ```
  "development": {
      "username": "<your username>",
      "password": "<your password>",
      "database": "ac_twitter_workspace",
      "host": "127.0.0.1",
      "dialect": "mysql"
  }
  ```
- Build table and seed data \
  Run the command in terminal:
  ```
  npx sequelize db:migrate
  npx sequelize db:seed:all
  ```
- Run the server
  ```
  npm run start
  ```
- Check the API server on http://localhost:3000