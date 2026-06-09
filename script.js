function finder(){
    let text = document.getElementById("txt").value
    const symbols = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+"
    ,"[","]","{","}","|",";",":","<",".",">","/","?"," ", "–",",","'","—"]
            
    let symLess = ""
    let reverse = ""
    let par = ""
    
    if (text.length > 1){
        for (let i = 0; i < text.length; i++){
            if (!symbols.includes(text[i])){
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
    } else{
        par += "Sorry, your input is too short or you didn't put one in"
    }
    
    /*
    for (let i = 0; i < text.length; i++){
        if (!symbols.includes(text[i])){
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
    }*/

    console.log(par)
    document.getElementById("words").innerHTML = par;
}