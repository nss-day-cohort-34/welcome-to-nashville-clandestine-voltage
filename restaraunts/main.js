getRestaurantData().then((results) => {  
    filterData(results.restaurants)
    //for (const item of results.restaurants) {
            // const foodHTML = createResultHTML(restaurant.restaurant)
            // renderRestaurant(foodHTML)
         })
   




      // print button
document.getElementById("print").addEventListener("click",function() {
	window.print();
})