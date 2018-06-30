$(document).ready(function () {
  console.log("working");

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBIbgO5NOvtyoZqSR--pkeWpHAfBeKFix8",
    authDomain: "trainscheduler-18a5d.firebaseapp.com",
    databaseURL: "https://trainscheduler-18a5d.firebaseio.com",
    projectId: "trainscheduler-18a5d",
    storageBucket: "",
    messagingSenderId: "773159365008"
  };
  firebase.initializeApp(config);

  database = firebase.database();

  var trainName = '';
  var dest = '';
  var firstTrainTime = '';
  var freq = '';
  var timeConverted = '';
  var diffTime = '';
  



  $('#submit').on('click', function (event) {
    event.preventDefault();

    trainName = $('#trainName').val().trim();
    dest = $('#dest').val().trim();
    firstTrainTime = $('#firstTrainTime').val().trim();
    freq = $('#freq').val().trim();

    // Removes input info
    $('#trainName').val('');
    $('#dest').val('');
    $('#firstTrainTime').val('');
    $('#freq').val('');


    //Convert to HH:MM
    timeConverted = moment(firstTrainTime, "hh:mm").subtract(1, "years");
    //Converts the firsTimeConverted object into string

    // Current Time
    var currentTime = moment();
    diffTime = moment().diff(moment(timeConverted), "minutes");

    


  });









});