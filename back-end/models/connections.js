import mongoose from "mongoose";
import setSchemas from "../schemas";

function connection() {
  const password = process.env.MONGO_PASSWORD;
  console.log({ password });

  const dbURI = `mongodb+srv://neonLearner:${password}@cluster0.nay66.mongodb.net/mission-mars`;
  mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return setSchemas(mongoose);
}

const schemaModels = connection();

export default schemaModels;