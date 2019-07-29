const restaurantSearchButton = document.querySelector("#restaurantSearchButton");
const restaurantResults = document.querySelector("#restaurantResults");
const restaurantSearch = document.querySelector("#restaurantSearch")
const foodSaveButton = document.querySelector("#foodSaveButton")

restaurantSearchButton.addEventListener("click", () => {
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