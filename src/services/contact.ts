
import * as Models from '../models'

export const getContact = async () => {
    const list = await Models.getContact();
    return list
}
export const createContact = async (name:string) => {
    await Models.createContact(name)
} 

export const delContact = async (name:string) => {
    await Models.delContact(name)
}