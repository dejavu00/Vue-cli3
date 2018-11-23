import Vue from 'vue'
import DialogCommon from '@/components/dialog-common.vue'

let createDialog = function (options) {
  let DialogComp = Vue.extend(DialogCommon)
  let vm = new DialogComp({
    el: document.createElement('div')
  })
  this.$el.appendChild(vm.$el)
}
export default createDialog
