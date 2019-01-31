
function setupModal(){
    // Get the modal
    var modal = document.getElementById('myModal');
    var pierre = document.getElementById('pierre');

    console.log(modal);

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    var span2 = document.getElementsByClassName("close")[1];

    // When the user clicks the button, open the modal 
    // btn.onclick = function() {
    //   modal.style.display = "block";
    // }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
      pierre.style.display = "none";
    }
    span2.onclick = function() {
        pierre.style.display = "none";
      }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    window.onclick = function(event) {
        if (event.target == modal) {
          pierre.style.display = "none";
        }
      }
}
