import permission from "./permission"
import type { App } from "vue"
import { copy } from 'gaius-utils'
const directives = [permission,copy]
const install = (app:App) => {
    
    directives.map(directive =>{
        app.directive(directive.name, directive.options)
    })
}
export default install