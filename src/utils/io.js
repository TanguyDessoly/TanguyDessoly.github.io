
import config from '../config';
import superagent from 'superagent';

export default async function restIO ({ method = "get", payload, endpoint } = {}) {
    let url = `${config.api.url}/${endpoint}`;
    let res = null;
    try {
        switch (method) {
            case "get":
                res = await superagent.get(url);
                break;
            case "post":
                res = await superagent.post(url).send(payload);
                break;
            case "put":
                res = await superagent.put(url).send(payload);
                break;
            case "delete":
                res = await superagent.delete(url);
                break;
            default:
                throw new Error("Invalid method");
        }
        return res.body
    } catch (err) {
        console.log(err)
        return {error: err};
    }
}