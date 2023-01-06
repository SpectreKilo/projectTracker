var sideBarEl = $('#side-bar');
var trackerEl = $('#tracker-section');
var projectFormButton = $('#project-form');


var currentDate = dayjs().format("MMM D, YYYY h:mm:ss");

$("#headerDT").text(currentDate);

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})