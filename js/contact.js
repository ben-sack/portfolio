// $('.contact__form').on('submit', function(e)
// {
//     e.preventDefault(); //this stops the form submit + refresh 

//         $.ajax({ 
//             data:    {data_field: 'value'},
//             type:    'post',
//             url:     'db/submit.php',
//             success: function(r) {$('.popup').addClass('open-popup')},
//             error:   function(r) {alert('error'); console.log(r)}
//         });
// });

var popup = $(".popup");
var btn = $("#form__btn");
// var close_btn = $("#close__btn")


// $(function() {
//     $('form').validate()

//     $( "form" ).on( "submit", function(e) {
    
//         var dataString = $(this).serialize();
        
//         // alert(dataString); return false;
    
//         $.ajax({
//         type: "POST",
//         url: "bin/process.php",
//         data: dataString,
//         success: function () {
//             $(".contact__form").html("<div id='message'></div>");
//             $("#message")
//             .html("<h2>Contact Form Submitted!</h2>")
//             .append("<p>We will be in touch soon.</p>")
//             .hide()
//             .fadeIn(1500, function () {
//                 $("#message").append(
//                 "<img id='checkmark' src='images/check.png' />"
//                 );
//             });
//         }
//         });
    
//         e.preventDefault();
//     });
//     });


// $(document).ready(function(){
//     // When the user clicks the button, open the modal 
//     btn.on('click', function() {
//         popup.addClass("open-popup");
//     });
    
//     // When the user clicks on <span> (x), close the popup
//     // close_btn.on('click', function() {
//     //     popup.hide();
//     // });
// });

// // When the user clicks anywhere outside of the popup, close it
// $('body').bind('click', function(e){
//     if($(e.target).hasClass("popup")){
//         popup.hide();
//     }
// });

// $(document).ready(function(){
//     $('.contact__form').submit(function(e){
//         e.preventDefault();
//         $('.popup').css('opacity', '0.5');
//         $('.btn').prop('disabled', true);
        
//         $form = $(this);
//         $.ajax({
//             type: "POST",
//             url: 'db/submit.php',
//             data: 'contact_submit=1&'+$form.serialize(),
//             dataType: 'json',
//             success: function(response){
//                 if(response.status == 1){
//                     $('contact__form')[0].reset();
//                     $('.response').html('<div class="alert alert-success">'+response.message+'</div>');
//                 }else{
//                     $('.response').html('<div class="alert alert-danger">'+response.message+'</div>');
//                 }
//                 $('.popup').css('opacity', '');
//                 $('.btn').prop('disabled', false);
//             }
//         });
//     });
// });
