import permission from "./permission"
import type { App } from "vue"
const directives = [permission]
const install = (app:App) => {
    
    directives.map(directive =>{
        console.log(app,directive.name,directive.options)
        app.directive(directive.name, directive.options)
        console.log(app)
    })
}
export default install