
import { loginRequest , checkUserType} from "./request.js"
import { toast } from "./toast.js"

const green = 'var(--sucess100)'
const red = 'var(--alert100)'

function userLogin(){
    const inputs = document.querySelectorAll('.login_input')
    const button = document.querySelector('.button_login')
    const bodyLogin = {}
    let count = 0

    button.addEventListener('click',async(event)=>{
        event.preventDefault()
        
        inputs.forEach(({name,value})=>{
            if(value == ''){
                count++
            }

            bodyLogin[name] = value
        })

        if(count != 0){
            return toast('Por favor preencha todos os campos e tente novamente', red)
        }else{
            
            const token = await loginRequest(bodyLogin)
            const validate_user = await checkUserType(token)
           if(validate_user){ authorization()}
        }
    })
   
}
userLogin()

function authorization(){

    const validate = JSON.parse(localStorage.getItem('@Empresas:is_admin'))

            
            
            if(validate == false){
                
                setTimeout(()=>{
                    window.location.replace('./pageUser.html')
                },3000)
            }else{
               setTimeout(()=>{
                  window.location.replace('./pageAdmin.html')
               },3000)
                
            }
}


function registerBack(){
    const buttons = document.querySelectorAll('.button_cadastro')
        
    buttons.forEach(button=>{
        button.addEventListener('click',(event)=>{
            event.preventDefault()
            window.location.replace('./register.html')
        })
    })

}
registerBack()


function openMenu(){
    const menu = document.querySelector('.menu_vector')
    const contanierButtons = document.querySelector('.contanier_buttons')
    const closeHidden = document.querySelector('.close_hidden')
    
    
    menu.addEventListener('click',(event)=>{
    

    contanierButtons.classList.toggle("hidden")
    })

    closeHidden.addEventListener('click',()=>{
    
    contanierButtons.classList.toggle("hidden")
    })

}
openMenu()


function goHome(){

    const bntHome = document.querySelector('.bnt_Home')

    bntHome.addEventListener('click',()=>{
        window.location.replace('../../index.html')
    })

}
goHome()