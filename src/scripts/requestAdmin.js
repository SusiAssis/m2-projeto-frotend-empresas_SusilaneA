import { toast } from "./toast.js"

const green = 'var(--sucess100)'
const red = 'var(--alert100)'

const baseUrl = "http://localhost:6278"
const token = JSON.parse(localStorage.getItem('@Empresas:token'))
const requestHeaders = {
    'Content-type':'application/json',
    Authorization: `Bearer ${token}`
}


export async function allDepartmentsRequest(){
    const departments = await fetch(`${baseUrl}/departments`,{
        method: 'GET',
        headers: requestHeaders,
    }).then(response=>{
        if(response.ok){
            return response.json()
        }else{
            response.json().then((resp)=>{
                alert(`${resp.error}`)
            })
        }
    })
    return departments
}


export async function listAllUsersRequest(){
    const users = await fetch(`${baseUrl}/users`,{
        method: 'GET',
        headers: requestHeaders,
    }).then(response=>{
        if(response.ok){
            return response.json()
        }else{
            response.json().then((resp)=>{
                alert(`${resp.error}`)
            })
        }
    })
    return users
}



export async function listAllDepartmentsByCompaniesRequest(value){
    const users = await fetch(`${baseUrl}/departments/${value}`,{
        method: 'GET',
        headers: requestHeaders,
    }).then(response=>{
        if(response.ok){
            return response.json()
        }else{
            response.json().then((resp)=>{
                alert(`${resp.error}`)
            })
        }
    })
    return users
}



export async function updateUserRequest(id,bodyUser){
    const update = await fetch(`${baseUrl}/admin/update_user/${id}`,{
        method:'PATCH',
        headers: requestHeaders,
        body: JSON.stringify(bodyUser)
    }).then(response=>{
        if(response.ok){
            toast('Usuário atualizado com sucesso!', green)
        }else{
            response.json().then((resp)=>{
                toast(resp.json(), red)
            })
        }
    })
return update
}


export async function deleteUserRequest(id){
    const user = await fetch(`${baseUrl}/admin/delete_user/${id}`,{
       method:'DELETE',
       headers: requestHeaders 
    }).then(response=>{
        if(response.ok){
           toast('Usuário deletado com sucesso', green)
        }
    })
    return user
}



export async function createDepartmentRequest(bodyDepartment){
    const department = await fetch(`${baseUrl}/departments`,{
       method:'POST',
       headers: requestHeaders,
       body: JSON.stringify(bodyDepartment)
    }).then(response=>{
        if(response.ok){
           toast('Departamento criado com sucesso!', green)
        }else{
            response.json().then((resp)=>{
                alert(resp.json())
            })
        }
    })
    return department
}



export async function usersWithoutDepartmentRequest(){
const users = await fetch(`${baseUrl}/admin/out_of_work`,{
 method: 'GET',
 headers: requestHeaders,
}).then(response=>{
 if(response.ok){
    return response.json()
    }else{
        response.json().then((resp)=>{
            alert(`${resp.error}`)
            })
        }
    })

return users
}



export async function editDepartmentRequest(id,bodyDep){
    const edit = await fetch(`${baseUrl}/departments/${id}`,{
        method:'PATCH',
        headers: requestHeaders,
        body: JSON.stringify(bodyDep)
    }).then(response=>{
        if(response.ok){
            toast('Descrição do departamento atualizado com sucesso!', green)
        }else{
            response.json().then((resp)=>{
                alert(resp.json())
            })
        }
    })
return edit
}


export async function deleteDepartmentRequest(id){
    const department = await fetch(`${baseUrl}/departments/${id}`,{
       method:'DELETE',
       headers: requestHeaders 
    }).then(response=>{
        if(response.ok){
           toast('Departamento deletado com sucesso', green)
        }
    })
    return department
}


export async function hireEmployeeRequest(body){
    const hire = await fetch(`${baseUrl}/departments/hire/`,{
        method:'PATCH',
        headers: requestHeaders,
        body: JSON.stringify(body)
    }).then(response=>{
        if(response.ok){
            toast('Novo funcionário contratado!', green)
        }else{
            response.json().then((resp)=>{
                alert(resp.json())
            })
        }
    })
return hire
}



export async function dismissEmployeeRequest(id){
    const dismiss = await fetch(`${baseUrl}/departments/dismiss/${id}`,{
        method:'PATCH',
        headers: requestHeaders,
        
    }).then(response=>{
        if(response.ok){
            toast('Funcionário desligado deste departamento!', green)
        }else{
            response.json().then((resp)=>{
                alert(resp.json())
            })
        }
    })
return dismiss
}