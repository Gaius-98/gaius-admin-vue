
const formDefault ={
    formItemProp:{
        label:'',
        name:'',
        required:false,
    },
    
}
const inputDefault = {
    ...formDefault,
    controlProp:{
        allowClear:true,
        bordered:true,
        disabled:false,
        maxlength:null,
        size:'middle'
    },
    type:'input',
    id:''
}
const selectDefault = {
    ...formDefault,
    controlProp:{
        allowClear:true,
        bordered:true,
        disabled:false,
        mode:null,
        size:'middle',
        virtual:true
    },
    type:'select',
    id:''
}

const switchDefault = {
    ...formDefault,
    controlProp:{
        disabled:false,
        size:'middle',
    },
    type:'switch',
    id:''
}

const radioDefault = {
    ...formDefault,
    controlProp:{
        disabled:false,
        size:'middle',
        buttonStyle:'solid',
        optionType:'button'
    },
    type:'radio',
    id:''
}
const checkboxDefault= {
    ...formDefault,
    controlProp:{
        disabled:false,
    },
    type:'checkbox',
    id:''
}
const dateDefault = {
    ...formDefault,
    controlProp:{
        allowClear:false,
        bordered:true,
        disabled:false,
        format:'YYYY-MM-DD',
        mode:'',
        valueFormat:'YYYY-MM-DD',
        size:'middle',
        picker:''
    },
    type:'date',
    id:''
}
const numberDefalt = {
    ...formDefault,
    controlProp:{
        disabled:false,
        size:'middle',
        bordered:true,
        controls:true,
        max:null,
        min:null,
        precision:null,
        step:1
    },
    type:'number',
    id:''
}


const gridDefault = {
    type:'grid',
    controlProp:{
        gutter:0,
        colNumber:2,
        children:[]
    },
    id:''
}
const cardDefault = {
    type:'card',
    controlProp:{
        title:'',
        bordered:true,
        hoverable:false,
        children:[]
    },
    id:''
}


const controlDefault:any[] = [
    inputDefault,
    switchDefault,
    selectDefault,
    radioDefault,
    checkboxDefault,
    gridDefault,
    cardDefault,
    dateDefault,
    numberDefalt
]



export default controlDefault