const homeStorage = JSON.parse(localStorage.getItem("HomeInventory"))

const root = document.querySelector("#myStuff")


console.log(homeStorage)


const furnitureList = homeStorage.furniture
console.log(furnitureList)
const instrumentList = homeStorage.instruments
console.log(instrumentList)
const electronicList = homeStorage.electronics
console.log(electronicList)

let homeBuilder = (list) => {
    let section = document.createElement("section")
furnitureList[0].forEach(element => {
    furnitureList[element] 
    console.log(element)
    });
}


let sectionData = (data) => {
    let paragraph = document.createElement("p")
    paragraph.textContent = homeStorage.furniture.name

}