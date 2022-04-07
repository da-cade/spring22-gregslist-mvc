import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../components/HouseForm.js";
import { housesService } from "../Services/HousesService.js";
import { Pop } from "../Utils/Pop.js"

function _drawHouses() {
  let houseCardsTemplate = ''
  ProxyState.houses.forEach(house => houseCardsTemplate += house.HouseTemplate)
  document.getElementById('listings').innerHTML = `
    <div class="row houses">
      ${houseCardsTemplate}
    </div>
  `

  document.getElementById('listing-modal-form-slot').innerHTML = getHouseForm()
  document.getElementById('add-listing-modal-label').innerText = 'Add House 🏠'
}

export class HousesController {
  //  Do I want to do anything on page load?
  constructor() {
    ProxyState.on('houses', _drawHouses)
  }

  addHouse() {
    // DO THIS like always
    try {
      event.preventDefault()
      /**@type {HTMLFormElement} */
      // @ts-ignore
      const formElem = event.target
      const formData = {
        sellerName: formElem.sellerName.value,
        address: formElem.address.value,
        type: formElem.type.value,
        bedrooms: formElem.bedrooms.value,
        bathrooms: formElem.bathrooms.value,
        sqFt: formElem.sqFt.value,
        price: formElem.price.value,
        yearBuilt: formElem.yearBuilt.value,
        description: formElem.description.value,
      }
      housesService.addHouse(formData)
      console.log({ formData })

    } catch (error) {
      Pop.error(error.message) 
    }
  }

  drawHouses() {
    _drawHouses()
    // REVIEW [epic=Mark] How could we refactor this? 
    // @ts-ignore
    // bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('sidenav')).hide()
  }
}