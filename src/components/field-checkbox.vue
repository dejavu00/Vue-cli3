<template>
  <el-col :span="24">
    <el-form-item :label="label" :props="name">
      <el-checkbox-group v-model="finalVal" @change="handleChange">
        <el-checkbox :label="item" v-for="item in options" :key="item"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
  </el-col>

</template>
<script>
  export default {
    name: 'FieldCheckBox',
    props:{
      options:{
        type: Array,
        required: true
      },

      label: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      value:{

      }
    },
    data() {
      return {
        finalVal:[]
      }
    },
    methods:{
      handleChange(val) {
        this.$emit('handle-input', this.name, val);
      }
    },
    watch:{
      value(){
        this.finalVal = this.value||[];
      }
    }
  }
</script>
<style>
  .el-checkbox + .el-checkbox{
    margin-left: 10px;
  }
  .el-checkbox-group{
    text-align: left;
  }
</style>
