/**
 * 添加编辑表格混合
 * Author zhouzy
 * Date   2018/11/12
 */

import EditDialog from "@libComponents/edit-dialog.vue";
import Vue from 'vue';
import {changeParams, setRules} from '@/lib-js/service.js';

/**
 * 返回编辑、添加弹出框的混合
 * @param options = {fieldList,addService,deleteService,updateService}
 */
let mixinFactory = function(options){
    let fieldList = setRules(options.fieldList);
    let $vm;

    return {
        mounted: function () {
            let EditDialogComp = Vue.extend(EditDialog);
            $vm = new EditDialogComp({
                el: document.createElement('div'),
                propsData: {
                    title: this.dialogTitle,
                    formData: this.dialogForm,
                    fieldInfoList: fieldList,
                    visible: this.editDialogVisible
                }
            });

            $vm.$on("submit-form",this.handleSubmit);
            $vm.$on("update:visible",v => {
                $vm.$props.visible = v;
            });

            this.$el.appendChild($vm.$el);
        },
        data: function(){
            return {
                operateType: 'add',
                dialogForm: {},
                editDialogVisible: false,

                fieldList: [],
            }
        },
        methods: {
            //添加信息
            doAdd(params) {
                let loading = this.$loading({
                    target: $vm.$el.querySelector('.el-dialog'),
                    text: '正在添加数据···'
                });
                options.addService(params).then(rows => {
                    // 关闭窗口
                    $vm.$props.visible = false;

                    this.$message.success({
                        showClose: true,
                        message: '添加成功！'
                    });

                    this.query();
                }).catch(error => {
                    this.$message.error({
                        showClose: true,
                        message: error.message
                    });
                }).finally(() => {
                    // 隐藏loading
                    loading.close();
                });
            },

            // 编辑数据
            doUpdate(params) {
                let loading = this.$loading({
                    target: $vm.$el.querySelector('.el-dialog'),
                    text: '正在更新数据···'
                });
                options.updateService(params).then(rows => {
                    $vm.$props.visible = false;
                    this.$message.success({
                        showClose: true,
                        message: '编辑成功！'
                    });
                    this.query();
                }).catch(error => {
                    this.$message.error({
                        showClose: true,
                        message: error.message
                    });
                }).finally(() => {
                    loading.close();
                });
            },

            handleDelete(rowData){
                this.$confirm('确定要删除该数据吗？删除后数据不可恢复！', '注意', {
                    closeOnClickModal: false,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.loading = true;
                    options.deleteService(rowData).then(() => {
                        this.$message.success({
                            showClose: true,
                            message: '删除成功！'
                        });
                        this.query();
                    }).catch(error => {
                        this.loading = false;
                        this.$message.error({
                            showClose: true,
                            message: error.message
                        });
                    });
                }).catch(() => {
                    // do nothing
                });
            },

            handleAdd(rowData){
                this.operateType = 'add';
                $vm.$props.visible = true;
                if (rowData) {
                    $vm.$props.formData = rowData;
                }
            },

            handleEdit(rowData){
                this.operateType = 'edit';
                $vm.$props.visible = true;
                $vm.$props.formData = rowData;
            },

            handleSubmit(formData){
                let keyMap = options.keyMap ? options.keyMap : {};
                changeParams(formData, keyMap);
                if(this.operateType === 'add') {
                    let params = Object.assign({}, formData);
                    this.doAdd(params);
                } else {
                    let params = Object.assign({}, formData);
                    this.doUpdate(params);
                }
            }
        },
        computed: {
            dialogTitle() {
                return this.operateType === 'add' ? '添加信息' : '编辑信息';
            }
        }
    };
};

export default mixinFactory;
