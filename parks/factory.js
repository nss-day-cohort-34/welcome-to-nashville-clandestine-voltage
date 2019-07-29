
const createParkHTML = (park) => {
    const parkAddress = park.mapped_location.human_address
    return `
        <section class="parks">
            <h1>${park.park_name}</h1>
            <h2>${parkAddress.replace('{"address": "', "").replace('", "city": "', ", ").replace('", "state": "', ", ").replace('", "zip": ""}', "").replace('{"address": "', "").replace('", "city": "', ", ").replace('", "state": "', ", ").replace('", "zip": ""}', "").replace('", "zip": "37206"}', "")
            .replace('", "zip": "37080"}', "").replace('", "zip": "37013"}', "").replace('", "zip": "37138"}', "").replace('", "zip": "37211"}', "")
            .replace('", "zip": "37212"}', "").replace('", "zip": "37205"}', "").replace('", "zip": "37027"}', "").replace('", "zip": "37214"}', "")
            .replace('", "zip": "37209"}', "").replace('", "zip": "37076"}', "").replace('", "zip": "37115"}', "")}</h2>
            <button type="button" id="parkSaveButton">Save to Itinerary</button> 
        </section>
    `
}

const createItineraryPark = (name, address) => {
    return `
        <section>
            <h2>${name}</h2>
            <h3>${address}</h3>
        </section>
    `
}