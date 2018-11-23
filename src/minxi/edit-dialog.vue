<template>
    <el-dialog :title="title"
               width="60%"
               :visible="visible"
               :close-on-click-modal="false"
               :close-on-press-escape="false"
               @update:visible="changeVisible"
               @close="handleClose">
        <el-form label-width="114px"
                 ref="form"
                 :model="form">
            <el-row>
                <el-col v-for="fieldInfo in fieldInfoList" :span="12" :key="fieldInfo.key">
                    <el-form-item :label="fieldInfo.label" :prop="fieldInfo.key" :rules="fieldInfo.rules">
                        <!--输入框-->
                        <template v-if="fieldInfo.type === 'input'">
                            <el-input v-model.trim="form[fieldInfo.key]"
                                      size="small"
                                      :name="fieldInfo.key"
                                      :placeholder="fieldInfo.placeholder">
                            </el-input>
                        </template>
                        <!--经纬度坐标-->
                        <template v-else-if="fieldInfo.type === 'coordinate'">
                            <el-input v-model.trim="form[fieldInfo.key]"
                                      size="small"
                                      :name="fieldInfo.key"
                                      :placeholder="fieldInfo.placeholder"
                                      @click.native="openCoordinateSelector">
                            </el-input>
                        </template>
                        <!--日期-->
                        <template v-else-if="fieldInfo.type === 'datetime'">
                            <el-date-picker v-model="form[fieldInfo.key]"
                                            class="common__form-select"
                                            type="datetime"
                                            size="small"
                                            :name="fieldInfo.key"
                                            :placeholder="fieldInfo.placeholder"
                                            value-format="yyyy-MM-dd HH:mm:ss">
                            </el-date-picker>
                        </template>
                        <!--下拉框-->
                        <template v-else-if="fieldInfo.type === 'select'">
                            <el-select v-model="form[fieldInfo.key]"
                                       class="common__form-select"
                                       size="small"
                                       :name="fieldInfo.key"
                                       :placeholder="fieldInfo.placeholder">
                                <el-option v-for="option in fieldInfo.options" :key="option.value" :label="option.label" :value="option.value"></el-option>
                            </el-select>
                        </template>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <div slot="footer">
            <el-button size="small" @click="handleCancel">取消</el-button>
            <el-button type="primary" size="small" @click="submitForm">确认</el-button>
        </div>
    </el-dialog>
</template>

<script type="text/ecmascript-6">

    let deleteEptChildren = function(list){
        return list.map(l => {
            if(l.hasOwnProperty("children")){
                if(l.children && l.children.length === 0){
                    delete l.children;
                }
                else if(l.children){
                    l.children = deleteEptChildren(l.children);
                }
            }
            return l;
        });
    };

    let deepSearch = function(list,id){
        let node = list.find(l => l.id === id);
        if(node){
            return [node.id];
        }
        for(let l of list){
            console.log("for");
            if(l.children){
                console.log("for:children");

                let result = deepSearch(l.children,id);

                console.log("result:%s",result);

                if(result.length){
                    result.unshift(l.id);
                    return result;
                }
            }
        }
        return [];
    };

    /**
     * @desc 编辑dialog组件
     * @author Lesty
     * @code-date 2018.10.28
     **/
    export default{
        name: 'EditDialog',
        props: {
            title: {
                default: '添加'
            },
            // dialog是否可见
            visible: {
                type: Boolean,
                default: false
            },
            formData: {
                type: Object
            },
            // 字段信息列表
            fieldInfoList: {
                type: Array
            }
        },
        data: function() {
            return {
                form: {},
            };
        },
        watch: {
            visible: function (newVal) {
                // 当dialog展示时，将传进来的值赋给data数据
                if(newVal === true) {
                    this.form = Object.assign({}, this.formData);
                    // 移除表单校验结果
                    this.$nextTick().then(() => {
                        let $formEle = this.$refs.form;
                        if($formEle) {
                            $formEle.clearValidate();
                        }
                    });
                }
            }
        },
        methods: {
            // 当el-dialog改变自身props的visible时，将请求冒泡到父组件(sync修饰符)
            changeVisible: function (newVal) {
                this.$emit('update:visible', newVal);
            },
            // 处理取消
            handleCancel: function () {
                this.changeVisible(false);
            },
            // 处理关闭
            handleClose: function () {
                this.$emit('close');
            },
            // 处理经纬度坐标选择
            openCoordinateSelector() {
                let coordinate = null;

                if (this.form.latitude && this.form.longitude) {
                    coordinate = [this.form.longitude, this.form.latitude];
                }
                this.$addressSelector((isOk, data) => {
                    if (isOk === 'ok') {
                        this.form = Object.assign({}, this.form, {
                            longitude: data.coordinate[0],
                            latitude: data.coordinate[1]
                        });
                    }
                }, coordinate);
            },
            submitForm: function () {
                // 验证表单数据
                this.$refs.form.validate((valid) => {
                    // 不合法
                    if(!valid) {
                        return this.$message.warning({
                            showClose: true,
                            message: '表单内容未正确填写，请检查表单！'
                        });
                    }
                    let form = Object.assign({},this.form);

                    this.$emit('submit-form', Object.assign({}, form));
                });
            },

            /**
             * 清空表单
             */
            clearForm(){
                this.$refs.form.resetFields();
            }
        }
    }
</script>
<style lang="less">
    .el-input--small{
        height:40px;
    }
</style>
