<template>
<div> 
<nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <a class="navbar-brand" href="#">Navbar</a>
  
  <div class="collapse navbar-collapse d-flex justify-content-end text-nowrap" id="navbarSupportedContent" >
   
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" v-model="buscar"  placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</div>
</template>