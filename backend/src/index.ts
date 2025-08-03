import app from "./app";
import { connectToDatabase } from "./dbConnection";

//connections and listeneres
const PORT = process.env.PORT || 4000;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log("Server is running and Database connected successfully")
    );
  })
  .catch((err) => console.log(err));
