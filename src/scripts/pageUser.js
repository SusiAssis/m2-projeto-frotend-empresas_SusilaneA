import { userProfile , allEmployeesDepartment , updateInfoEmployee } from "./request.js"
import { renderInfoEmployeeLogout , renderListEmployeesDepartaments , renderModalEdit } from "./render.js"

async function authentication(){
    const verifica = localStorage.getItem('@Empresas:is_admin')
    const token = localStorage.getItem('@Empresas:token')
    
    if(verifica != 'false' ){

        console.log(verifica)
        window.location.replace('./pageAdmin.html')
    }

    if(!token){
        window.location.replace('../../index.html')
    }
}

async function renderPageUser(){
    
    
    const infoEmployee = await userProfile()
    
    renderInfoEmployeeLogout(infoEmployee)

    const allEmployees = await allEmployeesDepartment()
    
    renderListEmployeesDepartaments(allEmployees , infoEmployee)

    renderModalEdit()
    showEdit()
    editInfoEmployee()
 
 }
 renderPageUser()


function showEdit(){
    const edit = document.querySelector('.editar')
    const modalControler = document.querySelector('.modal_controler')

    edit.addEventListener('click',()=>{
        modalControler.showModal()
        closeModal()
    })
}

function closeModal(){
    const button = document.querySelector('.close')
    const modalControler = document.querySelector('.modal_controler')
    button.addEventListener('click', ()=>{
        modalControler.close()

    })
}


function editInfoEmployee(){
    const inputs = document.querySelectorAll('.input_edit')
    const button = document.querySelector('.button_editar')
    const modalControler = document.querySelector('.modal_controler')
    const newDados = {}
    
    
    button.addEventListener('click',async()=>{
        inputs.forEach(({name,value})=>{
           newDados[name] = value
        })

        await updateInfoEmployee(newDados)

        modalControler.close()
        renderPageUser()
    })
    

}

function logoutButton(){
    const bnt = document.querySelector('.logout')
    
    bnt.addEventListener('click', ()=>{
        setTimeout(()=>{
            localStorage.clear()
            window.location.replace('../../index.html')
        },2000)
    })
    
    }
logoutButton()


authentication()