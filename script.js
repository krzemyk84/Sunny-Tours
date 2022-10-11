const hotelAdultBill = 60;
const hotelChildBill = 20;
const fareAdult = 210;
const fareChild = 110;

const startProgram = () => { // function containing inputs and calculations
  var howManyAdults = prompt ("How many adults? "); //input number of adults
  var howManyChildren = prompt ("How many children? "); //input number of children

  var totalAdultHotel = howManyAdults * hotelAdultBill; //counts adults bill for the hotel  
  var totalChildrenHotel = howManyChildren * hotelChildBill; // counts children bill for the hotel

  var totalAdultFare = howManyAdults * fareAdult;
  var totalChildrenFare = howManyChildren * fareChild;
  
}
startProgram ();