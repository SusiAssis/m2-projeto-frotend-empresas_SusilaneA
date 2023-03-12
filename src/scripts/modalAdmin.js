
import { updateUserRequest , deleteUserRequest , usersWithoutDepartmentRequest , listAllUsersRequest , editDepartmentRequest } from "./requestAdmin.js"

import { allCompaniesRequest } from "./request.js"


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
    const editUser = document.querySelectorAll('.editar_user')
    
    editUser.forEach(bnt=>{
        
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
    const modalControlerVisualizar = document.querySelector('.modal_controlerVisualizar')
    button.addEventListener('click', ()=>{
        
        modalControler.close()
        modalControlerVisualizar.close()

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


export function showModalDeleteUser(){
    const modalControler = document.querySelector('.modal_controler')
    const deleteUser = document.querySelectorAll('.delete')
    
    deleteUser.forEach(bnt=>{
        
        bnt.addEventListener('click',()=>{
            
            
            renderDeleteUser(bnt.id)
            modalControler.showModal()
            modalDeleteUser(bnt.id)
            closeModal()
            
        })
    })
}



function renderDeleteUser(id){
    const users = JSON.parse(localStorage.getItem('@Empresas:AllUsers'))
    const contanierModal = document.querySelector('.modal_contanier')
    console.log(contanierModal)

    

    users.forEach(user=>{
    
        
    if(user.uuid == id){
    
    contanierModal.innerHTML = '' 

    const card = createModalDeleteUser(user)
    contanierModal.appendChild(card)
            
    }
    })
}


function createModalDeleteUser(user){
    const buttonClose = document.createElement('img')
    const contanierAviso = document.createElement('div')
    const titleAviso = document.createElement('h2')
    const button = document.createElement('button')

    buttonClose.src = "/src/assets/img/Vector Close.png"
    buttonClose.classList.add('bnt_Close')

    contanierAviso.classList.add('contanier_Aviso')
    titleAviso.innerText = 'Realmente deseja remover o usuário '+`${user.username}`
    
    button.innerText = 'Deletar'
    button.classList.add('button_Delete')


    contanierAviso.append(buttonClose,titleAviso,button)

return contanierAviso

}


function modalDeleteUser(id){ 
    const buttonDelete = document.querySelector('.button_Delete')
    const modalControler = document.querySelector('.modal_contanier')

    console.log(buttonDelete)
    

    buttonDelete.addEventListener('click',async(event)=>{
    console.log(id)  
   
    modalControler.close()
    
    await deleteUserRequest(id,bodyUser)
   })
}


export function showModalVisualizar(){
    const ver = document.querySelectorAll('.visualizar')
    console.log(ver)

    const contanier_controler = document.querySelector('.modal_controlerVisualizar')

    ver.forEach(bnt=>{
        bnt.addEventListener('click', ()=>{
            renderModalVisualizar(bnt.id)
            contanier_controler.showModal()
            closeModal()
    })
        })
}


function renderModalVisualizar(id){
    const contanierModal = document.querySelector('.modal_contanierVisualizar')
    const department = JSON.parse(localStorage.getItem('@Empresas:AllDepartments'))
   
    console.log(department)

    department.forEach(dep=>{
    if(dep.uuid == id){
    
    console.log('chegou') 
    const card = createModalVisualizar(dep)
    //contanierModal.appendChild(card)
    createModalSelectVisualizar(dep)
    createModalListaVisualizar(dep)
    }
    })

}


async function createModalVisualizar(dep){
    const nomeDepartment = document.querySelector('.nome_department')
    const contanierText = document.querySelector('.contanier_text') 
    

    nomeDepartment.innerHTML = `${dep.name}`

    const description = document.createElement('h2')
    const companie = document.createElement('p')
    description.innerText = dep.description
    companie.innerText = dep.companies.name

    contanierText.innerHTML = ''
    contanierText.append(description,companie)
    
return contanierText
}


async function createModalSelectVisualizar(dep){
    let select = document.querySelector('.select_department')
    const arrayUser = await usersWithoutDepartmentRequest()
    console.log(arrayUser)

    select.innerHTML = ''

    arrayUser.forEach(user=>{
       
        const option = document.createElement('option')
        option.value = user.uuid
        option.innerHTML = `${user.username}`
        
        
        select.appendChild(option)
    return select
     }) 

}

async function createModalListaVisualizar(dep){
    let lista = document.querySelector('.contanier__lista')
    const arrayAllUser = await listAllUsersRequest()

    lista.innerHTML = ''

    arrayAllUser.forEach(user=>{

        if(user.department_uuid == dep.uuid){
            const li = document.createElement('li')
            const username = document.createElement('h2')
            const nivel = document.createElement('p')
            const company = document.createElement('p')
            const btn_Desligar = document.createElement('button')

            li.classList.add('card_user')
            username.innerText = user.username
            nivel.innerText = user.professional_level
            company.innerText = dep.companies.name
            btn_Desligar.classList.add('bnt_desligar')
            btn_Desligar.id = user.uuid

            li.append(username,nivel,company,btn_Desligar)
            lista.innerHTML = ''
            lista.appendChild(li)
            return lista
        }
        })
}


export function showModalEditDepartment(){
    const controlerModal = document.querySelector('.modal_controler')
    console.log(controlerModal)
    const editDepartment = document.querySelectorAll('.editar')



    editDepartment.forEach(bnt=>{

        bnt.addEventListener('click',()=>{
            console.log(bnt)
            renderModalEditDepartment(bnt.id)
            controlerModal.showModal()
            createBodyEditDepartment()
        })
    })

}



function renderModalEditDepartment(btnid){
    const contanierModal = document.querySelector('.modal_contanier')
    const department = JSON.parse(localStorage.getItem
        ('@Empresas:AllDepartments'))
        

    contanierModal.innerHTML = '' 

    const button_close = document.createElement('img')
    const title = document.createElement('h2')
    const inputValores = document.createElement('input')
    const salvarAlteracoes = document.createElement('button')

    button_close.src = "/src/assets/img/Vector Close.png"
    button_close.classList.add('bnt_Close')

    department.forEach(dep=>{
        if(dep.uuid == btnid){

            inputValores.value = `${dep.description}`
        }

    })

    title.innerText = "Editar Departamento"
    inputValores.classList.add('input_Descricao')

    salvarAlteracoes.innerText = "Salvar alterações"
    salvarAlteracoes.classList.add('bnt_salvarAlt')
    salvarAlteracoes.id = btnid

    contanierModal.append(button_close,title,inputValores,salvarAlteracoes)
    
return contanierModal        
}


export function createBodyEditDepartment(){
    const modalControler = document.querySelector('.modal_controler')
    const input_Description = document.querySelector('.input_Descricao')
    const bntsalvar = document.querySelector('.bnt_salvarAlt')
    const bntId = bntsalvar.id
    
    const bodyDescript = {}


    bntsalvar.addEventListener('click', async (event)=>{
    bodyDescript['description'] = input_Description.value
     
    modalControler.close()
    await editDepartmentRequest( bntId , bodyDescript)
    })
    
}



export function showModalDeleteDepartment(){
    const controlerModal = document.querySelector('.modal_controler')
    console.log(controlerModal)
    const deleteDepartment = document.querySelectorAll('.delete_dep')

    deleteDepartment.forEach(bnt=>{

        bnt.addEventListener('click',()=>{
            console.log(bnt)
            renderDeleteDepartment(bnt.id)
            controlerModal.showModal()
            createBodyEditDepartment()
        })
    })
}



function renderDeleteDepartment(id){
    const departments = JSON.parse(localStorage.getItem
    ('@Empresas:AllDepartments'))
    const contanierModal = document.querySelector('.modal_contanier')
    console.log(contanierModal)

    

    departments.forEach(dep=>{
    
        
    if(dep.uuid == id){
    
    contanierModal.innerHTML = '' 

    const card = createModalDeleteDepartment(dep)
    contanierModal.appendChild(card)
            
    }
    })
}



function createModalDeleteDepartment(dep){
    const buttonClose = document.createElement('img')
    const contanierAviso = document.createElement('div')
    const titleAviso = document.createElement('h2')
    const button = document.createElement('button')

    buttonClose.src = "/src/assets/img/Vector Close.png"
    buttonClose.classList.add('bnt_Close')

    contanierAviso.classList.add('contanier_Aviso')
    titleAviso.innerText = 'Realmente deseja deletar o departamento '+`${dep.name}` + ' e demitir seus funcionários?'
    
    button.innerText = 'Confirmar'
    button.classList.add('button_confirmar')


    contanierAviso.append(buttonClose,titleAviso,button)

return contanierAviso
}






//--------------------------------------------------




function renderModalCreateDepartment(){
    const contanierModal = document.querySelector('.modal_contanier')
    console.log(contanierModal)


    contanierModal.innerHTML = '' 
    const card = createCardDepartment()
    
        
}


async function createCardDepartment(){
    const contanierModal = document.querySelector('.modal_contanier')
    
    const button_close = document.createElement('img')
    const title = document.createElement('h2')
    const inputName = document.createElement('input')
    const inputDescription = document.createElement('input')
    const selectCompanies = document.createElement('select')
    const criarDepartment = document.createElement('button')

    button_close.src = "/src/assets/img/Vector Close.png"
    button_close.classList.add('bnt_Close')

    title.innerText = 'Criar Departamento'

    inputName.placeholder = 'Nome do Departamento'
    inputName.classList.add('input_department')
    inputName.name = 'name'

    inputDescription.placeholder = 'Descrição'
    inputName.classList.add('input_department')
    inputName.name = 'description'

    selectCompanies.classList.add('select_companies')
    

    criarDepartment.innerText = 'Criar Departamento'
    criarDepartment.classList.add('btncreat_department')

    contanierModal.append(button_close,title,inputName,inputDescription,selectCompanies,criarDepartment)
    optionCreate()

return contanierModal
}


export async function showModalCreatDepartment(){
    const modalControler = document.querySelector('.modal_controler')
    const button_criar = document.querySelector('.button_criar')
       
    button_criar.addEventListener('click',()=>{
                  
            renderModalCreateDepartment()
            modalControler.showModal()
            closeModal()
            
    })
}


export async function optionCreate(){
    const array = await allCompaniesRequest()
    let select = document.querySelector('.select_companies')


    array.forEach(companie=>{
       
       const option = document.createElement('option')
       option.value = companie.uuid
       option.innerHTML = `${companie.name}`
       
       
       select.appendChild(option)
   
    })
    return select
}

