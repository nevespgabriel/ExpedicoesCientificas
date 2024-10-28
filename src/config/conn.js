import mongoose from "mongoose";

(async () => {
    try{
        mongoose.connect(process.env.URI);
        console.log("Conectado com sucesso.");
    } catch(error){
        console.log(error);
    }
})();

