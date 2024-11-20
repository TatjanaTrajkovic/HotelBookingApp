import { fetchData } from "../api/search.js";
import { createCard } from "./card.js";

document.addEventListener('DOMContentLoaded', async function(){
    const checkInDate = sessionStorage.getItem('checkInDate');
    const checkOutDate = sessionStorage.getItem('checkOutDate');
    const numOfGuests = sessionStorage.getItem('numOfGuests');
    const rooms = await fetchData(checkInDate, checkOutDate, numOfGuests);

    createCards(rooms);
    updateBookNowButtons();

    function createCards(rooms){
        const cardContainer = document.querySelector('.card-container');
        rooms.forEach(room => {
            const card = createCard(room);
            console.log(card);
            cardContainer.appendChild(card);
            
        });
    }

    function updateBookNowButtons(){
        const currentUser = sessionStorage.getItem('currentUser');
        const bookNowButtons = document.querySelectorAll('.book-now-button');

        console.log('Current User:', currentUser);
        console.log('Book Now Buttons:', bookNowButtons);

        bookNowButtons.forEach(button => {
            if(currentUser){
                console.log('User is signed in!');
                button.disabled = false;
                button.textContent = 'Book Now';
            } else {
                console.log('User is not signed in!');
                button.disabled = true;
                button.textContent = 'Sign in to book';
            }
        });
    }

});









