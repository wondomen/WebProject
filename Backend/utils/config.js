import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const URI =
  process.env.NODE_ENV === "test"
    ? process.env.MONGO_URI_TEST
    : process.env.MONGO_URI;

export { PORT, URI };