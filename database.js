const fragment = document.createDocumentFragment()
const homeStorage = JSON.parse(localStorage.getItem("HomeInventory"))

console.log(homeStorage)


const furnitureList = homeStorage.furniture
console.log(furnitureList)
const instrumentList = homeStorage.instruments
console.log(instrumentList)
const electronicList = homeStorage.electronics
console.log(electronicList)

const furnitureShow = document.createElement("section")
furnitureShow.className = "furniture"
furnitureShow.textContent = furnitureList.name
fragment.appendChild(furnitureShow)


let showItems = (homeData) => {
    let storageDisplay = document.querySelector("#myStuff");
    homeData.forEach((homeStorage) => {
        let storageSection = buildHomeStorage(homeStorage);
        storageDisplay.appendChild(storageSection)
    
    });
}
debugger
let buildHomeStorage = (homeStorage) => {
    let section = `<section>${homeStorage}
    <p>${homeStorage.name}</p>
    <p>${homeStorage.location}</p>
    <p>${homeStorage.description}</p>
    </section>`
    return section
}
const furnitureItem = document.createElement("p")
furnitureItem.textContent = furnitureList[0].name
furnitureShow.appendChild(furnitureItem)

showItems(furnitureList)

console.log(showItems)

document.querySelector("#myStuff").appendChild(furnitureShow)