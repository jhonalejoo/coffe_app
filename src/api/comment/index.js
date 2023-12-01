import { baseURL } from "../../utils/env";


export async function getComments() {
    return fetch(baseURL + 'comments').then(res => res.json())
        .then(json => {
            if (json.length > 0)
                return json
            throw []
        })
        .catch(err => {
            throw err
        })
};
export async function createComments(data) {
    console.log(JSON.stringify(data),'ddddddd')
    return fetch(baseURL + 'comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            if (json?.success)
                return json
            throw []
        })
        .catch(err => {
            throw err
        })
};