import jsonServer from 'json-server';

const PORT = 8888;

const server = jsonServer.create();

// add default middlewares, incl. public static assets provider
// TODO alternatively use express.static and customize cache and headers
// See https://expressjs.com/en/resources/middleware/serve-static.html
server.use(jsonServer.defaults({readonly: true}));

// add static JSON database
// server.use(jsonServer.router('db.json'));

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
