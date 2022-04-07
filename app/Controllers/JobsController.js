import { ProxyState } from "../AppState.js";
import { getJobForm } from "../components/JobForm.js";
import { jobsService } from "../Services/JobsService.js";

function _drawJobs(){
  debugger
  let jobsListingsTemplate = ''
  ProxyState.jobs.forEach(job => jobsListingsTemplate += job.JobTemplate)
  document.getElementById('listings').innerHTML = `
  <div class="row jobs">
    ${jobsListingsTemplate}
  </div>
  `

  document.getElementById('listing-modal-form-slot').innerHTML = getJobForm()
  document.getElementById('add-listing-modal-label').innerText = 'Add Job 🚯'
}

export class JobsController {
  constructor(){
    ProxyState.on("jobs", _drawJobs)
  }
  
  drawJobs(){
    _drawJobs()
  }

  addJob(){
    try {

      event.preventDefault()
      /**@type {HTMLFormElement} */
      // @ts-ignore
      const formElem = event.target
      const formData = {
        jobTitle: formElem.jobTitle.value,
        salary: formElem.salary.value,
        salaryType: formElem.salaryType.value,
        phone: formElem.phone.value,
        email: formElem.email.value,
        company: formElem.company.value,
        location: formElem.location.value,
        description: formElem.description.value
      }
      jobsService.addJob(formData)
      formElem.reset()
      bootstrap.Modal.getOrCreateInstance(document.getElementById('add-listing-modal')).hide()

    } catch (error) {
        // show this to the user
    }
  }
}

