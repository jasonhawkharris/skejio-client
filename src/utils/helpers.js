import axios from 'axios';
// import _ from 'lodash';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const URL = "https://app.ticketmaster.com/discovery/v2/venues"
const API_KEY = "apikey=5M5EkcsjMabTt7NcP2lF0exIIkdh3aA4"

export const searchVenues = async (venue) => {
    if (venue.includes(' ')) {
        venue = venue.split(' ').join('%20');
    }

    const urlCall = `${URL}.json?${API_KEY}&keyword=${venue}`;

    try {
        return axios.get(urlCall);
    } catch (error) {
        console.log(error);
    }
}


export const findVenueById = async (venueId) => {
    const urlCall = `${URL}/${venueId}.json?${API_KEY}`;

    try {
        return await axios.get(urlCall, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
    } catch (error) {
        console.log(error);
    }
}

export const formatDate = (theDate, human = true, hasYear = false) => {
    let date = theDate.split('T')[0].split('-');
    let year = date[0];
    let month = date[1];
    let day = date[2];

    if (!human) return `${month}-${day}-${year}`;

    return !hasYear ?
        `${getMonth(parseInt(month))} ${day}` :
        `${getMonth(parseInt(month))} ${day}, ${year}`
}

export const formatCreatedDate = (theDate) => {
    let arr = theDate.split('T');
    let date = arr[0].split('-');
    let time = arr[1].split(':');
    let month = date[1];
    let day = date[2];
    let year = date[0];
    let hour = time[0];
    let minute = time[1];
    let newDate = `${getMonth(parseInt(month))} ${day}, ${year}`
    let newTime = `${hour}:${minute}`

    return newDate + ' at ' + newTime;
}


const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


const getMonth = month => {
    return months[month - 1];
}


export const getYN = bool => {
    return bool ? 'yes' : 'no';
}

export const getTime = str => {
    let time = str.split('T')[1];
    let div = time.split(':');
    let ampm;
    let hour = div[0];
    let minute = div[1];
    if (hour > 12) {
        hour = hour - 12;
        ampm = 'PM';
    } else {
        ampm = 'AM';
    }
    return `${hour}:${minute} ${ampm}`
}