<template>
  <el-col :span="colWidth">
    <el-form-item :label="label" :props="name">
      <el-input v-model="finalVal" @input.native="handleChange"></el-input>
    </el-form-item>
  </el-col>
</template>
<script>
  export default {
    name: 'FieldInput',
    props:{
      colWidth: {
        type: Number,
        default: 8
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
        type: String
      }
    },
    data() {
      return {
        finalVal:''
      }
    },
    methods:{
      handleChange(e){
        this.finalVal = e.target.value;
        this.$emit('handle-input', this.name, this.finalVal);
      }
    },
    watch:{
      value(){
       this.finalVal = this.value;
      }
    }

  }
</script>
