
const createParkHTML = (park) => {
    const parkAddress = park.mapped_location.human_address
    return `
        <section class="parks">
            <h1>${park.park_name}</h1>
            <h2>${parkAddress.replace('{"address": "', "").replace('", "city": "', ", ").replace('", "state": "', ", ").replace('", "zip": ""}', "")}</h2>
            <button type="button" id="parkSaveButton">Save to Itinerary</button> 
        </section>
    `
}