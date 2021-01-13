    document.getElementById("btnWord").addEventListener("click", function(){
    
    let word1 = document.getElementById("input3").value;
    let word = word1.toLowerCase()
     
    let newWord = word.split("").reverse().join("");


    
    if(word == newWord){

        document.getElementById("output4").innerHTML = `${word1} is a palindrome!`
    
    }else
    {
        document.getElementById("output4").innerHTML = `${word1} is not a palindrome.`
    }
    
        document.getElementById("btnClear").addEventListener("click", function(){
        
        document.getElementById("input3").value = "";  
        document.getElementById('output4').innerText = "";
   
    
    });

});



