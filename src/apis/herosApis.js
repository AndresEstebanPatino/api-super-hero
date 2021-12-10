
import  axios from "axios";
import { Host } from "./constants";

export default{
    async getSuperHero(id){
       const superHero=  await axios.get(`${Host}/${id}`)
        return superHero
    }

}
