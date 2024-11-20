
function addSearchBtnListener(){
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', function(event){
        event.preventDefault(); // ovaj event radi da bi ovo ispod funkcionisalo,bez ovog nece da otvori sledecu stranicu
        const checkInDate = document.getElementById('checkInDate').value;
        const checkOutDate = document.getElementById('checkOutDate').value;
        const numOfGuests = document.getElementById('numOfGuests').value;

        sessionStorage.setItem('checkInDate', checkInDate); //dodavanje u session storage
        sessionStorage.setItem('checkOutDate', checkOutDate);
        sessionStorage.setItem('numOfGuests', numOfGuests);

        window.location.href = 'src/searchResultPage/searchResult.html';
    });
}


export {
    addSearchBtnListener,
}