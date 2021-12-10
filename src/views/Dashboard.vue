<template>
  <div>
    <Header/>

    <div class="main-super-heros">
      <div class="d-flex justify-content-center mb-5" v-for="hero in superHeros" :key="hero">  
        <div class="card tamaño-card">
          <img class="card-img-top" :src="hero.image.url" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">{{hero.name}}</h5>
            </div>
        <div class="dropdown">

          <b-dropdown id="dropdown-1" text="Powerstats" class="m-md-2">
            <b-dropdown-item>Combat : {{hero.powerstats.combat}} </b-dropdown-item>
            <b-dropdown-item>Durability: {{hero.powerstats.durability}}</b-dropdown-item>
            <b-dropdown-item>Intelligence {{hero.powerstats.intelligence}}</b-dropdown-item>
            <b-dropdown-item>Power: {{hero.powerstats.power}}</b-dropdown-item>
            <b-dropdown-item>Speed: {{hero.powerstats.speed}}</b-dropdown-item>
            <b-dropdown-item>Strength: {{hero.powerstats.strength}}</b-dropdown-item>
          </b-dropdown>
        </div>
          <div class="dropdown">

            <b-dropdown id="dropdown-1" text="Appearance" class="m-md-2">
              <b-dropdown-item>Eye-color: {{hero.appearance.eye-color}}</b-dropdown-item>
              <b-dropdown-item>Gender: {{hero.appearance.gender}}</b-dropdown-item>
              <b-dropdown-item>Hair-color {{hero.appearance.hair-color}}</b-dropdown-item>
              <b-dropdown-item>Height:
                <b-dropdown-item>In: {{hero.appearance.height[0]}}</b-dropdown-item>
                <b-dropdown-item>Cm: {{hero.appearance.height[1]}}</b-dropdown-item>
              </b-dropdown-item>
              <b-dropdown-item>Race: {{hero.appearance.race}}</b-dropdown-item>
              <b-dropdown-item>Wight: 
                <b-dropdown-item>Lb: {{hero.appearance.weight[0]}}</b-dropdown-item>
                <b-dropdown-item>Kg: {{hero.appearance.weight[1]}}</b-dropdown-item>
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </div>
    </div>

   <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import {mapActions} from 'vuex'

export default{
    name: "Dashboard",
    data(){
        return{
            superHeros : []
        }
    },
    components:{
        Header,
        Footer
    },
    mounted(){
        this.loadSuperHeros()
       // console.log(this.superHeros)
    },
    methods: {
        ...mapActions([
            'getAllHeros'
        ]),
        async loadSuperHeros(){
            const superHerosData = await this.getAllHeros()

            this.superHeros = superHerosData
     
        },
        async orderByCombat(){
          
        }
 
    }

}
</script>

<style scoped>
.main-super-heros{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-flow: wrap;

}
.tamaño-card{
  width: 45%;
}
</style>