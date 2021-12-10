<template>
    <div>
   <Header/>

  <div class="d-flex justify-content-center mb-5">
<div class="card">
  <img class="card-img-top" src="@/assets/logo.png" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Nombre</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">inteligencia</li>
    <li class="list-group-item">fuerza</li>
    <li class="list-group-item">velocidad</li>
    <li class="list-group-item">durabilidad</li>
    <li class="list-group-item">poder</li>
    <li class="list-group-item">combate</li>
    <li class="list-group-item">genero</li>
    <li class="list-group-item">raza</li>
    <li class="list-group-item">alto</li>
    <li class="list-group-item">ancho</li>
    <li class="list-group-item">color de ojos</li>
    <li class="list-group-item">color de cabello</li>

    
  </ul>
</div>
  </div>
   <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';

export default{
    name: "Dashboard",
    data(){
        return{
            ListaHeroes :null,
            pagina: 1
        }
    },
    components:{
        Header,
        Footer
    },
    mounted:function(){
    let superheros = []
        for(let i=1; i < 780 ; i++){
          axios.get(`https://superheroapi.com/api/4840207122665423/${i}` + this.pagina)
    .then ( res=>{
        
      superheros.push(res.data)
    })
    }
     console.log(superheros)
    }
}
</script>

<style scoped>

</style>