var express = require('express')
var app = express()
// 设置跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'access-token')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})
// 获取自定义字段
app.get('/getField', function (req, res) {
  res.json({
    'success': true,
    'msg': '查询成功',
    'rows': [{
      'tempId': null,
      'key': 'userName',
      'name': '姓名',
      'tempType': null,
      'type': 'STRING',
      'componentType': '1',
      'isShow': true,
      'isRequired': true,
      'editable': false,
      'isDefault': true,
      'statusChange': false,
      'eventKey': null,
      'eventShow': null,
      'status': '1',
      'remark': '',
      'candidateValue': null,
      'defaultValue': '',
      'sortNum': '1',
      'createTime': '2016-06-01 00: 00: 00',
      'isCheck': true,
      'required': true,
      'show': true,
      'default': true,
      'readonly': false,
      'componentTypeStr': '文本框',
      'defineType': '系统内置',
      'isRequiredStr': '必填'
    }, {
      'tempId': null,
      'key': 'loginName',
      'name': '登录账号',
      'tempType': null,
      'type': 'STRING',
      'componentType': '1',
      'isShow': true,
      'isRequired': true,
      'editable': false,
      'isDefault': true,
      'statusChange': false,
      'eventKey': null,
      'eventShow': null,
      'status': '1',
      'remark': '',
      'candidateValue': null,
      'defaultValue': '',
      'sortNum': '2',
      'createTime': '2016-06-01 00: 00: 00',
      'isCheck': true,
      'required': true,
      'show': true,
      'default': true,
      'readonly': false,
      'componentTypeStr': '文本框',
      'defineType': '系统内置',
      'isRequiredStr': '必填'
    }, {
      'tempId': null,
      'key': 'telPhone',
      'name': '手机',
      'tempType': null,
      'type': 'STRING',
      'componentType': '1',
      'isShow': true,
      'isRequired': false,
      'editable': false,
      'isDefault': true,
      'statusChange': false,
      'eventKey': null,
      'eventShow': null,
      'status': '1',
      'remark': '',
      'candidateValue': null,
      'defaultValue': '',
      'sortNum': '3',
      'createTime': '2016-06-01 00: 00: 00',
      'isCheck': true,
      'required': false,
      'show': true,
      'default': true,
      'readonly': false,
      'componentTypeStr': '文本框',
      'defineType': '系统内置',
      'isRequiredStr': '非必填'
    }, {
      'tempId': null,
      'key': 'nickName',
      'name': '昵称',
      'tempType': null,
      'type': 'STRING',
      'componentType': '1',
      'isShow': false,
      'isRequired': false,
      'editable': false,
      'isDefault': true,
      'statusChange': false,
      'eventKey': null,
      'eventShow': null,
      'status': '1',
      'remark': '',
      'candidateValue': null,
      'defaultValue': '',
      'sortNum': '4',
      'createTime': '2016-06-01 00: 00: 00',
      'isCheck': true,
      'required': false,
      'show': false,
      'default': true,
      'readonly': false,
      'componentTypeStr': '文本框',
      'defineType': '系统内置',
      'isRequiredStr': '非必填'
    }, {
      'tempId': null,
      'key': 'email',
      'name': '邮箱',
      'tempType': null,
      'type': 'STRING',
      'componentType': '1',
      'isShow': true,
      'isRequired': false,
      'editable': false,
      'isDefault': true,
      'statusChange': false,
      'eventKey': null,
      'eventShow': null,
      'status': '1',
      'remark': '',
      'candidateValue': null,
      'defaultValue': '',
      'sortNum': '5',
      'createTime': '2016-06-01 00: 00: 00',
      'isCheck': true,
      'required': false,
      'show': true,
      'default': true,
      'readonly': false,
      'componentTypeStr': '文本框',
      'defineType': '系统内置',
      'isRequiredStr': '非必填'
    }, {
      'tempId': null,
      'key': 'fixedPhone',
      'name': '座机',
      'tempType': null,
      'type': 'STRING',
      'componentType': '1',
      'isShow': false,
      'isRequired': false,
      'editable': false,
      'isDefault': true,
      'statusChange': false,
      'eventKey': null,
      'eventShow': null,
      'status': '1',
      'remark': '',
      'candidateValue': null,
      'defaultValue': '',
      'sortNum': '6',
      'createTime': '2016-06-01 00: 00: 00',
      'isCheck': true,
      'required': false,
      'show': false,
      'default': true,
      'readonly': false,
      'componentTypeStr': '文本框',
      'defineType': '系统内置',
      'isRequiredStr': '非必填'
    }, {
      'tempId': null,
      'key': 'serviceGroupName',
      'name': '归属组',
      'tempType': null,
      'type': 'STRING',
      'componentType': '1',
      'isShow': true,
      'isRequired': false,
      'editable': false,
      'isDefault': true,
      'statusChange': false,
      'eventKey': null,
      'eventShow': null,
      'status': '1',
      'remark': '',
      'candidateValue': null,
      'defaultValue': '',
      'sortNum': '7',
      'createTime': '2016-06-01 00: 00: 00',
      'isCheck': true,
      'required': false,
      'show': true,
      'default': true,
      'readonly': false,
      'componentTypeStr': '文本框',
      'defineType': '系统内置',
      'isRequiredStr': '非必填'
    }, {
      'tempId': null,
      'key': 'serviceName',
      'name': '归属人',
      'tempType': null,
      'type': 'STRING',
      'componentType': '1',
      'isShow': true,
      'isRequired': false,
      'editable': false,
      'isDefault': true,
      'statusChange': false,
      'eventKey': null,
      'eventShow': null,
      'status': '1',
      'remark': '',
      'candidateValue': null,
      'defaultValue': '',
      'sortNum': '8',
      'createTime': '2016-06-01 00: 00: 00',
      'isCheck': true,
      'required': false,
      'show': true,
      'default': true,
      'readonly': false,
      'componentTypeStr': '文本框',
      'defineType': '系统内置',
      'isRequiredStr': '非必填'
    }, {
      'tempId': null,
      'key': 'userDesc',
      'name': '备注信息',
      'tempType': null,
      'type': 'STRING',
      'componentType': '1',
      'isShow': true,
      'isRequired': false,
      'editable': false,
      'isDefault': true,
      'statusChange': false,
      'eventKey': null,
      'eventShow': null,
      'status': '1',
      'remark': '',
      'candidateValue': null,
      'defaultValue': '',
      'sortNum': '10',
      'createTime': '2016-06-01 00: 00: 00',
      'isCheck': true,
      'required': false,
      'show': true,
      'default': true,
      'readonly': false,
      'componentTypeStr': '文本框',
      'defineType': '系统内置',
      'isRequiredStr': '非必填'
    }, {
      'tempId': null,
      'key': 'remark',
      'name': '详细信息',
      'tempType': null,
      'type': 'STRING',
      'componentType': '1',
      'isShow': true,
      'isRequired': false,
      'editable': false,
      'isDefault': true,
      'statusChange': false,
      'eventKey': null,
      'eventShow': null,
      'status': '1',
      'remark': '',
      'candidateValue': null,
      'defaultValue': '',
      'sortNum': '11',
      'createTime': '2016-06-01 00: 00: 00',
      'isCheck': true,
      'required': false,
      'show': true,
      'default': true,
      'readonly': false,
      'componentTypeStr': '文本框',
      'defineType': '系统内置',
      'isRequiredStr': '非必填'
    }, {
      'tempId': null,
      'key': 'createTime',
      'name': '创建时间',
      'tempType': null,
      'type': 'STRING',
      'componentType': '1',
      'isShow': true,
      'isRequired': true,
      'editable': false,
      'isDefault': true,
      'statusChange': false,
      'eventKey': null,
      'eventShow': null,
      'status': '1',
      'remark': '',
      'candidateValue': null,
      'defaultValue': '',
      'sortNum': '14',
      'createTime': '2016-10-28 00: 00: 00',
      'isCheck': true,
      'required': true,
      'show': true,
      'default': true,
      'readonly': true,
      'componentTypeStr': '文本框',
      'defineType': '系统内置',
      'isRequiredStr': '必填'
    }, {
      'tempId': null,
      'key': 'updateTime',
      'name': '最近更新时间',
      'tempType': null,
      'type': 'STRING',
      'componentType': '1',
      'isShow': true,
      'isRequired': true,
      'editable': false,
      'isDefault': true,
      'statusChange': false,
      'eventKey': null,
      'eventShow': null,
      'status': '1',
      'remark': '',
      'candidateValue': null,
      'defaultValue': '',
      'sortNum': '15',
      'createTime': '2016-10-28 00: 00: 00',
      'isCheck': true,
      'required': true,
      'show': true,
      'default': true,
      'readonly': true,
      'componentTypeStr': '文本框',
      'defineType': '系统内置',
      'isRequiredStr': '必填'
    }, {
      'tempId': null,
      'key': 'latestCntTime',
      'name': '最近联络时间',
      'tempType': null,
      'type': 'STRING',
      'componentType': '1',
      'isShow': true,
      'isRequired': true,
      'editable': false,
      'isDefault': true,
      'statusChange': false,
      'eventKey': null,
      'eventShow': null,
      'status': '1',
      'remark': '',
      'candidateValue': null,
      'defaultValue': '',
      'sortNum': '16',
      'createTime': '2016-10-28 00: 00: 00',
      'isCheck': true,
      'required': true,
      'show': true,
      'default': true,
      'readonly': true,
      'componentTypeStr': '文本框',
      'defineType': '系统内置',
      'isRequiredStr': '必填'
    }, {
      'tempId': null,
      'key': 'field294',
      'name': '测试文本框',
      'tempType': null,
      'type': null,
      'componentType': '1',
      'isShow': true,
      'isRequired': false,
      'editable': false,
      'isDefault': false,
      'statusChange': false,
      'eventKey': null,
      'eventShow': null,
      'status': '1',
      'remark': '',
      'candidateValue': null,
      'defaultValue': null,
      'sortNum': '285',
      'createTime': '2018-03-12 10: 07: 24',
      'isCheck': false,
      'required': false,
      'show': true,
      'default': false,
      'readonly': false,
      'componentTypeStr': '文本框',
      'defineType': '用户自定义',
      'isRequiredStr': '非必填'
    }, {
      'tempId': null,
      'key': 'field298',
      'name': '企业编号',
      'tempType': null,
      'type': null,
      'componentType': '1',
      'isShow': true,
      'isRequired': false,
      'editable': false,
      'isDefault': false,
      'statusChange': false,
      'eventKey': null,
      'eventShow': null,
      'status': '1',
      'remark': '',
      'candidateValue': null,
      'defaultValue': null,
      'sortNum': '293',
      'createTime': '2018-03-13 17: 25: 35',
      'isCheck': false,
      'required': false,
      'show': true,
      'default': false,
      'readonly': false,
      'componentTypeStr': '文本框',
      'defineType': '用户自定义',
      'isRequiredStr': '非必填'
    }, {
      'tempId': null,
      'key': 'field285',
      'name': '程度',
      'tempType': null,
      'type': null,
      'componentType': '3',
      'isShow': true,
      'isRequired': false,
      'editable': false,
      'isDefault': false,
      'statusChange': false,
      'eventKey': null,
      'eventShow': null,
      'status': '1',
      'remark': '',
      'candidateValue': ['容易', '一般', '较麻烦', '超级麻烦'],
      'defaultValue': null,
      'sortNum': '294',
      'createTime': '2018-03-07 16: 43: 41',
      'isCheck': false,
      'required': false,
      'show': true,
      'default': false,
      'readonly': false,
      'componentTypeStr': '下拉菜单',
      'defineType': '用户自定义',
      'isRequiredStr': '非必填'
    }, {
      'tempId': null,
      'key': 'field295',
      'name': '测试文本区域',
      'tempType': null,
      'type': null,
      'componentType': '2',
      'isShow': true,
      'isRequired': false,
      'editable': false,
      'isDefault': false,
      'statusChange': false,
      'eventKey': null,
      'eventShow': null,
      'status': '1',
      'remark': '',
      'candidateValue': null,
      'defaultValue': null,
      'sortNum': '295',
      'createTime': '2018-03-12 10: 07: 38',
      'isCheck': false,
      'required': false,
      'show': true,
      'default': false,
      'readonly': false,
      'componentTypeStr': '文本区域',
      'defineType': '用户自定义',
      'isRequiredStr': '非必填'
    }, {
      'tempId': null,
      'key': 'field296',
      'name': '测试下拉菜单',
      'tempType': null,
      'type': null,
      'componentType': '3',
      'isShow': true,
      'isRequired': false,
      'editable': false,
      'isDefault': false,
      'statusChange': false,
      'eventKey': null,
      'eventShow': null,
      'status': '1',
      'remark': '',
      'candidateValue': ['1', '2', '00'],
      'defaultValue': null,
      'sortNum': '298',
      'createTime': '2018-03-12 10: 08: 09',
      'isCheck': false,
      'required': false,
      'show': true,
      'default': false,
      'readonly': false,
      'componentTypeStr': '下拉菜单',
      'defineType': '用户自定义',
      'isRequiredStr': '非必填'
    }, {
      'tempId': null,
      'key': 'field299',
      'name': '企业名称',
      'tempType': null,
      'type': null,
      'componentType': '1',
      'isShow': true,
      'isRequired': false,
      'editable': false,
      'isDefault': false,
      'statusChange': false,
      'eventKey': null,
      'eventShow': null,
      'status': '1',
      'remark': '',
      'candidateValue': [],
      'defaultValue': null,
      'sortNum': '299',
      'createTime': '2018-03-13 17: 25: 42',
      'isCheck': false,
      'required': false,
      'show': true,
      'default': false,
      'readonly': false,
      'componentTypeStr': '文本框',
      'defineType': '用户自定义',
      'isRequiredStr': '非必填'
    }, {
      'tempId': null,
      'key': 'field306',
      'name': '二号码',
      'tempType': null,
      'type': null,
      'componentType': '9',
      'isShow': true,
      'isRequired': false,
      'editable': false,
      'isDefault': false,
      'statusChange': false,
      'eventKey': null,
      'eventShow': null,
      'status': '1',
      'remark': '',
      'candidateValue': ['%5E%5Cd%7B7%2C8%7D%24%7C%5E%5Cd%7B11%2C13%7D%24'],
      'defaultValue': null,
      'sortNum': '306',
      'createTime': '2018-03-26 16: 25: 26',
      'isCheck': false,
      'required': false,
      'show': true,
      'default': false,
      'readonly': false,
      'componentTypeStr': '电话号',
      'defineType': '用户自定义',
      'isRequiredStr': '非必填'
    }, {
      'tempId': null,
      'key': 'field309',
      'name': '必填级联',
      'tempType': null,
      'type': null,
      'componentType': '12',
      'isShow': true,
      'isRequired': false,
      'editable': false,
      'isDefault': false,
      'statusChange': false,
      'eventKey': null,
      'eventShow': null,
      'status': '1',
      'remark': '',
      'candidateValue': [{
        'status': '1',
        'isDefault': false,
        'value': '1',
        'children': [{ 'status': '1', 'isDefault': false, 'value': '1.1', 'label': '1.1', 'key': '1.1' }],
        'label': '1',
        'key': '1'
      }, {
        'status': '1',
        'isDefault': false,
        'value': '2',
        'children': [{
          'status': '1',
          'isDefault': false,
          'value': '2.1',
          'children': [{ 'status': '1', 'isDefault': false, 'value': '2.2.1', 'label': '2.2.1', 'key': '2.2.1' }],
          'label': '2.1',
          'key': '2.1'
        }, { 'status': '1', 'isDefault': false, 'value': '2.3', 'label': '2.3', 'key': '2.3' }],
        'label': '2',
        'key': '2'
      }],
      'defaultValue': null,
      'sortNum': '309',
      'createTime': '2018-04-03 11: 45: 41',
      'isCheck': false,
      'required': false,
      'show': true,
      'default': false,
      'readonly': false,
      'componentTypeStr': '级联下拉菜单',
      'defineType': '用户自定义',
      'isRequiredStr': '非必填'
    }, {
      'tempId': null,
      'key': 'field330',
      'name': '演员',
      'tempType': null,
      'type': null,
      'componentType': '1',
      'isShow': true,
      'isRequired': false,
      'editable': false,
      'isDefault': false,
      'statusChange': false,
      'eventKey': null,
      'eventShow': null,
      'status': '1',
      'remark': '',
      'candidateValue': [''],
      'defaultValue': null,
      'sortNum': '330',
      'createTime': '2018-08-24 15: 01: 19',
      'isCheck': false,
      'required': false,
      'show': true,
      'default': false,
      'readonly': false,
      'componentTypeStr': '文本框',
      'defineType': '用户自定义',
      'isRequiredStr': '非必填'
    }, {
      'tempId': null,
      'key': 'field331',
      'name': '六六六',
      'tempType': null,
      'type': null,
      'componentType': '1',
      'isShow': true,
      'isRequired': false,
      'editable': false,
      'isDefault': false,
      'statusChange': false,
      'eventKey': null,
      'eventShow': null,
      'status': '1',
      'remark': '',
      'candidateValue': [''],
      'defaultValue': null,
      'sortNum': '331',
      'createTime': '2018-09-19 17: 40: 27',
      'isCheck': false,
      'required': false,
      'show': true,
      'default': false,
      'readonly': false,
      'componentTypeStr': '文本框',
      'defineType': '用户自定义',
      'isRequiredStr': '非必填'
    }],
    'total': 23,
    'errorCode': null,
    'message': '查询成功'
  })
})
app.get('/getFirst', function (req, res) {
  res.json({
    success: true,
    name: 'Second'
  })
})
app.get('/getSecond', function (req, res) {
  res.json({
    success: false,
    name: 'Third',
    msg: 'problem'
  })
})
app.get('/getThird', function (req, res) {
  res.json({
    success: true,
    name: 'Over'
  })
})

// 配置服务端口

var server = app.listen(5000, function () {
  var host = server.address().address

  var port = server.address().port

  console.log('Example app listening at http://', host, port)
})
