

const createResultHTML = (restaurants) => {
    return `
        <section>
            <h2>${restaurants.name}</h2>
            <p>${restaurants.address}</p>
            <button type="button" id="foodSaveButton">Save to Itinerary</button>
        </section>
    `

}

const createItineraryRestaurant = (name, address) => {
    return `
    <section>
        <h2>${name}</h2>
        <h3>${address}</h3>
    </section>
`
}

