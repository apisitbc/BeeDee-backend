import { app } from "./express";

async function init() {
  app.listen(3000);
  console.log(`Listening on port 3000`);
}

init();
