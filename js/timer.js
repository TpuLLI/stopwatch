'use strict'
function Timer() {
    // Timer.status can be in 3 states. stopped / paused / playing
    this.status = 'stopped',
    this.seconds = 0,
    this.interval,

    Timer.prototype.startTimer = function() {
      var _this = this;
      _this.status = 'playing';
      this.interval = setInterval(function() {
        if (_this.status == 'playing') {
          _this.seconds = _this.seconds + 1;
          app.timerUi.rerenderTimer();
        }
      }, 1000);
    };

    Timer.prototype.stopTimer = function() {
      clearInterval(this.interval);
      this.status = 'stopped';
      this.seconds = 0;
    };

    Timer.prototype.secToObj = function(seconds) {
      var time = {
        seconds: seconds%60,
        minutes: Math.floor(seconds/60),
        hours: Math.floor(seconds/3600)
      };
      return time;
    };

    Timer.prototype.pauseTimer = function() {
      if (this.status == 'playing') {
        this.status = 'paused';
      }
      else {
        console.warn('Please start timer first');
      }
    };

    Timer.prototype.resumeTimer =  function() {
      if (this.status == 'paused') {
        this.status = 'playing';
      }
      else {
        console.warn('Timer is not paused');
      }
    };

    Timer.prototype.secToHumanObj = function(seconds) {
      var time = this.secToObj(seconds);
      // TODO: Refactor to ternar operator
      if (time.seconds < 10) {
        time.seconds = '0' + time.seconds
      };
      if (time.minutes < 10) {
        time.minutes = '0' + time.minutes
      };
      if (time.hours < 10) {
        time.hours = '0' + time.hours
      };

      return time;
    }
};

