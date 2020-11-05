// import React, { useState } from 'react';

// import { findVenueById } from '../utils/helpers';

// const useVenues = async id => {
//     const [venues, setVenues] = useState({});

//     const fetchVenue = (id) => {
//         const urlCall = `${URL}/${id}.json?${API_KEY}`;

//         try {
//             return await axios.get(urlCall, {
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded',
//                 },
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

// export default useVenues;