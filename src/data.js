import axios from 'axios'
// var url="https://riafybackend.herokuapp.com/users";

 axios.defaults.withCredentials=true
export default class Data{
    static getNames(key)
{
    
    return (axios.get("https://riafybackend.herokuapp.com/users/names",{params:{key:key}},{withCredentials:true}))
    
  
    
    
     
}
static search(key){

    return (axios.get("https://riafybackend.herokuapp.com/users/search",{params:{key:key}},{withCredentials:true}))
}



static login(uname,pwd){
    
    return(axios.post("https://riafybackend.herokuapp.com/users/login",{uname,pwd},{withCredentials:true}))

}
}
