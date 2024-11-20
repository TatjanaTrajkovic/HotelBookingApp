import { initDateInput } from "./datepicker.js";
import { initUserEntry, toggleUserEntry } from "./modalUserEntry.js";
import { addSearchBtnListener } from "./searchBtn.js";

document.addEventListener('DOMContentLoaded', function (){
    const carousel = new bootstrap.Carousel('#carouselExampleIndicators',{
        interval: 3000,
        ride: 'carousel'

    });

    initDateInput();
    addSearchBtnListener();
    initUserEntry();
    toggleUserEntry();
})



