<template>
    <div class="department-list__root">
        <query-panel @clear="resetForm" @query="query">
            <el-form ref="queryForm" slot="queryForm" :model="queryForm"   label-width="100px">
                <el-row>
                    <el-col :span="8">
                        <el-form-item label="单位编号" prop="unitId">
                            <el-input v-model.trim="queryForm['unitId']" size="small"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </query-panel>
        <div class="qn-table-page__table">
            <el-row style="text-align:right;padding: 10px;">
                <el-button type="primary" @click="handleAddDepartment" size="small" >
                    添加
                </el-button>
            </el-row>
            <el-row>
                <div class="tree-head tree-row">
                    <span class="cell" v-for="name in titleGroup" :class="{'cell-longer':name==='相对路径'}" :key="name">{{name}}</span>
                </div>
                <el-tree
                        ref="tree"
                        :data="tableData"
                        default-expand-all
                        @node-click="getCheckedNodes"
                        :expand-on-click-node="false">
                    <div class="tree-row" slot-scope="{ node, data }" >
                        <span class="cell" :class="{'cell-longer':key==='actionUrl','cell-center':key==='sortWeight'}"  v-for="key in propsGroup" :key="key" :title="data[key]">{{ data[key]}}</span>
                    </div>
                </el-tree>
            </el-row>
            <el-row>
                <div  class="table-content__pagination">
                    <el-pagination
                            @current-change="handleCurrentChange"
                            :current-page.sync="queryForm.page"
                            :page-sizes="[10, 20, 30, 40, 50]"
                            layout="total,sizes,prev, pager, next, jumper"
                            :total="tableTotal">
                    </el-pagination>
                </div>
            </el-row>
            <el-row  class="table-content__bottom" :class="{'show':toolbarShow}">
                <el-col :span="6">
                    <el-button size="small" @click="cancelSelect">取消</el-button>
                </el-col>
                <el-col :span="18" class="text-right">
                    <el-button type="primary" @click="handleEditDepartment"   size="small">
                        修改
                    </el-button>
                    <el-button type="danger" @click="handleDelete({id: selectRow.id})" size="small">
                        删除
                    </el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import departmentApi from '@service/department.js';
    import QueryPanel from '@libComponents/query-panel.vue';
    import Extends from "@/extends/extends.js";
    import editDialogMixinFactory from "@/lib-mixin/edit-dialog-mixin.js";

    let fieldInfoList = [
        {key: 'name', label: '部门名称', type: 'input', required: true, placeholder: '请输入部门名称'},
        {key: 'level', label: '部门级别', type: 'input', required: true, placeholder: '请输入部门级别'},
        {key: 'parentId', label: '上级部门编号', type: 'input', required: true, placeholder: '请输入上级部门编号'},
        {key: 'sortWeight', label: '排序', type: 'input', required: true, placeholder: '请输入排序'},
        {key: 'leaderId', label: '部门领导Id', type: 'input', required: true, placeholder: '请输入部门领导Id'},
        {key: 'leaderName', label: '部门领导姓名', type: 'input', required: true, placeholder: '请输入部门领导姓名'},
    ];

    // 默认dialog表单数据
    let dialogFormDefault = {
        name: '',
        level: '',
        parentId: '',
        sortWeight: '',
        leaderId: '',
        leaderName: ''
    };

    export default {
        name: 'PlatformManage',
        data() {
            return {
                labelPosition: 'left',
                queryForm: {
                    unitId:'',
                    page: 1,
                    rows: 10
                },
                tableData: [],
                tableTotal: 0,
                loading: false,
                modifyStatus: false,
                selectRow: null,
                dialogStatus: false,
                propsGroup:["name", "unitId", "level", "parentId", "sortWeight", "leaderId", "leaderName"],
                titleGroup:["部门名称", "单位编号", "部门级别", "上级部门编号", "排序", "部门领导Id", "部门领导姓名"]}
        },
        extends: Extends,
        mixins: [editDialogMixinFactory({
            fieldList: fieldInfoList,
            dialogFormDefault,
            addService: departmentApi.addDepartment,
            deleteService: departmentApi.deleteDepartment,
            updateService: departmentApi.updateDepartment
        })],
        mounted() {
            this.entQuery();
        },
        methods: {
            handleAddDepartment() {
                const params = Object.assign({}, dialogFormDefault);
                if (this.selectRow) {
                    params.parentId = this.selectRow.id;
                }
                this.handleAdd(params);
            },

            handleEditDepartment(){
                Object.keys(this.selectRow).forEach(key=>{
                    if(dialogFormDefault.hasOwnProperty(key)){
                        dialogFormDefault[key] = this.selectRow[key];
                    }
                })

                const params = Object.assign({}, dialogFormDefault);
                if (this.selectRow) {
                    params.id = this.selectRow.id;
                }
                this.handleEdit(params);
            },

            getCheckedNodes(data) {
                this.selectRow = data;
            },
            query(){
                this.queryForm.page = 1;
                this.entQuery();
            },
            refreshData(status) {
                if(status) {
                    this.entQuery();
                }
            },
            entQuery(){
                this.loading = true;
                this._entQuery().then(rows => {
                    this.tableData = rows;
                }).catch(err => {
                    this.$message.error(err.message);
                }).finally(() => {
                    this.loading = false;
                })
            },
            _entQuery(){
                return departmentApi.queryDepartment(this.queryForm).then(res => {
                    let data = res.data;
                    if(!data.success) {
                        return Promise.reject(new Error(data.message));
                    }
                    this.tableTotal = data.total;
                    return data.rows || [];
                })
            },
            resetForm() {
                this.$refs['queryForm'].resetFields();
            },
            handleSelectionChange(rows) {
                this.selectRow = rows;
            },
            handleCurrentChange() {
                this.entQuery();
            },
            cancelSelect(){
                this.selectRow = null;
            }
        },
        computed: {
            toolbarShow(){
                if(!this.selectRow){
                    return false;
                }else{
                    return true;
                }
            },
            currentRow(){
                return this.selectRow?this.selectRow:{};
            }
        },
        components: {
            QueryPanel
        }

    }
</script>
<style scoped="">
    .table-content__bottom{
        background: #fff;
        font-size: 14px;
        box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.15);
        position: fixed;
        bottom: -70px;
        left: 300px;
        right: 0;
        height: 60px;
        z-index: 1900;
        border-top: 1px solid #f2f2f2;
        -webkit-transition: all ease 0.4s;
        -moz-transition: all ease 0.4s;
        -o-transition: all ease 0.4s;
        transition: all ease 0.4s;
        padding: 12px 15px 0 15px;
    }
    .table-content__bottom.show {
        bottom: 0;
    }
    .table-content__pagination{
        text-align: right;
    }
</style>
<style scoped>
    .tree-row{
        width: 100%;
    }

    .cell {
        display: inline-block;
        width: calc(100%/7);
        height: 42px;
        line-height: 42px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .cell.cell-longer{
        width: 240px;
    }

    .tree-head{
        padding: 10px 10px 0 48px;
    }
    .tree-head .cell{
        font-weight: bold;
        height: 30px;
    }
    .table-content__bottom{
        background: #fff;
        font-size: 14px;
        box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.15);
        position: fixed;
        bottom: -70px;
        left: 300px;
        right: 0;
        height: 60px;
        z-index: 1900;
        border-top: 1px solid #f2f2f2;
        -webkit-transition: all ease 0.4s;
        -moz-transition: all ease 0.4s;
        -o-transition: all ease 0.4s;
        transition: all ease 0.4s;
        padding: 12px 15px 0 15px;
    }
    .table-content__bottom.show {
        bottom: 0;
    }
    .department-list__root /deep/ .el-tree-node__content{
        height: 42px;
        border-bottom: 1px solid gainsboro;
    }
</style>
