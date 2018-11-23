<script>
  import FieldInput from './field-input.vue'
  import FieldTextArea from './field-textarea.vue'
  import FieldSelect from './field-select.vue'
  import FieldCheckBox from './field-checkbox.vue'
  import Config from '../lib-js/config'
  export default {
    props: {
      colWidth: {
        type: Number,
        default: 8
      },
      componentType: {
        type: String,
        required: true
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
      },
      options:{
        type: Array,
        default(){
          return [0]
       }
      },
      level: {
        type: Number,
        default:1
      }
    },
    mounted(){
     this.renderElement();
    },
    data() {
      return {
        FieldName:''
      }
    },
    methods:{
      renderElement(){
        switch(this.componentType)
        {
          case '1':
            this.FieldName = 'field-input';
            break;
          case '2':
            this.FieldName = 'field-text-area';
            break;
          case '3':
            this.FieldName = 'field-select';
            break;
          default:
            this.FieldName = 'field-check-box';
        }
      },
      handleInput(name,val){
        this.$emit('handleInput',name,val)
      },
      handleChange(name,val){
        this.$emit('handleChange',name,val)
      }

    },
    components: {
      FieldInput,
      FieldTextArea,
      FieldSelect,
      FieldCheckBox
    },
    render(createElement){
//      return createElement('div',
//        [
//          [1,2,3].map(item=>{
//            return createElement('h'+item,item);
//          })
//        ]
//      )
//      if(this.componentType === '4' && !this.$props.value){
//        this.$props.value = [];
//      }
      return createElement(this.FieldName,{
        props: this.$props,
        on: {
          'handle-input': this.handleInput,
          'handle-change': this.handleChange,
        },
      })
    }
  }
</script>
