<template>
  <div id="app">
    <h3>Cadastro: </h3>
    <input type="text" placeholder="nome" v-model="nomeField"><br>
    <input type="email" placeholder="email" v-model="emailField">
    <button @click="cadastrarUsuario">Cadastrar</button>
  <div v-for="(cliente,index) in clientes" :key="index"> 
     <Cliente :cliente="cliente"/>
  </div>
  </div>
</template>

<script>

import Cliente from './components/Cliente.vue'

export default {
  name: 'App',
  data() {
    return{
      nomeField:"",
      emailField:"",

      clientes: [
        {
          nome: "Matheus",
          email: "matheus@gmail.com",
          idade: "22",
          numero:"14"
        },
        {
          nome: "Matheus2",
          email: "matheusgmail",
          idade: "10",
          numero:"13"
        },
        {
          nome: "Matheus2sad",
          email: "matheusgmailsadas",
          idade: "102",
          numero:"12"
        },
      ] 
    }
  },
  components: {
    Cliente
  },
  methods:{
    cadastrarUsuario: function(){
      if(this.nomeField == "" || this.nomeField == " "){
        
      }
      this.clientes.push({
          nome:this.nomeField,
          email:this.emailField,
          
      }),
      this.nomeField = "",
      this.emailField = ""
    }
  }
}
</script>

<style>

</style>
