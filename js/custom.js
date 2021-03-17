    document.getElementById("btnWord").addEventListener("click", function(){
        let word2 = document.getElementById("input3").value;
    
        let reg = /[\W_]/g

    let word3 = word2.toLowerCase().replace(reg, "")
     
    let word5 = word3.split('').length

    word4 = word3.split('').reverse().join('');
    

        if(word5 == 0)
        {
            // document.getElementById("output4").innerHTML = `Please fill out field.`
        }

    else{if(word4 == word3){

        document.getElementById("output4").innerHTML = `${word2} is a palindrome!`
    
    }
    else
    {
        document.getElementById("output4").innerHTML = `${word2} is not a palindrome.`
    }
} 
   
    
    

});
document.getElementById("btnClear").addEventListener("click", function(){
        
    document.getElementById("input3").value = "";  
    document.getElementById('output4').innerText = "";

});

