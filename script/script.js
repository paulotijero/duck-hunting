function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if( localStorage.clickcount < 9){
            if (localStorage.clickcount) {
                localStorage.clickcount = Number(localStorage.clickcount)+1;
            } else {
                localStorage.clickcount = 1;
            }
            document.getElementById("result").innerHTML =  localStorage.clickcount ;
        } else {
            alert("===CONGRATULATION===");
            restar();
        }
    }
}
function restar() {
    localStorage.clickcount = 0;
    location.reload();
}

$( ".pato1" ).click(function() {
    $( ".pato1" ).remove( );
});
$( ".pato2" ).click(function() {
    $( ".pato2" ).remove( );
});
$( ".pato3" ).click(function() {
    $( ".pato3" ).remove( );
});
$( ".pato4" ).click(function() {
    $( ".pato4" ).remove( );
});
$( ".pato5" ).click(function() {
    $( ".pato5" ).remove( );
});
$( ".pato6" ).click(function() {
    $( ".pato6" ).remove( );
});
$( ".pato7" ).click(function() {
    $( ".pato7" ).remove( );
});
$( ".pato8" ).click(function() {
    $( ".pato8" ).remove( );
});
$( ".pato9" ).click(function() {
    $( ".pato9" ).remove( );
});
$( ".pato10" ).click(function() {
    $( ".pato10" ).remove( );
});