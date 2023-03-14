

export async function renderAllSector(array){
    const select = document.querySelector('select')

    array.forEach(sector=>{
        const option = document.createElement('option')
        option.innerText = sector.description
        option.classList.add('allSectors')
        option.name = sector.description
        option.value = sector.description

        select.appendChild(option)

    })
}


export async function renderAllCompanies(array){
const list = document.querySelector('.contanier_list')

list.innerHTML = ''

array.forEach(companie=>{
    const card = createCard(companie)
    list.appendChild(card)
})

}

function createCard(companie){
    const li = document.createElement('li')
    const title = document.createElement('h2')
    const time = document.createElement('p')
    const sector = document.createElement('span')

    li.classList.add('card_companies')

    title.innerText = companie.name
    time.innerText = companie.opening_hours
    time.classList.add('open_time')
    sector.innerText = companie.sectors.description
    
    li.append(title,time,sector)


return li
}


export async function renderInfoEmployeeLogout(user){
    const section = document.querySelector('.contanier_infoUser') 

    section.innerHTML = ''

    const contanierText = document.createElement('div')
    const contanieruserName = document.createElement('div')
    const username = document.createElement('h2')
    const contanierInfoUser = document.createElement('div')
    const email = document.createElement('p')
    const nivel = document.createElement('p')
    const tipoDeTrabalho = document.createElement('p')
    const imgVector = document.createElement('img')

    contanierText.classList.add('contanier_text')
    
    username.innerText = user.username
    
    contanierInfoUser.classList.add('info_user')
    email.innerText = user.email
    nivel.innerText = user.professional_level
    tipoDeTrabalho.innerText = 'Home Office'

    imgVector.src ='/src/assets/img/Vector Edit.png'
    imgVector.alt = 'editar'
    imgVector.classList.add('editar')

    
    contanierInfoUser.append(email,nivel,tipoDeTrabalho)
    contanieruserName.appendChild(username)
    
    contanierText.append(contanieruserName,contanierInfoUser)

    section.append(contanierText,imgVector)

    return section
}



export async function renderListEmployeesDepartaments(array, info){

const infoUser = info

const section = document.querySelector('.contanier_infoDepartment') 
const lista = document.querySelector('.contanier_nomeColega')
const nomeDep = document.querySelector('.nomeDepartamento')



if(array == ''){
 
   section.innerHTML = ''
   const contanier_aviso = document.createElement('div')
   const textoAviso = document.createElement ('h2')
   textoAviso.innerText = 'Você ainda não foi contratado' 
   contanier_aviso.classList.add('contanier_Aviso')
   
   contanier_aviso.appendChild(textoAviso)
   section.appendChild(contanier_aviso)

   return section
}else{

nomeDep.innerHTML = array[0].name 
section.append()

lista.innerHTML = ''

array.forEach(employee=>{

    
    const card = createCardEmployees(employee,info)
    
})
}

}


function createCardEmployees(employee,info){
const infoUser = info
const users = employee.users
const lista = document.querySelector('.contanier_nomeColega')

users.forEach(user=>{

    if(user.username != infoUser.username){
    const li = document.createElement('li')
    const name = document.createElement('h4')
    const nivel = document.createElement('p')
    
    name.innerText = user.username
    nivel.innerText = user.professional_level

    li.append(name,nivel)
    lista.appendChild(li)}

})


return lista
}



export async function renderModalEdit(){
    const dialog = document.querySelector('.modal_controler')
     
    dialog.innerHTML = ''

    const button_close = document.createElement('img')
    const modal_contanier = document.createElement('div')
    const titulo = document.createElement('h2')
    const input_name = document.createElement('input')
    const input_email = document.createElement('input')
    const input_password = document.createElement('input')
    const button_editar = document.createElement('button')

    button_close.src = "/src/assets/img/Vector Close.png"
    button_close.classList.add('close')
    modal_contanier.classList.add('modal_contanier')
    titulo.innerText = 'Editar Perfil'

    input_name.classList.add('input_edit')
    input_name.name = 'username'
    input_name.placeholder = "Seu nome"

    input_email.classList.add('input_edit')
    input_email.name = 'email'
    input_email.placeholder = "Seu e-mail"

    input_password.classList.add('input_edit')
    input_password.name = 'password'
    input_password.placeholder = "Sua senha"

    button_editar.innerText = 'Editar perfil'
    button_editar.classList.add('button_editar')
    
    modal_contanier.append(button_close,titulo,input_name,input_email,input_password,button_editar)

    dialog.appendChild(modal_contanier)


    
return dialog
}



