
//Declare variables that store references to locations in the DOM that will have some kind of functionality 

restaurantSearchButton.addEventListener("click", () => {
    if (results.restaurants == 0 || results.restaurants == "undefined" || results.restaurants == "null") {
        alert("Restaurant not found. Try another!")
    }
  getRestaurantData(restaurantSearch.value).then((results) => {
    console.log(results.restaurants)
    for (let item of results.restaurants) {
      const foodHTML = createResultHTML(item)
      renderRestaurant(foodHTML)
    }

  })

})

// print button
document.getElementById("printButton").addEventListener("click", function () {
  window.print();
})


 
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





concertSearchButton.addEventListener("click", () => {
    getConcertData(concertSelect.value)
        .then(concerts => {
            for (let concert of concerts._embedded.events) {
                let concertHTML = createResultsConcert(concert)
                renderConcert(concertHTML)
            }
    
    })
})


concertResultsInDOM.addEventListener("click", (event) => {
    if (event.target.tagName === 'BUTTON') {
        const button = event.target
        const concertTime = button.previousElementSibling
        const concertDate = concertTime.previousElementSibling
        const concertName = concertDate.previousElementSibling
        const concertItineraryName = concertName.innerText
        const concertItineraryDate = concertDate.innerText
        const concertItineraryTime = concertTime.innerText
        const concertItineraryHTML = createItineraryConcert(concertItineraryName, concertItineraryDate, concertItineraryTime)
        renderConcertItinerary(concertItineraryHTML)
    }
})



clearButton.addEventListener("click",()=>{

    concertResultsInDOM.innerText = ""
    parkResultsDOM.innerText = ""
    restaurantResults.innerText = ""
})

clearItineraryButton.addEventListener("click",()=>{

    concertItineraryReference.innerText = ""
    parkItineraryReference.innerText = ""
    restaurantItineraryReference.innerText = ""
})