import { allDepartmentsRequest , listAllUsersRequest} from "./requestAdmin.js"
import { allCompaniesRequest } from "./request.js"
import { renderAllDepartments , renderAllUsers , renderAllCompaniesSelect , renderDepartmentCompanies } from "./renderAdmin.js"
import { showModalEditUser } from "./modalAdmin.js"


async function renderPageAdmin(){
    
    const allDepart = await allDepartmentsRequest()
    localStorage.setItem('@Empresas:AllDepartments',JSON.stringify(allDepart))
    renderAllDepartments(allDepart)

    const all_companies = await allCompaniesRequest()
    console.log(all_companies)
    renderAllCompaniesSelect(all_companies)

    const allUser = await listAllUsersRequest()
    localStorage.setItem('@Empresas:AllUsers',JSON.stringify(allUser))
    renderAllUsers(allUser)

    showModalEditUser()

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
