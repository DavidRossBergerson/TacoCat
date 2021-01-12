



document.getElementById("btnWord").addEventListener("click", function(){
    
    let word = document.getElementById("input3").value;
     
    let newWord =word.split("").reverse().join("");


    
    if(word == newWord){
        document.getElementById("output4").innerHTML = `${word} is a palindrome!`

        
    }else{

        document.getElementById("output4").innerHTML = `${word} is not a palindrome.`
    }
    
    document.getElementById("btnClear").addEventListener("click", function(){
      
        document.getElementById("input3").value = "";  
        document.getElementById('output4').innerText = "";
   
    
    });

});