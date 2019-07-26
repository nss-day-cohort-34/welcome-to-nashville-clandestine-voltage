const parkSearchButton = document.querySelector("#parkSearch")
const parkSelect = document.querySelector('#parks_features')
const parkSaveButton = document.querySelectorAll("#parkSaveButton")
const parkResultsDOM = document.querySelector("#parkItinerary")


parkSearchButton.addEventListener("click", () => {
    getParkData(parkSelect.value)
    .then((parks) => {
       for (const park of parks) {
            const parksHTML = createParkHTML(park)
            renderPark(parksHTML)
          
        }
    })
})





