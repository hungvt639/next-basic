import getInstanceAxios from "./request";
import * as env from "../env";
// const baseDomain = process.env.REACT_APP_DOMAIN
const baseDomain = env.URL;
const baseURL = `${baseDomain}/`;

export default function instanceAxios(isToken) {
    return getInstanceAxios(baseURL, isToken);
}
