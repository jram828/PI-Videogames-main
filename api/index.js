const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const PORT = 3001;

//server.use("/rickandmorty", router);
const { conn } = require("./DB_connection");

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log("Server en puerto: " + PORT); // eslint-disable-line no-console
  });
});