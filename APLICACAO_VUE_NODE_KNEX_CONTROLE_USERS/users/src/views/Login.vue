<template>
    <div><br>
        <h2>Login</h2>
        <hr>
        <div class="columns is-mobile is-centered">
        <div class="column is-half">
            <div v-if="erro != undefined">
                <div class="notification is-danger">
                <p>{{erro}}</p>
            </div>
        </div>
            <br><label>Email</label>
            <input type="email" placeholder="email@email.com" class="input" v-model="email">
            <br><br><label>Senha</label>
            <input type="password" placeholder="******" class="input" v-model="password">
              <br><br><button class="button is-success" @click="login">Logar</button>
        </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            password:'',
            email:'',
            erro: undefined,
        }
    },
    methods:{
        login(){
            axios.post("http://localhost:8686/login",{
                password: this.password,
                email: this.email
            }).then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.token)
                this.$router.push({name: 'Home'})
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