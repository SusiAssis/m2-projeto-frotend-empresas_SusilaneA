import { newUserRequest } from "./request.js"
import { toast } from "./toast.js"

const green = 'var(--sucess100)'
const red = 'var(--alert100)'

function userRegister(){
    const inputs = document.querySelectorAll('.cadastro_input')
    const button = document.querySelector('.bnt_cadastre-se')
    const select = document.querySelector('.select')
    const registerBody = {}
    let count = 0

    button.addEventListener('click', async(event)=>{
        event.preventDefault()


        inputs.forEach(({name,value})=>{
            if(value == ''){
                count++
            }

            registerBody[name] = value
          })
        
        const nivel = select.value
        registerBody['professional_level'] = nivel

        localStorage.setItem('@Empresas:username', JSON.stringify(registerBody.username))

        if(count != 0){
            return toast('Por favor preencha todos os campos necessários para realizar o cadastro', red)
        }else{
            
            const newUser = await newUserRequest(registerBody)
            setTimeout(()=>{
                window.location.replace('./login.html')
            },3000)
        }
    })

    
    
}
userRegister()


function homeBack(){
    const buttons = document.querySelectorAll('.bnt_Home')
    

    buttons.forEach(button=>{
        button.addEventListener('click',(event)=>{
            event.preventDefault()
            window.location.replace('../../index.html')
        })
    })

}
homeBack()



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



function goLoginHome(){
    const bntLogin = document.querySelector('.bnt_login')
    const bntHome = document.querySelector('.bnt_home')
    

    bntLogin.addEventListener('click',()=>{
        window.location.replace('./login.html')
    })

    bntHome.addEventListener('click',()=>{
        window.location.replace('../../index.html')
    })

}
goLoginHome()
