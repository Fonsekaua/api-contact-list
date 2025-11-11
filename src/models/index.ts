import { readFile, writeFile } from "fs/promises";
const dataSource = './data/list/index.txt';

export const getContact = async () => {
    let list: string[] = [];
    try {
        const data = await readFile(dataSource, { encoding: 'utf8' });

        list = data.split('\n');
    } catch (err) {

        console.error('Erro ao ler o arquivo:', err);
    }
    return list ;
}
export const createContact = async (name:string) => {
        const list = await getContact()
        list.push(name)
        await writeFile(dataSource, list.join('\n'))
} 

export const delContact = async (name:string) => {
       const list = await getContact()
        const newList = list.filter(item => (item.toLowerCase() !== name.toLowerCase()))
    
        await writeFile(dataSource,newList.join('\n'));
    

}