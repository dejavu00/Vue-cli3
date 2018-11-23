<template>
  <el-col :span="colWidth">
    <el-form-item :label="label" :props="name">
      <el-select v-model="finalVal" placeholder="请选择" @change="handleChange">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
  </el-col>

</template>
<script>
  export default {
    name: 'FieldInput',
    props:{
      options:{
        type: Array,
        required: true
      },
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
      handleChange(val) {
        this.finalVal = val;
        this.$emit('handleInput', this.name, val);
      }
    },
    watch:{
      value(){
        this.finalVal = this.value;
      }
    }
  }
</script>

