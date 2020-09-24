
//I initially did not understan how the code was comparing the words


//const str = 'table football';
//original has two words therefore those are the two input fields
 function RegExp() {
                var r_word1 = document.getElementById("word1").value; 
                var r_word2 = document.getElementById("word2").value; 
                var regex_word = RegExp(r_word1); 

                //onsole.log(regex.test(str));
                //how to compare?


                if (r_word1 === '')||(r_word2 =='') {
                    document.getElementById("result").value = 'Cant be empty'
                }  else {
                    document.getElementById("result").value = 'true';
                }   
            }