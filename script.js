$(document).ready(function () {
    let timeNow = moment().hour(), 
        dailyHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], 
        textAreaIdSlots = ["notes-info-9am", "notes-info-10am", "notes-info-11am", "notes-info-12pm", "notes-info-1pm", "notes-info-2pm", "notes-info-3pm",
                        "notes-info-4pm", "notes-info-5pm", "notes-info-6pm", "notes-info-7pm", "notes-info-8pm", "notes-info-9pm"];

    let currentDate = moment().format('dddd, MMMM Do YYYY');        
    $("#currentDate").text(currentDate);
    var saveBtn = $(".saveBtn");
    saveBtn.click(function () {
        // dailyHours.forEach(dailyHour => {
            // if(dailyHour === timeNow || dailyHour > timeNow) {
                // $(this).attr("class", "btn btn-success saveBtn");
                let saveBtnDataId = $(this).attr("data-id");
                let userNote = $("#" + "notes-info-" + saveBtnDataId).val();        
                localStorage.setItem("notes-info-" + saveBtnDataId, userNote);
            // }
        // });
    });

    function catergorizeTimeSlotsByColorCode() {
        let currentTime = timeNow, 
            calenderHours = dailyHours, 
            hourSlots = ["notes-info-9am", "notes-info-10am", "notes-info-11am", "notes-info-12pm", "notes-info-1pm", "notes-info-2pm", "notes-info-3pm",
                        "notes-info-4pm", "notes-info-5pm", "notes-info-6pm", "notes-info-7pm", "notes-info-8pm", "notes-info-9pm"]; 
            
        for (var i = 0; i < calenderHours.length; i++) {
            let currentHourSlot = $("#" + hourSlots[i]);
            currentHourSlot.val(localStorage.getItem(hourSlots[i]));
            
            if (calenderHours[i] < currentTime){
                // saveBtn.attr("class", "btn btn-secondary disabled saveBtn");

                currentHourSlot.css("background-color", "light grey");
                currentHourSlot.prop("disabled", true);
            } 
            else if (calenderHours[i] === currentTime) {
                // saveBtn.attr("class", "btn btn-danger saveBtn");
                currentHourSlot.css("color", "white");
                currentHourSlot.css("background-color", "#a30311");
            }
            else if (calenderHours[i] > currentTime) {
                // saveBtn.attr("class", "btn btn-primary saveBtn");
                currentHourSlot.css("color", "#525451");
                currentHourSlot.css("background-color", "#bff590");
            };
            
        };
    };

    catergorizeTimeSlotsByColorCode();
});