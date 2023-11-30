import { baseURL } from "../../utils/env";


export async function getCoffees() {
    return fetch(baseURL+'coffees').then(res => res.json())
    .then(json => {
        console.log(json)
        if(json.length >0)
            return json
        throw[]
    })
    .catch(err => {
        console.log(err)
        throw err
    })
};