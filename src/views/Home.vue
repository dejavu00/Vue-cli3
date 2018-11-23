<template>
  <div class="home">
      <button @click="init">{{loading?'正在提交...':'提交'}}</button>
      <button @click="test1">test</button>
  </div>
</template>

<script>
// @ is an alias to /src
let fieldInfoList = [
  {key: 'name', label: '部门名称', type: 'input', required: true, placeholder: '请输入部门名称'},
  {key: 'level', label: '部门级别', type: 'input', required: true, placeholder: '请输入部门级别'},
  {key: 'parentId', label: '上级部门编号', type: 'input', required: true, placeholder: '请输入上级部门编号'},
  {key: 'sortWeight', label: '排序', type: 'input', required: true, placeholder: '请输入排序'},
  {key: 'leaderId', label: '部门领导Id', type: 'input', required: true, placeholder: '请输入部门领导Id'},
  {key: 'leaderName', label: '部门领导姓名', type: 'input', required: true, placeholder: '请输入部门领导姓名'},
];
import DialogJs from '../lib-js/dialog'
export default {
  name: 'home',
  mixin:[DialogJs({
    fieldList:fieldInfoList
  })],
  mounted(){

  },
  data(){

    return{
      loading: false,
      temp:'init'
    }
  },
  methods:{
    async test1(){
//      console.log(1+''+this.temp);
//      await this.getData('First').then(res=>{
//        this.temp = res.data.name;
//      })
//      console.log(2+''+this.temp);

      await this.getSecond(this.temp).then(res=>{
        this.temp = res.data.name;
      }).catch(err=>{
        console.log(err);
      })
//      console.log('3'+this.temp);
//
//      await this.getData(this.temp).then(res=>{
//        this.temp = res.data.name;
//      })

      console.log('4'+this.temp)
    },
    getData(data){
      return this.axios.get(`http://localhost:5000/get${data}`)
    },
    test(){
      this.axios.all([this.getFirst(),this.getSecond()]).then(this.axios.spread(function (acct, perms) {
        console.log(acct);
        console.log(perms);
      })).catch(err=>{
        console.log('err:',err);
      })
    },
    init(){
      this.loading = true;
      Promise.all([this.getFirst(),this.getSecond(),this.getThird()]).then(res=>{
        console.log(res);
        let catchArr = res.find(item =>{
          return item.data.success === false;
        })||[];
        if([catchArr].length>0){
          console.log(catchArr.data.msg);
        }else{
          console.log('完毕');
        }
      }).catch(err=>{
        console.log(1);
        console.log(err);
      }).finally(()=>{
        this.loading = false;
      })
    },
    getFirst(){
     return this.axios.get('http://localhost:5000/getFirst')
    },
    getSecond(){
      return new Promise((resolve,reject)=>{
        resolve('sdfd')
      })
    },
    getThird(){
      return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(1000);
        },1000)
      })
//      return this.axios.get('http://localhost:5000/getThird')
    }
  },
  components: {
    HelloWorld
  }
}
</script>
