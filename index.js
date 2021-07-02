$(document).ready(function(){
    $('#submit').click(function(){
        var user = $('#name').val();

        if(user == ""){
        $('#showerror').html('**The Username cannnot be empty**');
        $('#showerror').css('color','red','font weight','900');
        return false;
        }

        if((user.length <= 2) || (user.length >= 26) ) {     
            $('#showerror').html('**The Username must be between 3 and 25 letters**');
            $('#showerror').css('color','red','font weight','900');
            return false;
    }
        var pswd = $('#pwd').val();
        if(pswd == ""){
            $('#error2').html('**Password Cannot Be Empty**');
            $('#error2').css('color','red','font weight','900');
            return false;
        }
    });
});
