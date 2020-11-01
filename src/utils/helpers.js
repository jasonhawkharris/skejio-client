import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const URL = "https://app.ticketmaster.com/discovery/v2/venues"
const API_KEY = "apikey=5M5EkcsjMabTt7NcP2lF0exIIkdh3aA4"

const searchVenues = async (venue) => {
    if (venue.includes(' ')) {
        venue = venue.split(' ').join('%20');
    }

    const urlCall = `${URL}.json?${API_KEY}&keyword=${venue}`;

    try {
        const response = await axios.get(urlCall);
        return response.data._embedded.venues;;
    } catch (error) {
        console.log(error);
    }
}

const findVenueById = async (venueId) => {
    const urlCall = `${URL}/${venueId}.json?${API_KEY}`;

    try {
        const response = await fetch(urlCall, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'mode': 'no-cors',
            },
        });
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export default findVenueById;
