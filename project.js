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




// $(document).off('.datepicker.data-api');

// $('.datepicker').datepicker({
//     format: 'mm/dd/yyyy',
//     startDate: '-3d'
// });
// $('.datepicker').datepicker({
//     startDate: '-3d'
// });
// $.fn.datepicker.defaults.format = "mm/dd/yyyy";
// $('.datepicker').datepicker({
//     startDate: '-3d'
// });
// var datepicker = $.fn.datepicker.noConflict(); // return $.fn.datepicker to previously assigned value
// $.fn.bootstrapDP = datepicker; 



