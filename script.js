function finder(){
    let text = document.getElementById("txt").value
    const letters = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M","1","2","3","4","5","6","7","8","9","0"]
            
    let symLess = ""
    let reverse = ""
    let par = ""

    function check(){
      for (let i = 0; i < text.length; i++){
          if (letters.includes(text[i])){
            symLess += text[i]
          }
        }
                
        for (let i = symLess.length - 1; i >= 0; i--){
          reverse += symLess[i]
        }
                
        if (reverse.toLowerCase() === symLess.toLowerCase()){
          par += text + " is a palindrome!"
        } else{
          par += text + " is NOT a palindrome!"
        }
    }

    if (text.length > 1){
      check()
    } else{
        par += "Sorry, your input is too short or you didn't put one in"
    }
    

    console.log(par)
    document.getElementById("words").innerHTML = par;
}



// Listen for key presses anywhere on the page
document.addEventListener('keydown', function(event) {
    // Standard property to read the key name
    //console.log(`Key pressed: ${event.key}`);
    
    // Check for a specific key (e.g., the Enter key)
    if (event.key === 'Enter') {
        finder()
    }
});
