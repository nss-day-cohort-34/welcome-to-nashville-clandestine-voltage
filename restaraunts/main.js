getRestaurantData().then((results) => {
    console.log(results.restaurants)
        for (const restaurant of results.restaurants) {
            // console.log(restaurant.restaurant.name )
            const foodHTML = createResultHTML(restaurant.restaurant)
            renderRestaurant(foodHTML)
        }
    })

