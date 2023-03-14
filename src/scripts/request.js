import { toast } from "./toast.js"

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
        
        if(response.ok){
            toast('Sua conta foi criada com sucesso!',green)

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
                toast('Login realizado com sucesso', green)
                localStorage.setItem('@Empresas:token', JSON.stringify(token))
            return token
            })
        return responseJson
        }else{

            response.json().then(resError=>{
                toast(`${resError.status}`, red)
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
                toast(`${resp.error}`,red)
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
                toast(`${resp.error}`,red)
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
        toast('Informações atualizadas com sucesso',green)

        return response.json()
        }else{
            response.json().then((res)=>{
                toast(res.error,red)
            })
        }
    })
}

export async function checkUserType(token){
    const check = await fetch(`${baseUrl}/auth/validate_user`,{
     method: 'GET',
     headers: {
        'Content-type':'application/json',
        Authorization: `Bearer ${token}`
    }
    }).then(response=>{
        if(response.ok){
        const responseJson = response.json().then((res)=>{
        localStorage.setItem('@Empresas:is_admin', JSON.stringify(res.is_admin))
        return res
        })
        return responseJson
    }else{
        response.json().then((res)=>{
            console.log(res.error)
        })
    }

    })
    return check
}









