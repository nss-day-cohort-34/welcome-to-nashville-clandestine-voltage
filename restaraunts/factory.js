const filterData = (results) => {
    console.log(results)
    results.forEach(element => {
        console.log(element.restaurant.cuisines)
        // if (element.restaurant.cuisines.includes("Burger")) {
        //     console.log("yep almost there")
        //     console.log(element)
          
        // }
    });

}

const createResultHTML = (restaurants) => {
    return `
        <section>
            <h2>${restaurants.restaurant.name}</h2>
            <p>${restaurants.restaurant.cuisines}</p>
            <p>${restaurants.restaurant.location.address}</p>
        </section>
    `
    
    }


