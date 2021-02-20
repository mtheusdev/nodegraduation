<template> 
    <div :class="{'cliente': !isPremium, 'cliente-premium': isPremium}">
        <h1>{{cliente.nome}}</h1>
        <hr>
        <p>{{cliente.email}}</p>
        <hr>
        <p>{{cliente.numero}}</p>
        <hr>
        <p v-if="cliente.idade != undefined">{{cliente.idade}}</p>
        <p v-else>O usuário nao tem idade</p>
        <button @click="mudarCor($event)">Mudar cor!</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            isPremium: false
        };
    },
    props:{
        cliente: Object

    },
    methods:{
        mudarCor: function($event){
            this.isPremium = !this.isPremium
            console.log($event)
        }
    }
}
</script>

<style scoped>
    .cliente{
        background-color: rgb(168, 143, 111);
        max-width: 600px;
        height: auto;
        padding: 1%;
        margin-top:2%
    }
    .cliente-premium{
        background-color: rgb(155, 155, 155);
        max-width: 600px;
        height: auto;
        padding: 1%;
        margin-top:2%
    }
</style>