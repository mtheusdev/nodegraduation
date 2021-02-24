<template>
    <div><br>
        <h2>Registro de Usuário</h2>
        <hr>
        <div class="columns is-mobile is-centered">
        <div class="column is-half">
            <div v-if="erro != undefined">
                <div class="notification is-danger">
                <p>{{erro}}</p>
            </div>
        </div>
        <br>
        <label>Nome</label>
        <input type="text" placeholder="Nome de Usuario" class="input" v-model="name">
           <br> <br><label>Email</label>
            <input type="email" placeholder="email@email.com" class="input" v-model="email">
            <br><br><label>Senha</label>
            <input type="password" placeholder="******" class="input" v-model="password">
              <br><br><button class="button is-success" @click="register">Cadastrar</button>
        </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            name: '',
            password:'',
            email:'',
            erro: undefined,
        }
    },
    methods:{
        register(){
            axios.post("http://localhost:8686/user",{
                name: this.name,
                password: this.password,
                email: this.email
            }).then(res => {
                console.log(res)
                this.$router.push({name: 'Home'}) // redirecionando para home quando registrado
            }).catch(err =>{
                var msgErro = err.response.data.err;
                this.erro = msgErro
            })
        }
    }
    
}
</script>

<style scoped>

</style>