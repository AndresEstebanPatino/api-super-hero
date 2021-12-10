import {heroApi} from "../apis/index"



const state= {}
const getters={}
const mutations = {}

const actions = {
    async getAllHeros(){
        console.log("hola")
        let superheros = []
        for(let i=1; i < 20 ; i++){
            await heroApi.getSuperHero(i)
      .then ( res=>{
          
        superheros.push(res.data)
       
      })
      }
      return superheros.sort()
    }
}


export default {
    state, getters, mutations, actions
}
