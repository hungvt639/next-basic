import getInstanceAxios from "./request";
// import * as env from "../env";
// const baseDomain = process.env.REACT_APP_DOMAIN
const baseDomain = process.env.base_url;
const baseURL = `${baseDomain}/`;

export default function instanceAxios(isToken) {
    return getInstanceAxios(baseURL, isToken);
}
