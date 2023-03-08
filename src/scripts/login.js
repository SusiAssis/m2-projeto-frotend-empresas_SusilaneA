
import { loginRequest , checkUserType} from "./request.js"

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
            return alert('Por favor preencha os campos e tente novamente')
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

            console.log(validate)
            
            if(validate == false){
                console.log(validate)
                setTimeout(()=>{
                    window.location.replace('./pageUser.html')
                },2000)
            }else{
               setTimeout(()=>{
                  window.location.replace('./pageAdmin.html')
               },2000)
                
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