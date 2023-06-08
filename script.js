

  //       function countChars(obj){
  //           var maxLength = 120;
  //           var strLength = obj.value.length;
  //           var charRemain = (maxLength - strLength);
            
            
  //           if (charRemain < 0) {
                
  //               document.getElementById('charNum').innerHTML = '<span style="color:red;">You have exceeded the limit of 120 characters</span>';
  //           }

  //           else {
  //               document.getElementById('charNum').innerHTML = 'You have '+charRemain+' characters remaining';
  //               }
  // }


    
var changeFontStyle = function(font) {
        document.getElementById("output-text").style.fontFamily = font.value;
    }


/* plate colors */


function changePlateStyleGoldBlack() {
  document.getElementById("output-text").style.backgroundColor = "#AC8A59";
  
  document.getElementById("output-text").style.color = "#2E2624";

}

function changePlateStyleBlackGold() {
  document.getElementById("output-text").style.backgroundColor = "#0D0C08";
  
  document.getElementById("output-text").style.color = "#CCAC78"
}

function changePlateStyleBlackSilver() {
  document.getElementById("output-text").style.backgroundColor = "#0D0C08";
  
  document.getElementById("output-text").style.color = "#AFA9A4"; }



// Cost Calculator

      function calculateCost() {
        // Get the textarea element and the content typed by the user
        var textarea = document.getElementById("output-text");
        var content = textarea.value;
  
        // Split the content into lines
        var lines = content.split(/\r\n|\r|\n/);
  
        // Filter out empty lines
        var nonEmptyLines = lines.filter(function(line) {
          return line.trim() !== "";
        });
  
        // Calculate the total cost based on the number of non-empty lines
        var cost = nonEmptyLines.length * 3;
  
        // Display the total cost in a separate element
        document.getElementById("total").textContent = "$" + cost.toFixed(2);
  
        // Display the line count in a separate element
        document.getElementById("lineCount").textContent = nonEmptyLines.length;
      }








      // Directions for design bounce

// Get the reference to the element
const title = document.querySelector('.bounce');

// Function to check if the element is in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}



// Function to add the animation classes
function startAnimation() {
  title.classList.add('animated', 'fade-in');
}

// Function to remove the animation classes
function stopAnimation() {
  title.classList.remove('animated', 'fade-in');
}

// Event listener for scroll event
window.addEventListener('scroll', () => {
  if (isElementInViewport(title)) {
    startAnimation();
    setTimeout(stopAnimation, 5000); // Stop animation after 5 seconds
  }
});




// Plate size adjustment

function changeWidth() {
  var textarea = document.getElementById('output-text');
  var currentWidth = textarea.offsetWidth;
  var newWidth = currentWidth + 72;
  textarea.style.width = newWidth + 'px';
}

function changeHeight() {
  var textarea = document.getElementById('output-text');
  var currentHeight = textarea.offsetHeight;
  var newHeight = currentHeight + 72;
  textarea.style.height = newHeight + 'px';
}

// Update textarea size when the window is resized
window.addEventListener('resize', updateTextAreaSize);




// Code for generating plate material cost
var squareInchPrice = 0.45;

function updateTextAreaSize() {
  var widthInput = document.getElementById('widthInput');
  var heightInput = document.getElementById('heightInput');
  var textarea = document.getElementById('output-text');
  var squareInchesInput = document.getElementById('squareInches');
  var totalCostInput = document.getElementById('totalCost');

  var width = parseFloat(widthInput.value);
  var height = parseFloat(heightInput.value);

  if (!isNaN(width) && !isNaN(height)) {
    var squareInches = width * height;
    var totalCost = squareInches * squareInchPrice;

    textarea.style.width = width * 72 + 'px';
    textarea.style.height = height * 72 + 'px';
    // it was 97 x 97 px

    squareInchesInput.value = squareInches.toFixed(2);
    totalCostInput.value = totalCost.toFixed(2);
  } else {
    textarea.style.width = '';
    textarea.style.height = '';
    squareInchesInput.value = '';
    totalCostInput.value = '';
  }
}

function resetSquareInchPrice() {
  squareInchPrice = 0.45;
  updateTextAreaSize();
}


function changeSquareInchPrice() {
  squareInchPrice = 0.35;
  updateTextAreaSize();
}








// Placeholder Text Color Change
function changePlaceholderColor(color) {
  var textarea = document.getElementById('output-text');
  document.documentElement.style.setProperty('--placeholder-color', color);
   

function checkNumber(event) {
  var aCode = event.which ? event.which : event.keyCode;
  if (aCode > 31 && (aCode < 48 || aCode > 57)) return false;

return true;
}





}