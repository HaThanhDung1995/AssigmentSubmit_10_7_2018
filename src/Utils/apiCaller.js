import axios from 'axios';
import * as Config from './../Constants/Config';
export default function callApi(endpoint,method='GET',body){
    return axios({
        method:method,
        url:`${Config.API_URL}/${endpoint}`,
        data:body
    }).catch(ree=>{
        console.log(ree);
    });
}