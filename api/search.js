

async function fetchData(checkInDate, checkOutDate, numOfGuests){
    try{
        const response = await fetch('http://localhost:3000/rooms');
        const result = await response.json();
        const filtRooms = filteredData(result, checkInDate, checkOutDate, numOfGuests);
        return filtRooms;
    } catch(e) {
        console.error(e);
    }

}

function filteredData(rooms, checkInDate, checkOutDate, numOfGuests){
    let filteredRooms = rooms;
    filteredRooms = filterByDate(filteredRooms, checkInDate, checkOutDate);
    filteredRooms = filterByGuests(filteredRooms, numOfGuests);
    return filteredRooms;
}

function filterByDate(rooms, checkInDate, checkOutDate){
    let filteredRooms = rooms.filter(room => {
        return room.bookedDates.every(date => { // ide kroz condition/uslov i prolazi kroz svaki element u nizu ako jedan element ne ispunjava uslov on vraca false ali ako svaki element ispunjava on vraca true
            return date < checkInDate || date > checkOutDate; // true/false, gleda da li je cekindate i checkoutdate u ovom intervalu vec bukiran
        }) 
    })
    return filteredRooms;
}

function filterByGuests(rooms, numOfGuests){
    let filteredRooms = rooms.filter(room => { // vraca samo true
        return room.maxOccupancy >= numOfGuests;
    })
    return filteredRooms;
}


export {
    fetchData,
}