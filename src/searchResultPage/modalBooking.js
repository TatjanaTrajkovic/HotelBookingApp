import { createModal } from "../utils/baseModal.js";
import { formatDate } from "../utils/helpers.js";
import { upDateRoomAndGuests } from "../api/bookRooms.js";


function handleBookNowClick(roomData){
    const { id, name, image, bookedDates } = roomData;
    const checkInDate = sessionStorage.getItem('checkInDate');
    const checkOutDate = sessionStorage.getItem('checkOutDate');

    createBookingModal({ id, name, image, bookedDates, checkInDate, checkOutDate });

}

function createBookingModal(roomData){
    const imagePath = `../../images/imageOfRooms/${roomData.image}`;

    createModal({
        id: 'bookingModal',
        title: `Book: ${roomData.name}`,
        bodyContent: `
            <div class="text-center">
                <img src="${imagePath}" alt="${roomData.name}" class="img-fluid mb-3">
                <p><b>Booked Dates: <b>From ${roomData.checkInDate} to ${roomData.checkOutDate}</p> 
            </div>
        `,
        footerButtons: [
            { type: "button", class: "btn-secondary", text:"Cancel", dataDismiss:"modal" },
            { type: "button", class: "btn-primary", text:"Confirm", dataDismiss:"modal" }
        ]
    });

    const modalElement = document.getElementById('bookingModal');

    const showListener = () => {
        const confirmButton = modalElement.querySelector('.btn-primary');
        if(confirmButton) {
            const confirmBookinListener = () => handleConfirmBooking(roomData);
            confirmButton.addEventListener('click', confirmBookinListener);

            const cleanUpListeners = () => {
                confirmButton.removeEventListener('click', confirmBookinListener);
                modalElement.removeEventListener('shown.bs.modal', showListener);
                modalElement.removeEventListener('hidden.bs.modal', cleanUpListeners)
            };
            modalElement.addEventListener('hidden.bs.modal', cleanUpListeners, { once: true });
        } else {
            console.error('Confirm button not found in DOM');
        }
    };


    modalElement.addEventListener('shown.bs.modal', showListener);
};

async function handleConfirmBooking(roomData){
    const { checkInDate, checkOutDate } = roomData;
    if(!checkInDate || !checkOutDate){
        console.error('Booking dates are missing in sesseionstorage');
        return;
    }

    const allDatesInRange = getDatesInRange(checkInDate, checkOutDate);
    console.log(allDatesInRange)
    await upDateRoomAndGuests(roomData, allDatesInRange);

    const modal = document.getElementById('bookingModal');
    const bootstrapModal = bootstrap.Modal.getInstance(modal);
    if(bootstrapModal){
        bootstrapModal.hide();
    }

    function getDatesInRange(checkInDate, checkOutDate){
        const start = new Date(checkInDate);
        const end = new Date(checkOutDate);
        const dateRange = [];

        for(let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)){
            dateRange.push(formatDate(date));
        }
        return dateRange;
    }
};


export {
    handleBookNowClick,
}


