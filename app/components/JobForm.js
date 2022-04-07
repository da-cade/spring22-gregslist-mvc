// TODO reformat this
export function getJobForm() {
  return /* html */ ` 
  <form onsubmit="app.jobsController.addJob()">
    <div class="row">
      <div class="col d-flex align-items-center mb-3 justify-content-between">
        <div>
          <label for="jobTitle" class="form-label">Job Title</label>
          <input type="text" class="form-control" name="jobTitle" id="jobTitle" aria-describedby="jobTitle"
            placeholder="Job Title..." required>
        </div>
        <div>
          <label for="location" class="form-label">Listing Location</label>
          <input type="text" class="form-control" name="location" id="location" aria-describedby="location"
            placeholder="Location..." required>
        </div>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col d-flex align-items-center justify-content-between mb-3">
        <div>
          <label for="salaryType" class="form-label">Salary Type</label>
          <input type="text" class="form-control" name="salaryType" id="salaryType" aria-describedby="salaryType"
            placeholder="Salary Type..." required>
        </div>
      </div>
      <div class="col-2 d-flex align-items-center mb-3">
        <div>
          <label for="salary" class="form-label">Salary</label>
          <input type="number" class="form-control" name="salary" id="salary" aria-describedby="salary" placeholder="#" min='1' required>
        </div>
      </div>
      <div class="col-2 d-flex align-items-center mb-3">
        <div>
          <label for="phone" class="form-label">Phone</label>
          <input type="number" class="form-control" name="phone" id="phone" aria-describedby="phone"
            placeholder="#" required>
        </div>
      </div>  
    </div>
    <div class="row align-items-start">
      <div class="col-3 mb-3">
        <div>
          <label for="email" class="form-label">Email</label>
          <input type="text" class="form-control" name="email" id="email" aria-describedby="email"
            placeholder="Email." required>
        </div>
      </div>
      <div class="col-6 mb-3">
        <div>
          <label for="company" class="form-label">Company</label>
          <input type="text" class="form-control" name="company" id="company"
            aria-describedby="company" placeholder="company..." min="10000" max="50000000" required>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col mb-3">
        <div>
          <label for="description" class="form-label">Description</label>
          <textarea type="text" class="form-control" style="font-size: x-small" name="description" id="description"
            aria-describedby="description" placeholder="Description..." min="5" max="250" required> </textarea>
        </div>
      </div>
    </div>  
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="submit" class="btn btn-primary">Create</button>
    </div>
  </form>
  `
}