const parkSearchButton = document.querySelector("#parkSearch")
const parkSelect = document.querySelector('#parks_features')
const parkSaveButton = document.querySelectorAll("#parkSaveButton")
const parkResultsDOM = document.querySelector("#results")


parkSearchButton.addEventListener("click", () => {
    getParkData(parkSelect.value)
    .then((parks) => {
       for (const park of parks) {
            const parksHTML = createParkHTML(park)
            renderPark(parksHTML)
          
        }
    })
})

parkResultsDOM.addEventListener("click", (event) => {
    if (event.target.tagName === 'BUTTON') {
        const button = event.target
        const parkAddress = button.previousElementSibling
        const parkName = parkAddress.previousElementSibling
       
        const parkItineraryName = parkName.innerText
        const parkItineraryAddress = parkAddress.innerText
       
        const parkItineraryHTML = createItineraryPark(parkItineraryName, parkItineraryAddress)
        renderParkItinerary(parkItineraryHTML)
    }
})





