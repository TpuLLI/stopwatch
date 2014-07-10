describe("timer", function() {
  beforeEach(function(){
    this.timer = new Timer();
  })

  it('status should be stopped by default', function() {
    expect(this.timer.status).toBe('stopped');
  })

 it('seconds should be 0 by default', function() {
    expect(this.timer.seconds).toBe(0);
  })

  // it('status should be stopped by default!!!', function() {
  //   this.timer.startTimer();
  //   _this = this
  //   setTimeout(function() {
  //     expect(_this.timer.status).toBe('stopped');
  //   }, 2000)
  // })

 it('stop timer changes status to stopped', function() {
    this.timer.status = 'playing';
    this.timer.stopTimer();
    expect(this.timer.status).toBe('stopped');
  })

 it('stop timer changes seconds to 0', function() {
    this.timer.seconds = 50;
    this.timer.stopTimer();
    expect(this.timer.seconds).toBe(0);
  })

 it('secToObj should return time object', function() {
    var time = this.timer.secToObj(50);
    expect(time.seconds).toBe(50);
    expect(time.minutes).toBe(0);
    expect(time.hours).toBe(0);
  })


 it('secToObj should return time big object', function() {
    var time = this.timer.secToObj(5000);
    expect(time.seconds).toBe(20);
    expect(time.minutes).toBe(83);
    expect(time.hours).toBe(1);
  })

 it('pauseTimer should not change status without starting timer', function() {
    this.timer.pauseTimer();
    expect(this.timer.status).toBe('stopped');
  })

 it('pauseTimer should change status to paused', function() {
    this.timer.status = 'playing';
    this.timer.pauseTimer();
    expect(this.timer.status).toBe('paused');
  })

 it('resumeTimer should not change status without paused timer', function() {
    this.timer.resumeTimer();
    expect(this.timer.status).toBe('stopped');
  })

 it('resumeTimer should change status to playing', function() {
    this.timer.status = 'paused';
    this.timer.resumeTimer();
    expect(this.timer.status).toBe('playing');
  })

  it('secToHumanObj should return time object', function() {
    var time = this.timer.secToHumanObj(65);
    expect(time.seconds).toBe('05');
    expect(time.minutes).toBe('01');
    expect(time.hours).toBe('00');
  })
})
