<template>
  <div>
    <input type="text" name="" id="" placeholder="lalala">
    <h3>{{parame}}</h3>
  </div>
</template>

<script>
export default {
    created(){
        console.log(this.$route.params.id);
        this.parame = this.$route.params.id
    },
    data()
    {
        return{
            parame: "Nada"
        }        
    }
}
</script>