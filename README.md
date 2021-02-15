# ECommerce Backend

  ## Description

  [![License: ISC](https://img.shields.io/badge/license-ISC-0d0042)](https://opensource.org/licenses/ISC)

  This is a simple backend for an ecommerce site. It is designed to connect a product database with RESTful API routes using MySQL2 and Sequelize.

You can view a demo of available functionality [here](https://drive.google.com/file/d/1GDTmYBXHrjHbyCPfyn5ocqPdAeQfYSHK/view).
  

  ## Table of Contents

  * [User Story and Acceptance Criteria](user-story-and-acceptance-criteria)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  *[Visuals](#visuals)

  ## User Story and Acceptance Criteria

  ### User Story
  ```
  AS A manager at an internet retail company 
  I WANT a back end for my e-commerce website that uses the latest technologies
  SO THAT my company can compete with other e-commerce companies
  ```


  ### Acceptance Criteria
      ```
    WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
    THEN I am able to connect to a database using Sequelize
    ```
    ```
    WHEN I enter schema and seed commands
    THEN a development database is created and is seeded with test data
    ```
    ```
    WHEN I enter the command to invoke the application
    THEN my server is started and the Sequelize models are synced to the MySQL database
    ```
    ```
    WHEN I open API GET routes in Insomnia Core for categories, products, or tags
    THEN the data for each of these routes is displayed in a formatted JSON
    ```
    ```
    WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
    THEN I am able to successfully create, update, and delete data in my database
    Mock-Up
    ```
  ## Installation

  This application runs using Node.js and Express.js. Visit Visit [the Node.js website](http://www.nodejs.org/download/) for download and installation instructions. After you've downloaded and installed Node, clone this repository and install dependencies (including Express) using 
  ```$ npm install```. After installing dependencies, create a `.env` file in the root directory and add `DB_NAME`, `DB_USER`, and `DB_PW`, setting each to the appropriate values for your mysql instance. Don't forget to add this file to your .`.gitignore`.

  ## Usage

  Initialize the application from the root directory by using 'npm start

  ## Contributions

  Contributions to this application are governed by [The Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)

  ## Tests

  There are currently no tests available for this application.

  ## Questions

  This project was developed by [quaylas](https://github.com/quaylas). 
  Questions may be directed to [quayla@cxadvisors.com](mailto:quayla@cxadvisors.com).

  ## License

  This application is licensed under the [ISC License](https://opensource.org/licenses/ISC).

  ## Visuals
  ---
## Visuals

You can view a demo of this application [here](https://drive.google.com/file/d/1GDTmYBXHrjHbyCPfyn5ocqPdAeQfYSHK/view).
  

