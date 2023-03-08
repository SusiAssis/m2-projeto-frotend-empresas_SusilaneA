import { allDepartmentsRequest , listAllUsersRequest} from "./requestAdmin.js"
import { allCompaniesRequest } from "./request.js"
import { renderAllDepartments , renderAllUsers , renderAllCompaniesSelect , renderDepartmentCompanies } from "./renderAdmin.js"


async function renderPageAdmin(){
    
    const allDepart = await allDepartmentsRequest()
    console.log(allDepart)
    renderAllDepartments(allDepart)

    const all_companies = await allCompaniesRequest()
    console.log(all_companies)
    renderAllCompaniesSelect(all_companies)

    const allUser = await listAllUsersRequest()
    console.log(allUser)
    renderAllUsers(allUser)


 }
 renderPageAdmin()

 export async function searchDepartment(){
    const select = document.querySelector('select')
     
    const selecionado = select.addEventListener('change',()=>{
    let value = select.value
    
    console.log(value)

    renderDepartmentCompanies(value)
    return value
    })

}
searchDepartment()