
import { BaseService } from "../../base/index.js";
import { data } from "../../data/data.js";


export default  class ConsoleService extends BaseService {
   
    render () {
       
      console.table( data)
    }
}