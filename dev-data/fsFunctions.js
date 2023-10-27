import fs from 'fs'


export  class FsFunctions{

    static async  readFile(path){
       const  strinData = fs.readFileSync(path,{encoding:"utf-8"})
       return JSON.parse(strinData) 
    }

    static async writeJSONFile(path,data){
       return  fs.writeFileSync(path,JSON.stringify(data,0,2))
    }

}
