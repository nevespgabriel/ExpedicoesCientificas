import mongoose from "mongoose";

(async () => {
    try{
        mongoose.connect(process.env.URI + process.env.DB);
        console.log("Conectado com sucesso.");
    } catch(error){
        console.log(error);
    }
})();

