import e from "express";
import explorer_router from "./routes/explorer_router.js";
import specie_router from "./routes/specie_router.js";
import expedition_router from "./routes/expedition_router.js";
import "dotenv/config";
import "./config/conn.js"

const app = e();

app.use(e.json());

app.use("/explorer", explorer_router);
app.use("/specie", specie_router);
app.use("/expedition", expedition_router);

app.listen(process.env.API_PORT, () => console.log(`Server running at ${process.env.API_PORT}`))