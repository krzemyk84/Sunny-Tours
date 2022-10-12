const hotelAdultBill = 60;
const hotelChildBill = 20;
const fareAdult = 210;
const fareChild = 110;

function startProgram() {

  readResults();
  function readResults() { 

    var howManyAdults = document.getElementById('adults').value;
    var howManyChildren = document.getElementById('children').value;
    console.log(adults.value,children.value);
    calculation(adults,children);
      function calculation () {
        
        var totalAdultHotel = howManyAdults * hotelAdultBill; //counts adults bill for the hotel  
        var totalChildrenHotel = howManyChildren * hotelChildBill; // counts children bill for the hotel
      
        var totalAdultFare = howManyAdults * fareAdult;
        var totalChildrenFare = howManyChildren * fareChild;
        var totalTotal = totalAdultFare + totalAdultHotel + totalChildrenFare + totalChildrenHotel;
        document.getElementById("results").innerHTML = totalTotal;
      }
    
  }
  
  
}
// startProgram ();


