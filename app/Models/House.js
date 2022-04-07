import { generateId } from "../Utils/generateId.js";

export class House {
  constructor({ id = generateId(), sellerName, address, type, bedrooms, bathrooms, sqFt, price, yearBuilt, description }) {
    // handle out conditions first
    if (!sellerName || !address || !bedrooms || !bathrooms || !price || !sqFt) {
      throw new Error("You can't add a house without your name, an address, the bedrooms, bathrooms, square footage, and price.")
    }
    // handle out conditions first
    if (price <= 0) {
      throw new Error('Price must be greater than 0')
    }
    this.id = id
    this.sellerName = sellerName
    this.address = address
    this.img = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/child-drawing-house-gregory-dubus.jpg"
    this.type = type || ''
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.sqFt = sqFt
    this.price = price
    this.yearBuilt = yearBuilt || ''
    this.description = description || ''
  }
  get HouseTemplate() {
    return `
    <div class="house col-md-4 p-4">
      <div class="bg-dark text-light shadow rounded">
        <img class="w-100 rounded-top" src="${this.img}" alt="${this.sellerName}-${this.address}-image">
        <div class="p-2 bg-light text-dark">
          <div class="d-flex justify-content-between align-items-center border-bottom">
            <p class="text-center uppercase"><b>${this.address}</b></p>
          </div>
          <div class="d-flex justify-content-between align-items-center m-0 border-top border-bottom mb-1 pb-1">
            <p class="text-center m-0">${this.bedrooms} beds</p>
            <p class="text-center m-0">${this.bathrooms} ${this.bathrooms == 1 ? ' bath' : " baths"}</p>
            <p class="m-0">${this.sqFt}sqFt.</p>
          </div>
          <div class="d-flex align-items-center m-0 mb-2 border-bottom">
            <p class="m-0">Listed by: ${this.sellerName}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center m-0 mb-2 border-left">
            <p class="m-0">${this.description}</p>
          </div>
        </div>
        <div class="p-1 d-flex align-items-center">
          <p class="m-0">$${this.price}</p>
          <i class="ms-auto mdi mdi-delete selectable" onclick="app.housesController.removeHouse('${this.id}')"></i>
        </div>
      </div>
    </div>
    `
  }


}