

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
        return room.bookedDates.every(date => { 
            return date < checkInDate || date > checkOutDate; 
        }) 
    })
    return filteredRooms;
}

function filterByGuests(rooms, numOfGuests){
    let filteredRooms = rooms.filter(room => { 
        return room.maxOccupancy >= numOfGuests;
    })
    return filteredRooms;
}


export {
    fetchData,
}