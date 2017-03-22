 export function Login(username){
   
     return{
         type:'Login',
         username
        
     }
 }
 export function Addmore(mobno,email){
     alert()
     return{
         type:'Addmore',
         mobno,
         email
     }
 }
 export function Transfer(acno,amt){
return{
    type:'Transfer',
    acno,
    amt
}
 }
 export function logout(){
     return{
         type:'logout'
     }
 }