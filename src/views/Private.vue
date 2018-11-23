<template>
  <h1>
    private
  </h1>
</template>
<script>
  import store from '../store'
  export default {
    name:'Private',
    created(){
    },
    mounted(){
    },
    beforeRouteEnter(to,from,next){
      console.log(store.state.userInfo);
      const { isAuth } = JSON.parse(store.state.userInfo);
      if(to.meta.requireAuth){
        if(isAuth){
          next()
        }else{
          next({
            path:'/about',

          })
        }
      }
      next()
    },

    data() {
      return{

      }
    }
  }
</script>
<style lang="scss">

</style>
