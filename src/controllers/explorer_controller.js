import Explorer from "../models/explorer_model.js";
import Expedition from "../models/expedition_model.js";
import Specie from "../models/specie_model.js";

const store = async(req, res) => {
    try{
        const content = await Explorer.create({
            name: req.body.name,
            fieldOfStudy: req.body.fieldOfStudy,
            expeditionsParticipated: req.body.expeditionsParticipated
        });
        res.status(201).json(content);
    } catch(error) {
        res.status(400).send(error.message);
    }
}

const index = async(req, res) => {
    try{
        const content = await Explorer.find(req.query).exec();
        res.json(content);
    } catch(error){
        res.status(400).send(error.message);
    }
}

const show = async(req, res) => {
    try{
        const expeditions = await Expedition.find({ participants: req.params.id }).populate("species").exec();
        const species = [];
        expeditions.forEach((expedition) => {
            expedition.speciesFound.forEach((specie) => {
                species.push(specie); 
            });
        });
        const content = {
            explorer: await Explorer.findById(req.params.id).exec(),
            speciesFound: species
        };
        console.log(content);
        res.json(content);
    } catch(error){
        res.status(400).send(error.message);
    }
}

const update = async(req, res) => {
    try{
        const content = await Explorer.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            fieldOfStudy: req.body.fieldOfStudy,
            expeditionsParticipated: req.body.expeditionsParticipated
        }).exec();
        res.status(201).json(content);
    } catch(error){
        res.status(400).send(error.message);
    }
}

const destroy = async(req, res) => {
    try{
        await Explorer.findByIdAndDelete(req.params.id).exec();
    } catch(error){
        res.status(400).send(error.message);
    }
}

export default {
    store,
    index,
    show,
    update,
    destroy
}