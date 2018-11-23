<template>
  <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
    <el-form :model="form">
     <el-col>
       <el-form-item label="活动名称" :label-width="formLabelWidth">
         <el-input v-model="form.name" autocomplete="off"></el-input>
       </el-form-item>
     </el-col>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
  export default {
    name: 'CommonDialog',
    data() {
      return {
        form:{
          name:'新建dialog'
        },
        formLabelWidth: 'left',
        dialogFormVisible: false
      }
    }
  }
</script>
