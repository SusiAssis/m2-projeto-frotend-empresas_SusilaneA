
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
    const sector = document.createElement('p')

    li.classList.add('card_companies')

    title.innerText = companie.name
    time.innerText = companie.opening_hours
    time.classList.add('open_time')
    sector.innerText = companie.sectors.description
    
    li.append(title,time,sector)


return li
}


export async function renderAllCompaniesSector(){
    
}
