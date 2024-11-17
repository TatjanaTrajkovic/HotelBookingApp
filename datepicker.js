import { formatDate } from "./utils/helpers.js";

function initDateInput(){
    const checkInInput = document.getElementById('checkInDate');
    const checkOutInput = document.getElementById('checkOutDate');
    let today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    console.log(today, tomorrow);

    const checkInCalendar = new Pikaday({  //ovo unutar viticastih su argumenti za fromdatecalender
        field: checkInInput,
        format: "YYYY-MM-DD",
        defaultDate: today,
        setDefaultDate: true,
        minDate: today,
        onSelect: function(date){
            const selectedDate = this.getDate();
            checkInInput.value = formatDate(selectedDate);
            updateStartDate(selectedDate);
        }
    })
    
    const checkOutCalendar = new Pikaday({  //ovo unutar viticastih su argumenti za fromdatecalender
        field: checkOutInput,
        format: "YYYY-MM-DD",
        defaultDate: tomorrow,
        setDefaultDate: true,
        minDate: tomorrow,
        onSelect: function(date){
            const selectedDate = this.getDate();
            checkOutInput.value = formatDate(selectedDate);
            updateEndDate(selectedDate);
        }
    });

    // updateStartDate(checkInCalendar.getDate());
    checkInInput.value = formatDate(checkInCalendar.getDate());
    checkOutInput.value = formatDate(checkOutCalendar.getDate());

    function updateStartDate(checkInDate){
        checkInCalendar.setStartRange(checkInDate); // ovo je start za check in calendar
        checkOutCalendar.setStartRange(checkInDate);   // ovo je start za check out calendar
        let nextDay = new Date(checkInDate);
        nextDay.setDate(nextDay.getDate() + 1);
        checkOutCalendar.setMinDate(nextDay);
        if(checkOutCalendar.getDate() < nextDay){
            checkOutCalendar.setDate(nextDay);
            checkOutInput.value = formatDate(nextDay);
        }
    }

    function updateEndDate(checkOutDate){
        checkInCalendar.setEndRange(checkOutDate); // ovo je end za check in calendar
        checkOutCalendar.setEndRange(checkOutDate);   // ovo je end za check out calendar
        checkInCalendar.setMaxDate(checkOutDate);

    }
};





export {
    initDateInput,

}














