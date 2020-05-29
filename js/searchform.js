window.onload = function() {fixSearchWrapper()};
window.onresize = function() {fixSearchWrapper()};

var flightDirRadios = document.getElementsByName('flightType');
for(var i = 0; i < flightDirRadios.length; i++) {
    flightDirRadios[i].addEventListener('change', function(){
        flightDirectionToggler(this.value);
    });
}

function fixSearchWrapper() {
    var wrapperHeight = document.getElementById('searchFormCont').clientHeight + 50 + "px";
    document.getElementById('searchFormWrapper').style.height = wrapperHeight;
}

function flightDirectionToggler(direction) {
    if(direction == "ow") {
        $("#searchSepCol").fadeOut();
        $("#searchReturnCol").fadeOut();
    } else {
        $("#searchSepCol").fadeIn();
        $("#searchReturnCol").fadeIn();        
    }
}
