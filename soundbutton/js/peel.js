//  JavaScript: Other Basic Techniques, Example 1
//  Function changes image when it is clicked
//
//  Copyright (c) Paul Griffiths, 2007
//  Email: mail@paulgriffiths.net

var newsrc = "peels/peel1.png";

function changeImage() {
  if ( newsrc == "peels/peel1.png" ) {
    document.images["r1"].src = "peels/peel1.png";
    document.images["r1"].alt = "Peel";
    newsrc  = "oranges/orange1.png";
  }
  else {
    document.images["r1"].src = "oranges/orange1.png";
    document.images["r1"].alt = "Orange";
    newsrc  = "peels/peel1.png";
  }
}