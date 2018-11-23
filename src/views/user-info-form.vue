<template>
  <el-form ref="form" :model="form" label-width="100px">
    <el-form-item label="活动名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <custom-field-list
      :colWidth="6"
      label="input组件"
      component-type="1"
      name="field_0"
      @handleInput="handleInput">

    </custom-field-list>
    <custom-field-list
      :colWidth="6"
      label="下拉菜单组件"
      component-type="3"
      name="field_1"
      :options="[{
        label:'first',
        value:'第1条信息'
      },{
        label:'second',
        value:'第2条信息'
      },{
        label:'third',
        value:'第3条信息'
      }]"
      @handleInput="handleInput">

    </custom-field-list>
    <custom-field-list
      :options="['北京','东京','香港','上海']"
      :colWidth="6"
      label="checkbox组件"
      component-type="4"
      name="field_3"
      @handleInput="handleInput">
    </custom-field-list>
  </el-form>
</template>
<script>
  import CustomFieldList from './../components/custom-field-list.vue'
  export default {
    data() {
      return {
        title: 'userInfo',
        third:'wo shi h3',
        nu:1,
        form:{}
      }
    },
    mounted() {
      setTimeout(()=>{
        this.nu = 1
      },2000)
    },
    methods: {
      handleInput(name,val){
        let param = Object.assign({},{[name]:val});
        console.log(param);
      }
    },
    components: {
      CustomFieldList
    }
  }
</script>
