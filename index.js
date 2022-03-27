const dotenv = require("dotenv");
const app = require("./src/app");

dotenv.config();

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`API Gateway - ${PORT}`);
});
