import { generateId } from "../Utils/generateId.js";

export class Job {
  constructor({ id = generateId(), jobTitle, salary, salaryType, phone, email, company, location, description}){
    if(!jobTitle || !salary || !salaryType || (!phone && !email)){
      throw new Error("On Greg'sList, all job listings show the job title, the salary, and a callback number or email.")
    }
    this.id = id,
    this.jobTitle = jobTitle,
    this.salary = salary,
    this.salaryType = salaryType
    this.phone = phone || '',
    this.email = email || '',
    this.company = company || '',
    this.location = location || '',
    this.description = description,
    this.img = "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4352347.jpg"
  }
  get JobTemplate() {
    return `
    <div class="job col-md-6 p-4">
      <div class="bg-dark text-light shadow rounded">
        <img class="w-100 rounded-top" src="${this.img}" alt="important-job-image">
        <div class="p-2 bg-light text-dark">
          <div class="d-flex justify-content-between align-items-center border-bottom mb-1">
            <p class="text-center uppercase m-0"><b>${this.jobTitle}</b></p>
          </div>
          <div class="d-flex justify-content-between align-items-center m-0 border-bottom mb-1 pb-1">
            <p class="text-center m-0">Type: ${this.salaryType}</p>
            <p class="text-center m-0">${this.salary}/${this.salaryType == "hourly" ? "hr" : "year"}</p>
          </div>
          <div class="d-flex align-items-center m-0 mb-2 border-bottom">
            <p class="m-0">${this.phone}</p>
          </div>
          <div class="d-flex align-items-center m-0 mb-2 border-bottom">
            <p class="m-0">${this.email}</p>
          </div>
          <div class="d-flex align-items-center m-0 mb-2 border-bottom">
            <p class="m-0">${this.location}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center m-0 mb-2 border-left">
            <p class="m-0">${this.description}</p>
          </div>
        </div>
        <div class="p-1 d-flex align-items-center">
          <p class="m-0">From: ${this.company}</p>
          <i class="ms-auto mdi mdi-delete selectable" onclick="app.housesController.removeHouse('${this.id}')"></i>
        </div>
      </div>
    </div>
    `
  }

}