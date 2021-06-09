import axios from 'axios'
axios.defaults.withCredentials=true
export default class Data{
    static getNames(key)
{
    
    return (axios.get("http://localhost:4000/users/names",{params:{key:key}},{withCredentials:true}))
    
  
    
    
     
}
static search(key){

    return (axios.get("http://localhost:4000/users/search",{params:{key:key}},{withCredentials:true}))
}



static login(uname,pwd){
    
    return axios.post("http://localhost:4000/users/login",{uname,pwd},{withCredentials:true})
}
}
