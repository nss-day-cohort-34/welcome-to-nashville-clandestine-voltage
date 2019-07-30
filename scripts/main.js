
//Event listeners for search buttons, which invoke the fecth, factory and render results functions.

restaurantSearchButton.addEventListener("click", () => {
    getRestaurantData(restaurantSearch.value).then((results) => {
        console.log(results.restaurants)
        for (let item of results.restaurants) {
            const foodHTML = createResultHTML(item)
            renderRestaurant(foodHTML)
        }
        if (results.restaurants == 0 || results.restaurants == "undefined" || results.restaurants == "null") {
            alert("Restaurant not found. Try another!")
        }
    })
    
})


parkSearchButton.addEventListener("click", () => {
    getParkData(parkSelect.value)
        .then((parks) => {
            for (let park of parks) {
                let parksHTML = createParkHTML(park)
                renderPark(parksHTML)

            }
        })
})


concertSearchButton.addEventListener("click", () => {
    getConcertData(concertSelect.value)
        .then(concerts => {
            for (let concert of concerts._embedded.events) {
                let concertHTML = createResultsConcert(concert)
                renderConcert(concertHTML)
            }

        })
})



// Event listeners for save buttons, which use DOM traversal to get 
// the inner text of the results HTML elements and print them to the DOM 
// using the factory and render functions for the itinerary.


restaurantResults.addEventListener("click", (event) => {
    if (event.target.tagName === 'BUTTON') {
        const button = event.target
        const restaurantAddress = button.previousElementSibling
        const restaurantName = restaurantAddress.previousElementSibling
        let restaurantItineraryName = restaurantName.innerText
        let restaurantItineraryAddress = restaurantAddress.innerText
        const restaurantItineraryHTML = createItineraryRestaurant(restaurantItineraryName, restaurantItineraryAddress)
        renderRestaurantItinerary(restaurantItineraryHTML)
    }
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


concertResultsInDOM.addEventListener("click", (event) => {
    if (event.target.tagName === 'BUTTON') {
        const button = event.target
        const concertTime = button.previousElementSibling
        const concertDate = concertTime.previousElementSibling
        const concertVenue = concertDate.previousElementSibling
        const concertName = concertVenue.previousElementSibling
        const concertItineraryName = concertName.innerText
        const concertItineraryVenue = concertVenue.innerText
        const concertItineraryDate = concertDate.innerText
        const concertItineraryTime = concertTime.innerText
        const concertItineraryHTML = createItineraryConcert(concertItineraryName, concertItineraryVenue, concertItineraryDate, concertItineraryTime)
        renderConcertItinerary(concertItineraryHTML)
    }
})


//Clear results button event listener
clearButton.addEventListener("click", () => {

    concertResultsInDOM.innerText = ""
    parkResultsDOM.innerText = ""
    restaurantResults.innerText = ""
})

//Clear itinerary event listener
clearItineraryButton.addEventListener("click", () => {

    concertItineraryReference.innerText = ""
    parkItineraryReference.innerText = ""
    restaurantItineraryReference.innerText = ""
})

// print button
document.getElementById("printButton").addEventListener("click", function () {
    window.print();
})
