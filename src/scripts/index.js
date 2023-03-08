import { allCompaniesRequest , allSector , companiesBySectorRequest} from "./request.js"
import { renderAllCompanies , renderAllSector} from "./render.js"


async function renderIndex(){
   const allCompanies = await allCompaniesRequest()
   
   renderAllCompanies(allCompanies)

   const allSectors = await allSector()
   renderAllSector(allSectors)

   

}
renderIndex()


async function renderCompaniesSector(value){

   const companiesSector = await companiesBySectorRequest(value)
   console.log(companiesSector)
   renderAllCompanies(companiesSector)

}


async function searchSector(){
    const select = document.querySelector('.select')
     
    const selecionado = select.addEventListener('change',()=>{
    let value = select.value
    
    console.log(value)

    renderCompaniesSector(value)
    return value
    })

}
searchSector()


function openMenu(){
    const menu = document.querySelector('.menu_vector')
    const contanierButtons = document.querySelector('.contanier_buttons')
    const closeHidden = document.querySelector('.close_hidden')
    
    
    menu.addEventListener('click',(event)=>{
    

    contanierButtons.classList.toggle("hidden")
    })

    closeHidden.addEventListener('click',()=>{
    
    contanierButtons.classList.toggle("hidden")
    })

}
openMenu()


function goLogin(){
    const bntLogin = document.querySelector('.bnt_login')
    const bntCadastro = document.querySelector('.bnt_cadastro')


    bntLogin.addEventListener('click',()=>{
        window.location.replace('src/pages/login.html')
    })

    bntCadastro.addEventListener('click',()=>{
        window.location.replace('src/pages/register.html')
    })

}
goLogin()

