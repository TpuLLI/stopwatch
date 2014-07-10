'use strict'
function TimerUi(timer) {

  TimerUi.prototype.buttonGo = function() {
    $(document).on('click', '.button_go', function() {
      if(timer.status == 'stopped') {
        timer.startTimer();
        $('.button_go').val('Pause');
      }
      else if(timer.status == 'paused') {
        timer.resumeTimer();
        $('.button_go').val('Pause');
      }
      else if(timer.status == 'playing') {
        timer.pauseTimer();
        $('.button_go').val('Resume');
      }
    });
  }

  TimerUi.prototype.rerenderTimer = function() {
    var timeObj = timer.secToHumanObj(timer.seconds);
    this.fillTimer(timeObj);
  };

  TimerUi.prototype.buttonReset = function() {
    var _this = this;
    $(document).on('click', '.button_reset', function() {
      timer.stopTimer();
      _this.fillTimer(timer.secToHumanObj(0));
      $('.button_go').val('Go');
      timer.status = 'stopped';
    });
  }

  TimerUi.prototype.fillTimer = function(timeObj) {
    $('.timer_seconds').text(timeObj.seconds);
    $('.timer_minutes').text(timeObj.minutes);
    $('.timer_hours').text(timeObj.hours);
  }
};

