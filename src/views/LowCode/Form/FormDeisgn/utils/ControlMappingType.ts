import type { Obj } from "@/model"
import { Select,Input,InputNumber,RadioGroup,Switch,CheckboxGroup,DatePicker} from 'ant-design-vue';
import type { Component } from "vue";
import MaterialGrid from "../components/MaterialGrid.vue";
import MaterialCard from "../components/MaterialCard.vue";

export default <Obj<Component>>{
    input:Input,
    select:Select,
    radio:RadioGroup,
    switch:Switch,
    number:InputNumber,
    checkbox:CheckboxGroup,
    grid:MaterialGrid,
    card:MaterialCard,
    date:DatePicker
}