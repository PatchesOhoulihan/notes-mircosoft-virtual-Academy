var query = document.querySelector.bind();

// $(document).ready(function(){
//     console.log('jQuery up and running!? '+ jQuery);
//     $('#exe').click(function(){
//         alert('Hier kommt die Sonne ' +  $('#query').val());
//         localStorage.setItem('queryResult',  $('#query').val());
//     })});
    function writeInput(){
         localStorage.setItem('queryResult',  $('#query').val());
    }
    function initResult(){
        var mytext = localStorage.getItem("queryResult");
        // alert("This stands in mytext: " +mytext);
        $('#result').text(mytext);
        console.log("doing something cool");
    }

    console.log('Just doing my thing');
