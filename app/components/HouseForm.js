export function getHouseForm() {
  return /* html */ `
  <form onsubmit="app.housesController.addHouse()">
    <div class="row">
      <div class="col d-flex align-items-center mb-3 justify-content-between">
        <div>
          <label for="sellerName" class="form-label">Your Name</label>
          <input type="text" class="form-control" name="sellerName" id="sellerName" aria-describedby="sellerName"
            placeholder="Your Name..." required>
        </div>
        <div>
          <label for="address" class="form-label">Listing Address</label>
          <input type="text" class="form-control" name="address" id="address" aria-describedby="address"
            placeholder="Address..." required>
        </div>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col d-flex align-items-center justify-content-between mb-3">
        <div>
          <label for="type" class="form-label">Property Type</label>
          <input type="text" class="form-control" name="type" id="type" aria-describedby="type"
            placeholder="Type..." required>
        </div>
      </div>
      <div class="col-2 d-flex align-items-center mb-3">
        <div>
          <label for="bedrooms" class="form-label"># Beds</label>
          <input type="number" class="form-control" name="bedrooms" id="bedrooms" aria-describedby="bedrooms" placeholder="#" min='1' required>
        </div>
      </div>
      <div class="col-2 d-flex align-items-center mb-3">
        <div>
          <label for="bathrooms" class="form-label"># Baths</label>
          <input type="number" class="form-control" name="bathrooms" id="bathrooms" aria-describedby="bathrooms"
            placeholder="#" min='1' required>
        </div>
      </div>  
    </div>
    <div class="row align-items-start">
      <div class="col-3 mb-3">
        <div>
          <label for="sqFt" class="form-label">Sq. Footage</label>
          <input type="number" class="form-control" name="sqFt" id="sqFt" aria-describedby="sqFt"
            placeholder="sq. ft." min='300' required>
        </div>
      </div>
      <div class="col-6 mb-3">
        <div>
          <label for="price" class="form-label">Estimated Value</label>
          <input type="number" class="form-control" name="price" id="price"
            aria-describedby="price" placeholder="Price..." min="10000" max="50000000" required>
        </div>
      </div>
      <div class="col-3 mb-3">
        <div>
          <label for="yearBuilt" class="form-label">Year Built</label>
          <input type="number" class="form-control" name="yearBuilt" id="yearBuilt"
            aria-describedby="yearBuilt" placeholder="Year Built..." min="1700" max="2022" required>
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