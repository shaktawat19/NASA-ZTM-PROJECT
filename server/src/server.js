const http = require("http");

const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);


// making sure that planets data load before server listens request.
(async () => {
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log("server running...");
  });
})();
