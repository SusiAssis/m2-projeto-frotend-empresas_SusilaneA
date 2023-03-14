import { allDepartmentsRequest , listAllUsersRequest} from "./requestAdmin.js"
import { allCompaniesRequest , checkUserType } from "./request.js"
import { renderAllDepartments , renderAllUsers , renderAllCompaniesSelect , renderDepartmentCompanies } from "./renderAdmin.js"
import { showModalEditUser , showModalDeleteUser , showModalCreatDepartment , showModalVisualizar , showModalEditDepartment , showModalDeleteDepartment } from "./modalAdmin.js"

async function authentication(){
    const verifica = localStorage.getItem('@Empresas:is_admin')
    const token = localStorage.getItem('@Empresas:token')

    if(!token){
        window.location.replace('../../index.html')
    }
    
    if(verifica != 'true' ){

        console.log(verifica)
        window.location.replace('./pageUser.html')
    }

}


export async function renderPageAdmin(){
    
    const allDepart = await allDepartmentsRequest()
    localStorage.setItem('@Empresas:AllDepartments',JSON.stringify(allDepart))
    renderAllDepartments(allDepart)
    
    showModalVisualizar()

    const all_companies = await allCompaniesRequest()
    
    renderAllCompaniesSelect(all_companies)

    const allUser = await listAllUsersRequest()
    localStorage.setItem('@Empresas:AllUsers',JSON.stringify(allUser))
    renderAllUsers(allUser)

    showModalEditUser()
    showModalDeleteUser()
    showModalCreatDepartment()
    showModalEditDepartment()
    showModalDeleteDepartment()

 }
 renderPageAdmin()



 export async function searchDepartment(){
    const select = document.querySelector('.select_empresa')
     
    const selecionado = select.addEventListener('change',()=>{
    let value = select.value
    
    console.log(value)

    renderDepartmentCompanies(value)
    return value
    })

}
searchDepartment()

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