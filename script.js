

        function countChars(obj){
            var maxLength = 120;
            var strLength = obj.value.length;
            var charRemain = (maxLength - strLength);
            
            
            if (charRemain < 0){
                
                document.getElementById('charNum').innerHTML = '<span style="color:red;">You have exceeded the limit of 120 characters</span>';
            }else{
                document.getElementById('charNum').innerHTML = charRemain+' characters remaining';
                }
  }
    
var changeFontStyle = function (font) {
        document.getElementById(
            "output-text").style.fontFamily
                    = font.value;
    }


/* plate colors */


function changePlateStyleGoldBlack() {
  document.getElementById("output-text").style.backgroundColor = "#AC8A59";
  
  document.getElementById(
            "output-text").style.color
                    = "#2E2624"
}

function changePlateStyleBlackGold() {
  document.getElementById("output-text").style.backgroundColor = "#0D0C08";
  
  document.getElementById(
            "output-text").style.color
                    = "#CCAC78"
}

function changePlateStyleBlackSilver() {
  document.getElementById("output-text").style.backgroundColor = "#0D0C08";
  
  document.getElementById(
            "output-text").style.color
                    = "#AFA9A4"
  
  
}

// Alert for receipt number
function receiptAlert() {
    alert("good");
};

