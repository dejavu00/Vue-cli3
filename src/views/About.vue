<template>
  <div class="about">
    <h1>{{text}}</h1>
    <button @click="text ='登录了'">
      登录
    </button>
  </div>
</template>
<script>
  export default {
    name:'About',
    data() {
      return{
        text:'未登录'
      }
    },
    watch:{
      text(val){
        if(val === '登录了'){
          this.$store.dispatch('saveInfo',{ isAuth: true ,name: 'Dejavu'});
          this.$router.push('/private')
        }
      }
    }
  }
</script>
