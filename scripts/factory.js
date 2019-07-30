
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
    const parkAddress = park.mapped_location.human_address
    return `
        <section class="results__section parks">
            <h3>${park.park_name}</h3>
            <h4>${parkAddress.replace('{"address": "', "").replace('", "city": "', ", ").replace('", "state": "', ", ").replace('", "zip": ""}', "").replace('{"address": "', "").replace('", "city": "', ", ").replace('", "state": "', ", ").replace('", "zip": ""}', "").replace('", "zip": "37206"}', "")
            .replace('", "zip": "37080"}', "").replace('", "zip": "37013"}', "").replace('", "zip": "37138"}', "").replace('", "zip": "37211"}', "")
            .replace('", "zip": "37212"}', "").replace('", "zip": "37205"}', "").replace('", "zip": "37027"}', "").replace('", "zip": "37214"}', "")
            .replace('", "zip": "37209"}', "").replace('", "zip": "37076"}', "").replace('", "zip": "37115"}', "")}</h4>
            <button type="button" id="parkSaveButton">Save to Itinerary</button> 
        </section>
    `
}

const createResultsConcert = (concert) => {
    return `
        <section class="results__section">
            <h3 class="results--name">${concert.name}</h3>
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



const createItineraryConcert = (name, date, time) => {
    return `
        <section>
            <h3>${name}</h3>
            <h4>${date}</h4>
            <p>${time}</p>
        </section>
    `
}