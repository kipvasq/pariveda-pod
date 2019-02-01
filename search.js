$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode == '13'){
            var searchValue = document.getElementById("searchBar");
            var search = searchValue.value;
            var trigger = false;

            for(var i = 0; i < content.length; i++){
                if(search == "Bruce Ballengee"){
                  document.getElementById('myModal').style.display = "block";
                  trigger = true;
                } else if(search == "Pierre Nallet"){
                  document.getElementById("pierre").style.display = "block";
                  trigger = true;
                } else if(search == content[i].name){
                  if(content[i].address == undefined){
                    trigger = true;
                    setMapCenter(content[i].office);
                    openMarker(content[i].office);
                  } else{
                    trigger = true;
                    setMapCenter(content[i].address);
                    openMarker(content[i].name);
                  }
                }
            }

            if(!trigger){
                setMapCenter(search);
            }
      }
      return false;
    }
  });
});

// open individual marker if searched (and matches)
function openMarker(name){
    for(var i = 0; i < markers.length; i++){
        if(name == markers[i].title){
            hideAllMarkers();
            markers[i].infowindow.open(map, markers[i]);
        }
    }
}

// initalize autocomplete
function startAutoComplete(){
    var input = document.getElementById("searchBar");
    var currentFocus;

    // register input listener
    input.addEventListener("input", function(e){
        var a, b, i, val = this.value;

        // close any already open lists of autocompleted values
        closeAllLists();

        // empty entry value
        if (!val) { return false; };
        currentFocus = -1;

        // create a DIV element that will contain the items (values)
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");

        // append the DIV element as a child of the autocomplete container
        this.parentNode.appendChild(a);

        // for each element in content array (text placement)
        for (i = 0; i < content.length; i++) {
          //check if the item starts with the same letters as the text field value
          if (content[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            // create a DIV element for each matching element
            b = document.createElement("DIV");
            // make the matching letters bold
            b.innerHTML = "<strong>" + content[i].name.substr(0, val.length) + "</strong>";
            b.innerHTML += content[i].name.substr(val.length);
            // insert a input field that will hold the current array item's value
            b.innerHTML += "<input type='hidden' value='" + content[i].name + "'>";
            // execute a function when someone clicks on the item value (DIV element)
            b.addEventListener("click", function(e) {
                // insert the value for the autocomplete text field
                input.value = this.getElementsByTagName("input")[0].value;
                // close the list of autocompleted values, or any other open lists of autocompleted values
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    function closeAllLists(elmnt) {
      //close all autocomplete lists in the document, except the one passed as an argument
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != input) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    // execute a function presses a key on the keyboard
    input.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          // if the arrow DOWN key is pressed, increase the currentFocus variable
          currentFocus++;
          // and and make the current item more visible
          addActive(x);
        } else if (e.keyCode == 38) {
          // if the arrow UP key is pressed, decrease the currentFocus variable
          currentFocus--;
          // and and make the current item more visible
          addActive(x);
        } else if (e.keyCode == 13) {
          // if the ENTER key is pressed, prevent the form from being submitted
          //e.preventDefault();
          if (currentFocus > -1) {
            // and simulate a click on the "active" item
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      // a function to classify an item as "active"
      if (!x) return false;
      // start by removing the "active" class on all items
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      // add class "autocomplete-active"
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      // a function to remove the "active" class from all autocomplete items
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    // execute a function when someone clicks in the document
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}
