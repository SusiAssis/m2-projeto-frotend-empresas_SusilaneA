import { updateUserRequest } from "./requestAdmin.js"
/*
export function renderModalDepartment(array){
    

    const departments = JSON.parse(localStorage.getItem('@Empresas:AllDepartments'))
    
    departments.forEach(department=>{
        if(department.id == id){
        const title = document.createElement('h2')
        title.innerText = department.name


    
        }
    })
}

function createCardDepartment(department){
    
    const div_contanier = document.createElement('div')
    const div_text = document.createElement('div')
    const description = document.createElement('h3')
    const companie = document.createElement('p')
    
    div_contanier.classList.add('contanier_descript')
    description.innerText = department.description
    companie.innerText= department.companies.name

    div_text.append(description,companie)
    div_contanier.appendChild(div_text)

    return div_contanier
}

function createCardDepartment(department){
    
    const div_contanier = document.createElement('div')
    const div_text = document.createElement('div')
    const description = document.createElement('h3')
    const companie = document.createElement('p')
    
    div_contanier.classList.add('contanier_descript')
    description.innerText = department.description
    companie.innerText= department.companies.name

    div_text.append(description,companie)
    div_contanier.appendChild(div_text)

    return div_contanier
}

*/

function renderModalEditUser(id){
    const users = JSON.parse(localStorage.getItem('@Empresas:AllUsers'))
    const contanierModal = document.querySelector('.modal_contanier')
    console.log(contanierModal)

    

    users.forEach(user=>{
    
        
    if(user.uuid == id){
    
    contanierModal.innerHTML = '' 
    createCardEditUser(user)
            
    }
    })
}



function createCardEditUser(user){
    const contanier_modal = document.querySelector('.modal_contanier')
    
    const title = document.createElement('h2')
    const buttonClose = document.createElement('img')
    const selectModo = document.createElement('select')
    const home_office = document.createElement('option')
    const hibrido = document.createElement('option')
    const presencial = document.createElement('option')

    const selectNivel = document.createElement('select')
    const estagio = document.createElement('option')
    const junior = document.createElement('option')
    const pleno = document.createElement('option')
    const senior = document.createElement('option')

    const buttonEditar = document.createElement('button')

    title.innerText = "Editar Usuário"
    buttonClose.src = "/src/assets/img/Vector Close.png"
    buttonClose.classList.add('bnt_Close')

    selectModo.classList.add('select_modo')
    home_office.innerText = 'home office'
    home_office.name = 'home office'
    home_office.value = 'home office'

    hibrido.innerText = 'hibrido'
    hibrido.name = 'hibrido'
    hibrido.value = 'hibrido'

    presencial.innerText = 'presencial'
    presencial.name = 'presencial'
    presencial.value = 'presencial'

    selectModo.append(home_office,hibrido,presencial)

    selectNivel.classList.add('select_nivel')
    estagio.innerText = 'estágio'
    estagio.name = 'estágio'
    estagio.value = 'estágio'

    junior.innerText = 'júnior'
    junior.name = 'júnior'
    junior.value = 'júnior'

    pleno.innerText = 'pleno'
    pleno.name = 'pleno'
    pleno.value = 'pleno'

    senior.innerText = 'sênior'
    pleno.name = 'sênior'
    pleno.value = 'sênior'
    
    selectNivel.append(estagio,junior,pleno,senior)

    buttonEditar.innerText = 'Editar'
    buttonEditar.classList.add('bnt_Editar')
    buttonEditar.id = user.uuid


    contanier_modal.append(title,buttonClose,selectModo,selectNivel,buttonEditar)

return contanier_modal
}

export function showModalEditUser(){
    const modalControler = document.querySelector('.modal_controler')
    const acessarPubicacao = document.querySelectorAll('.editar_user')
    
    acessarPubicacao.forEach(bnt=>{
        
        bnt.addEventListener('click',()=>{
            
            renderModalEditUser(bnt.id)
            modalControler.showModal()
            closeModal()
            createBodyEditUser()
        })
    })
}


function closeModal(){
    const button = document.querySelector('.bnt_Close')
    const modalControler = document.querySelector('.modal_controler')
    button.addEventListener('click', ()=>{
        modalControler.close()

    })
}


export function createBodyEditUser(){
    const selectModo = document.querySelector('.select_modo')
    const selectNivel = document.querySelector('.select_nivel') 
    const button = document.querySelector('.bnt_Editar')
    const modalControler = document.querySelector('.modal_controler')
    const id = button.id
    const bodyUser = {}

    button.addEventListener('click',async(event)=>{
        
        bodyUser['kind_of_work']= selectModo.value
        bodyUser['professional_level']= selectNivel.value


    modalControler.close()
    await updateUserRequest(id,bodyUser)

    })
}

/*
function deleteUser(){ 
    const button = document.querySelector('.delete')
    const modalControler = document.querySelector('.modal_controler')
    const id = button.id

    button.addEventListener('click',async(event)=>{
        
        
    modalControler.close()
    //await updateUserRequest(id,bodyUser)

    })


}*/