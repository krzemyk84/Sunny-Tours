const hotelAdultBill = 60;
const hotelChildBill = 20;
const fareAdult = 210;
const fareChild = 110;

function startProgram() {

  readResults();
  function readResults() { 

    var howManyAdults = document.getElementById('adults').value; //getting value from input box "adults"
    var howManyChildren = document.getElementById('children').value; //getting value from input box "children"
    console.log(adults.value,children.value); //checking if values are correctly imported
    calculation();
      function calculation () {
        
        var totalAdultHotel = howManyAdults * hotelAdultBill; //counts adults bill for the hotel  
        var totalChildrenHotel = howManyChildren * hotelChildBill; // counts children bill for the hotel
      
        var totalAdultFare = howManyAdults * fareAdult;
        var totalChildrenFare = howManyChildren * fareChild;
        var totalTotal = totalAdultFare + totalAdultHotel + totalChildrenFare + totalChildrenHotel;
        document.getElementById("results").innerHTML = "The total cost will be:" + "£" + totalTotal;
      }
    
  }
  
  
}
// startProgram ();


