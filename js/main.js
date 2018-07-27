function drawRow(number) {
    var row = '';
    for(var i=1; i <= number ; i++) {
        row += '^';
    }
    return row;
}
$(document).ready(function(){
    $('#start').click(function(){
        var number = parseInt($('#input').val());
        var rows = [];
        var j = number;
        if(number > 0) {
            for(var i=1; i <= j; i++) {
                number = number - i;
                rows.push(i);
                if(number == 0){ 
                    break;
                }
                if(number < 0) {
                    $('#drawHere').html('<div class="row">Number incorrect :/</div>')
                    rows = [];
                    break;
                }
            }
        }
        if(rows.length > 0) {
            $('#drawHere').html('');
            rows.forEach(function(val){
                $('#drawHere').append('<div class="row">'+ drawRow(val) +'</div>');
            });
        }
    });
});

