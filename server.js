const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App running on port ${PORT}!`));
});


// Credits: Parts of this codebase may reference the lesson materials of the University of Toronto coding Bootcamp
// Tutoring and assisting team from the University of Toronto have provided guidance when blockers appeared.