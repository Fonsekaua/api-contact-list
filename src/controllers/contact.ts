import e, { RequestHandler } from "express";
import { createContact, delContact, getContact } from "../services/contact";

export const getContactsController:RequestHandler =  async (req,res) => {
        const list = await getContact(); 
         res.json({contatos: list})   
}

export const createContactController:RequestHandler =  async (req,res) => {
    const {name} = req.body ?? {}
    if(!name || name.length <2){
        res.json({ERROR: "Nome precisa ter 2 ou mais caracteres"})
        return;
    }
    await createContact(name)
    res.json({contato:name})
}

export const deleteContactController:RequestHandler = async (req,res) => {
        const {name} = req.query ?? {}
            const list = await getContact()
            let listName = list.includes(name as string)
        if(!name){
            res.json({ERROR: "É necessario adicionar um nome!!"})
            return;
        }
        if(!listName){
            res.json({ERROR: "Nome não presente na lista de contatos!!"})
            return; 
        }
        await delContact(name as string);
        res.json({contato:name})
}