<template>
    <div><br>
        <h2>Ediçãp de Usuário</h2>
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
            <br><br><button class="button is-success" @click="update">Editar</button>
        </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'

export default {
    created(){
        var req = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }
        axios.get("http://localhost:8686/user/"+ this.$route.params.id, req).then(res=>{
            this.name = res.data.name
            this.email = res.data.email
            this.id = res.data.id
            console.log(res)
        }).catch(err => {
            console.log(err)
            this.$router.push({name: 'Users'})
        })
         // pegando o id que vem da rota e verificando se user existe
    },
    data(){
        return{
            name: '',
            email:'',
            id: -1,
            erro: undefined,
        }
    },
    methods:{
        update(){
            var req = {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            }
            axios.put("http://localhost:8686/user",{
                name: this.name,
                email: this.email,
                id: this.id
            }, req).then(res => {
                console.log(res)
                this.$router.push({name: 'Users'}) // redirecionando para home quando registrado
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