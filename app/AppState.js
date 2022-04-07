import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Job').Job[]} */
  jobs = [
    new Job({
      jobTitle: "Elbow Greaser",
      salaryType: "hourly",
      salary: .35,
      phone: 2088512142, 
      email: "drybonesmisery@hotmail.com",
      company: "That Squid Game Company",
      location: "South Korea",
      description: "College degree required, Masters preferred."
    })
  ]

  /** @type {import('./Models/House').House[]} */
  houses = [
    new House({
      sellerName: "P. Sherman",
      address: "42 Wallaby Way",
      type: "condo",
      bedrooms: 2,
      bathrooms: 1,
      sqFt: 1120,
      price: 430000,
      yearBuilt: 1987,
      description: "Haunted by fish ghosts, I think."})
  ]
  
  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({
      color: 'red',
      description: 'This is my test car',
      img: 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/03/1988_Accord_3rd_Generation.jpg?resize=980:*',
      make: 'Honda',
      model: 'Accord',
      mileage: '289000',
      price: 5500,
      year: 1988
    })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
