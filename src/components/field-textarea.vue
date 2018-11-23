<template>
  <el-col :span="colWidth">
    <el-form-item :label="label" :props="name">
      <el-input v-model="value"
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}">
      </el-input>
    </el-form-item>
  </el-col>
</template>
<script>
  export default {
    name: 'FieldTextArea',
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
    }
  }
</script>
