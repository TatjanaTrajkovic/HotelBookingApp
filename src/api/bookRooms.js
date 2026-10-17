import { updateRoom, getUser, updateUser } from "./db.js";
async function upDateRoomAndGuests(roomData, dates){
    const { id, bookedDates } = roomData;
    const updatedBookedDates = [...bookedDates, ...dates].sort((a, b) => {
        return new Date(a) - new Date(b);
    });
    await updateRoom(id, { bookedDates: updatedBookedDates });

    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    currentUser = await getUser(currentUser.id);
    if(currentUser){
        const userBooking = currentUser.bookings.find(booking => booking.roomId === id);
        if(userBooking){
            userBooking.bookedDates = [...userBooking.bookedDates, ...dates].sort((a, b) => {
                return new Date(a) - new Date(b);
            });
        } else{
            currentUser.bookings.push({ 
                roomId: id,
                roomName: roomData.name,
                bookedDates: dates.sort((a, b) => {
                    new Date(a) - new Date(b)
                })    
            })
        }
        await updateUser(currentUser.id, { bookings: currentUser.bookings });
        sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
        alert('Booking succesful! Your booking has been confirmed. Thank you for choosing us!');
    }
};

export {
    upDateRoomAndGuests
}
