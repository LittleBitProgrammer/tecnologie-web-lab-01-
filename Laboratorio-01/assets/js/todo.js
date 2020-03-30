//counter
var number_of_notes = 0;

var el = document.getElementById("idName");
function findNChild(n){
return el.find(':nth-child(' + n + ')');
}

//ADD TODO
//submit pressed
$('#submit-button').on('click',()=>{

    //take value of input
    var input_value = $('#todoitemadd').val();
    //empty the input
    $('#todoitemadd').val('');
    //increment number of notes
    number_of_notes += 1;

    //add note
    $('#todos').append(`<li class="item"><a class="sticky-note position"><h2>Note #${number_of_notes}<span id="${number_of_notes}" class="delete-element ml-4">X</span></h2><p>${input_value}</p></a></li>`);

    //some log
    console.log('submit pressed');
    console.log(`Entered ${input_value}`);
    console.log(number_of_notes);
});

$('ul').on('click','.delete-element',function(event) {
    //remove element
    $(this).parent().parent().parent().remove();
    event.stopPropagation();

    //decrement number of notes
    number_of_notes -= 1;

        //iterate element
    $( "ul li h2" ).each(function( index ) {
        $( this ).html(`Note #${index + 1}<span id="${number_of_notes}" class="delete-element ml-4">X</span>`);
        $( 'ul li:nth-child(1) .item').addClass("first")
        $( 'ul li:nth-child(even) .item').addClass("even")
        $( 'ul li:nth-child(3n) .item').addClass("third")
        $( 'ul li:nth-child(5n) .item').addClass("fifth")
    });

   //todo update the number of the other

    console.log('delete pressed');
    console.log(number_of_notes);
})

//the form do not send nothing with this
$('#submit-button').click(function(e) {
    e.preventDefault();
});