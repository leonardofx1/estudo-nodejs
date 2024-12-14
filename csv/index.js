
import {readFile,writeFile} from 'fs'



     
class ReadCsv {
  

 convertCsvToJson(headers,dataRows) {

        const json =  dataRows.map((row => {
        
            return headers.reduce((acc,header,index)=> {
                
                     acc[header] = row[index]
                return acc
            }, {})
    
        }))
  
        return json

    }
   async readAndParseCsv  (){
    
   const data = await  new Promise((resolve,rejects) => {

        readFile('data.csv','utf-8', (error,data) => {
            if(error)  rejects(error)
            else resolve(data)
        })
    })
    if(data) {
        const {headers,dataRows }= this.extractHeaderRows(data)
        const json = this.convertCsvToJson(headers,dataRows)
        return json
    }

    }
        
        
    
    extractHeaderRows (dataCsv){
        const[headerLine,...rows] = dataCsv.split('\r\n')
        const headers =  headerLine.split(',')
        const dataRows = rows.map((column) => column.split(','))

       
        return {headers,dataRows}
    }}

const readCsv = new ReadCsv()

class CreateCsv{
   

formatCsvData (dataArrayToCsv,quantityHeaders = 3) {
    dataArrayToCsv.length === 0 && ''
    let csv =''
    
    let c = 0
    let quantity = quantityHeaders


         while(quantity <= dataArrayToCsv.length) {
            csv += dataArrayToCsv.slice(c,  quantity).concat('\n')
            c += 3 
            quantity+=3 

         }
        
        
        return csv
    
}
    writeCsv (filePath, csvData) {
     console.log(filePath, csvData,'dentro ')
      try {
        writeFile(filePath,csvData,()=> {})
        console.log(`Csv file written successfully to ${filePath}`)
      } catch (error) {
        console.error(`error writing file ${filePath}`,error)
        throw error
      }
        
    }
}


(() =>  {

    const create = new CreateCsv()
    const dataArrayToCsv = ['name', 'age','sold', 'leo',25,2000,'marcos',35,50000]
    const csvFile =  create.formatCsvData(dataArrayToCsv)
    console.log(csvFile)
    const save = create.writeCsv('output.csv', csvFile)
    
})()

