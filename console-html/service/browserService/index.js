

import { data } from "../../data/data.js";
import { BaseService } from "../../base/index.js";


export default  class BrowserService extends BaseService {
   
    render () {
        const headers = Object.keys(...data)
        const thHeaders = headers.map((header) => `<th>${header}</th>`).join()
        let trBody = ''
        const td = data.map((item,index) => {
           const res = headers.map((header) => `<td>${item[header]}</td>`).join()
       
            trBody += `<tr> ${res}</tr>`

      
        })
        const html = `<table> 
        <table>
   <thead>
       <tr>
   ${thHeaders}
       </tr>
   </thead>
   <tbody>
   ${trBody}
   </tbody>
</table>

      </table>`
     document.body.innerHTML = html;
      
    }
}