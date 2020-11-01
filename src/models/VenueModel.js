import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const URL = "https://app.ticketmaster.com/discovery/v2/venues"
const API_KEY = "apikey=5M5EkcsjMabTt7NcP2lF0exIIkdh3aA4"

class VenueModel {
    static async search(venue) {
        if (venue.includes(' ')) {
            venue = venue.split(' ').join('%20');
        }

        try {
            const response = await axios.get(`${URL}.json?${API_KEY}&keyword=${venue}`);
            return response.data._embedded.venues;
        } catch (err) {
            console.log(err);
        }
    }

    static async show(id) {
        const urlCall = `${URL}/${id}.json?${API_KEY}`;

        try {
            const response = await axios.get(urlCall);
            return response.data
        } catch (error) {
            console.log(error);
        }
    }
}

export default VenueModel;