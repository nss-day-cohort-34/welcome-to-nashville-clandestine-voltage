const parkSearchButton = document.querySelector("#parkSearch")
const parkSelect = document.querySelector('#parks_features')
const parkSaveButton = document.querySelectorAll("#parkSaveButton")
const parkResultsDOM = document.querySelector("#parkResults")
const clearDeleteButton = document.querySelector(".clearParksButton")


parkSearchButton.addEventListener("click", () => {
    getParkData(parkSelect.value)
    .then((parks) => {
       for (let park of parks) {
            let parksHTML = createParkHTML(park)
            renderPark(parksHTML)
          
        }
    })
})

parkResultsDOM.addEventListener("click", (event) => {
    if (event.target.tagName === 'BUTTON') {
        const button = event.target
        const parkAddress = button.previousElementSibling
        const parkName = parkAddress.previousElementSibling
       
        let parkItineraryName = parkName.innerText
        let parkItineraryAddress = parkAddress.innerText
       
        const parkItineraryHTML = createItineraryPark(parkItineraryName, parkItineraryAddress)
        renderParkItinerary(parkItineraryHTML)
    }
})

// const removeEl = document.querySelector("#thingToDelete")
// const containerEl = document.querySelector("#container")
// const deleteButton = document.querySelector("#deleteButton")

// deleteButton.addEventListener("click", () => {
//     containerEl.removeChild(removeEl)
// })






