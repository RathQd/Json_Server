import jsonServer from 'json-server';
import dotenv from 'dotenv';

dotenv.config();
// Create server
const server = jsonServer.create();
const router = jsonServer.router('jobs.json');  // JSON database file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Set the port dynamically for Render
const PORT = process.env.PORT || 8081;
server.listen(PORT, () => {
  console.log(`✅ JSON Server is running on http://localhost:${PORT}`);
});
