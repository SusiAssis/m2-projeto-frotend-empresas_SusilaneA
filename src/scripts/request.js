const baseUrl = "http://localhost:6278"
const token = JSON.parse(localStorage.getItem('@Empresas:token'))
const requestHeaders = {
    'Content-type':'application/json',
    Authorization: `Bearer ${token}`
}

const green = 'var(--sucess100)'
const red = 'var(--alert100)'



export async function newUserRequest(registerBody){
    const newUser = await fetch(`${baseUrl}/auth/register`,{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(registerBody)
    })
    .then(response =>{
        console.log(response)
        if(response.ok){
            alert('Sua conta foi criada com sucesso!')
        }else{
            response.json().then(resError=> console.log(resError.error))
        }
    })

}


export async function loginRequest(loginBody){
    const token = await fetch(`${baseUrl}/auth/login`,{
        method: 'POST',
        headers:requestHeaders,
        body: JSON.stringify(loginBody)
    })
    .then((response)=>{
        if(response.ok){
            const responseJson = response.json().then(({token})=>{
                alert('Login realizado com sucesso')
                localStorage.setItem('@Empresas:token', JSON.stringify(token))

            })
        return responseJson
        }else{

            response.json().then(resError=>{
                alert(`${resError.status}`)
            })
        }
    })
    return token
}


export async function allCompaniesRequest(){
    const companies = await fetch(`${baseUrl}/companies`,{
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
    return companies
}


export async function companiesBySectorRequest(sector){
    const companiesSector = await fetch(`${baseUrl}/companies/${sector}`,{
        method:'GET',
        headers: requestHeaders,
    }).then(response=>{
        if(response.ok){
            return response.json()
        }
    })
return companiesSector
}



export async function allSector(){
    const allSector = await fetch(`${baseUrl}/sectors`,{
        method:'GET',
        headers:requestHeaders,
    }).then(response=>{
        if(response.ok){
            return response.json()
        }
    })
return allSector
}



export async function userProfile(){
    const profile = await fetch(`${baseUrl}/users/profile`,{
        method:'GET',
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
    return profile
}



export async function allEmployeesDepartment(){
    const employeesDepartment = await fetch(`${baseUrl}/users/departments/coworkers`,{
        method:'GET',
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

return employeesDepartment
}


export async function allDepartmentCompany(){
    const allDepartment = await fetch(`${baseUrl}/users/departments`,{
        method:'GET',
        headers: requestHeaders,
    }).then(response=>{
        if(response.ok){
           return response.json()
        }else{
            response.json().then(res=>{
                alert(`${res.error}`)
            })
        }
    })
return allDepartment
}



export async function updateInfoEmployee(userBody){
    const updateInfo = await fetch(`${baseUrl}/users`,{
        method:'PATCH',
        headers: requestHeaders,
        body: JSON.stringify(userBody)
    }).then(response=>{
        if(response.ok){
        alert('Informações atualizadas com sucesso')

        return response.json()
        }else{
            response.json().then((res)=>{
                alert(res.error)
            })
        }
    })
}

export async function checkUserType(){
    const check = await fetch(`${baseUrl}/auth/validate_user`,{
     method: 'GET',
     headers: requestHeaders
    }).then(response=>{
        if(response.ok){
        const responseJson = response.json().then(({is_admin})=>{
        localStorage.setItem('@Empresas:is_admin', JSON.stringify(is_admin))
        })
    }else{
        response.json().then((res)=>{
            alert(res.error)
        })
    }

    })
}

