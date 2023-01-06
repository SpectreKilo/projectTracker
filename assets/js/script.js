var sideBarEl = $('#side-bar');
var trackerEl = $('#tracker-section');
var projectFormButton = $('#project-form');



var currentDate = dayjs().format("MMM D, YYYY h:mm:ss");

$("#headerDT").text(currentDate);

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

projectFormButton.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})



// Autocomplete widget
$(function () {
    var ProjectTypes = [
        'front end',
        'back end',
        'mobile'
    ];
    $('#project-type').autocomplete({
      source: ProjectTypes,
    });
  });

// Datepicker widget
$(function () {
    $('#datepicker').datepicker({
      changeMonth: true,
      changeYear: true,
    });
  });