var app = {};
app.timer = new Timer();
app.timerUi = new TimerUi(app.timer);
app.timerUi.buttonGo();
app.timerUi.buttonReset();


// ================================================================

$('body').append("\
  <div class='tabs_controls'>\
    <div class='tab' data-id='1'>1TAB</div>\
    <div class='tab' data-id='2'>2TAB</div>\
    <div class='tab' data-id='3'>3TAB</div>\
  </div>\
");
$('body').append("\
  <div class='tabs'>\
    <div class='red tabb' data-id='1'></div>\
    <div class='blue tabb' data-id='2'></div>\
    <div class='green tabb' data-id='3'></div>\
    </div>\
");

$(document).on('click', '.tab', function(ev){
  var id = $(ev.target).data('id');
  console.log(id);
  $('.tabb').hide();
  $(".tabb[data-id='" + id + "']").show();
})


