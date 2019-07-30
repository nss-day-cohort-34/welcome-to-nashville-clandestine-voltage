
//Functions that create the HTML string for RESULTS, which will be added to the DOM


const createResultHTML = (restaurants) => {
    return `
        <section class="results__section">
            <h3>${restaurants.name}</h3>
            <h4>${restaurants.address}</h4>
            <button type="button" id="foodSaveButton">Save to Itinerary</button>
        </section>
    `
}


//address from Metro Parks object was returned as a string that LOOKED like it was an object, but wasnt'. We did not want to print to the DOM the "object". Below uses a series of .replace to target the individual characters needed to be removed. Had to string together a series of .replace to make this work. 

const createParkHTML = (park) => {
    const parkAddress = JSON.parse(park.mapped_location.human_address)
    return `
        <section class="results__section">
            <h3>${park.park_name}</h3>
            <h4>${parkAddress.address}</h4>
            <button type="button" id="parkSaveButton">Save to Itinerary</button> 
        </section>
    `
}


const createResultsConcert = (concert) => {
    return `
        <section class="results__section">
            <h3 class="results--name">${concert.name}</h3>
            <h4 class="results--venue">${concert._embedded.venues[0].name}</h4>
            <h4 class="results--date">${concert.dates.start.localDate}</h4>
            <p class="results--time">${concert.dates.start.localTime}</p>
            <button class="concertSaveButton">Save to Itinerary</button>
        </section>
`
}
//Functions that create the HTML string for ITINERARY items, which will be added to the DOM

const createItineraryRestaurant = (name, address) => {
    return `
    <section>
        <h3>${name}</h3>
        <h4>${address}</h4>
    </section>
`
}


const createItineraryPark = (name, address) => {
    return `
        <section>
            <h3>${name}</h3>
            <h4>${address}</h4>
        </section>
    `
}




const createItineraryConcert = (name, venue, date, time) => {
    return `
        <section>
            <h3>${name}</h3>
            <h4>${venue}</h4>
            <h4>${date}</h4>
            <p>${time}</p>
        </section>
    `
}