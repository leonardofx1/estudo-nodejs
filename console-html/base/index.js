import { MethodNotImplemented } from "../error/methodNotImplemented.js";


export class BaseService {


    render(){
        throw new MethodNotImplemented()
    }
}