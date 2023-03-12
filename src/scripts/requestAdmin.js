

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
            alert('Usuário atualizado com sucesso!')
        }else{
            response.json().then((resp)=>{
                alert(resp.json())
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
           alert('Usuário deletado com sucesso')
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
           alert('Departamento criado com sucesso!')
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
            alert('Descrição do departamento atualizado com sucesso!')
        }else{
            response.json().then((resp)=>{
                alert(resp.json())
            })
        }
    })
return edit
}