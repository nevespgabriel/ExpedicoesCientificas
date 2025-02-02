import Specie from "../models/specie_model.js";

const store = async(req, res) => {
    try{
        const content = await Specie.create(req.body);
        res.status(201).json(content);
    } catch(error) {
        res.status(400).send(error.message);
    }
}

const index = async(req, res) => {
    try{
        const content = await Specie.find(req.query).exec();
        res.json(content);
    } catch(error){
        res.status(400).send(error.message);
    }
}

const show = async(req, res) => {
    try{
        const content = await Specie.findById(req.params.id).exec();
        res.json(content);
    } catch(error){
        res.status(400).send(error.message);
    }
}

const update = async(req, res) => {
    try{
        const content = await Specie.findByIdAndUpdate(req.params.id, req.body).exec();
        res.status(201).json(content);
    } catch(error){
        res.status(400).send(error.message);
    }
}

const destroy = async(req, res) => {
    try{
        await Specie.findByIdAndDelete(req.params.id).exec();
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