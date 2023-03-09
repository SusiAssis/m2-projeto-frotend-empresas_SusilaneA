import { listAllDepartmentsByCompaniesRequest } from "./requestAdmin.js"

    export async function renderAllDepartments(array){
    const list = document.querySelector('.lista_Departments')
    
    list.innerHTML = ''
    
    array.forEach(department=>{
        const card = createCardDepartment(department)
        list.appendChild(card)
    })
    
    }
    
    function createCardDepartment(department){
        const li = document.createElement('li')
        const title = document.createElement('h3')
        const description = document.createElement('p')
        const company = document.createElement('p')
        const contanierIcons = document.createElement('div')
        const img_ver = document.createElement('img')
        const img_edit = document.createElement('img')
        const img_delete = document.createElement('img')

        title.innerText = department.name
        description.innerText = department.description
        company.innerText = department.companies.name

        contanierIcons.classList.add('contanier_icons')

        img_ver.classList.add('vizualizar')
        img_ver.id = department.uuid
        img_ver.src = "/src/assets/img/Vector ver.png"
        img_ver.name = "Vizualizar"
        img_ver.alt = "Vizualizar"

        img_edit.classList.add('editar')
        img_edit.src = "/src/assets/img/Vector Edit.png"
        img_edit.name = "Editar"
        img_edit.alt = "Editar"

        img_delete.classList.add('delete')
        img_delete.src = "/src/assets/img/Vector Delete.png"
        img_delete.name = "Delete"
        img_delete.alt = "Delete"

        contanierIcons.append(img_ver,img_edit,img_delete)

        li.append(title,description,company,contanierIcons)
    
    
    return li
    }



    export async function renderAllUsers(array){
        const list = document.querySelector('.lista_users')
        
        list.innerHTML = ''
        
        array.forEach(user=>{
            const card = createCardUsers(user)
            list.appendChild(card)
        })
        
        }
        
        function createCardUsers(user){
            const li = document.createElement('li')
            const name = document.createElement('h3')
            const nivel = document.createElement('p')
            const company = document.createElement('p')
            const contanierIcons = document.createElement('div')
            const img_edit = document.createElement('img')
            const img_delete = document.createElement('img')
    
            name.innerText = user.username
            nivel.innerText = user.professional_level
            company.innerText = user.department_uuid
    
            contanierIcons.classList.add('contanier_icons')
    
            img_edit.classList.add('editar_user')
            img_edit.src = "/src/assets/img/Vector Edit.png"
            img_edit.id = user.uuid
            img_edit.name = "Editar"
            img_edit.alt = "Editar"
    
            img_delete.classList.add('delete')
            img_delete.src = "/src/assets/img/Vector Delete.png"
            img_delete.id = user.uuid
            img_delete.name = "Delete"
            img_delete.alt = "Delete"
    
            contanierIcons.append(img_edit,img_delete)
    
            li.append(name,nivel,company,contanierIcons)
        
        
        return li
        }


    export async function renderAllCompaniesSelect(array){
        const select = document.querySelector('.select_empresa')
        
        array.forEach(companies=>{
            const option = document.createElement('option')
            option.innerText = companies.name
            option.classList.add('allSectors')
            option.name = companies.name
            option.value = companies.uuid
        
            select.appendChild(option)
        
            })
        }



    export async function renderDepartmentCompanies(value){

        const Departments = await listAllDepartmentsByCompaniesRequest(value)
        console.log(Departments)
        renderAllDepartments(Departments)
         
    }


    



