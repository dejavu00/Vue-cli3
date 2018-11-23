// 正则对照表
const REG_MAP = {
  fixedPhone: '^\\d{7,12}$',
  telephone: '^\\d{7,8}$|^\\d{11,13}$',
  number: '^-?\\d+$',
  float: '^-?\\d+\\.\\d+$'
}
// 字段类型对照表
const FIELD_TYPE_MAP = {
  '1': { name: '文本框', desc: 'text', pattern: '' }, // 文本框
  '2': { name: '文本区域', desc: 'textArea', pattern: '' }, // 文本区域
  '3': { name: '下拉菜单', desc: 'select', pattern: '' }, // 下拉菜单
  '4': { name: '复选框', desc: 'checkbox', pattern: '' }, // 复选框
  '5': { name: '单选框', desc: 'radio', pattern: '' }, // 单选框
  '6': { name: '数字', desc: 'number', pattern: REG_MAP.number }, // 数字
  '7': { name: '小数', desc: 'float', pattern: REG_MAP.float }, // 小数
  '8': { name: '正则匹配字段', desc: 'regexp', pattern: '' }, // 正则匹配字段
  '9': { name: '电话号码', desc: 'telephone', pattern: REG_MAP.telephone }, // 电话号
  '10': { name: '时间输入框', desc: 'datetime', pattern: '' }, // 时间输入框
  '11': { name: '省市区', desc: 'pca', pattern: '' }, // 省市区
  '12': { name: '级联菜单', desc: 'cascader', pattern: '' } // 级联菜单
}
export default {
  REG_MAP,
  FIELD_TYPE_MAP
}
