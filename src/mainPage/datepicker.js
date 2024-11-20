import { formatDate } from "../utils/helpers.js";

function initDateInput(){
    const checkInInput = document.getElementById('checkInDate');
    const checkOutInput = document.getElementById('checkOutDate');
    let today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    console.log(today, tomorrow);

    const checkInCalendar = new Pikaday({ 
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
    
    const checkOutCalendar = new Pikaday({  
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

    checkInInput.value = formatDate(checkInCalendar.getDate());
    checkOutInput.value = formatDate(checkOutCalendar.getDate());

    function updateStartDate(checkInDate){
        checkInCalendar.setStartRange(checkInDate); 
        checkOutCalendar.setStartRange(checkInDate); 
        let nextDay = new Date(checkInDate);
        nextDay.setDate(nextDay.getDate() + 1);
        checkOutCalendar.setMinDate(nextDay);
        if(checkOutCalendar.getDate() < nextDay){
            checkOutCalendar.setDate(nextDay);
            checkOutInput.value = formatDate(nextDay);
        }
    }

    function updateEndDate(checkOutDate){
        checkInCalendar.setEndRange(checkOutDate); 
        checkOutCalendar.setEndRange(checkOutDate);
        checkInCalendar.setMaxDate(checkOutDate);

    }
};





export {
    initDateInput,

}














