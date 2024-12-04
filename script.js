console.log('Merde')

// Timer

var timer = new Timer({
     tick : 1,
     ontick : function (sec) {
          console.log('interval', sec);
     },
     onstart : function() {
          console.log('timer started');
     }
     });

     // defining options using on
     timer.on('end', function () {
     console.log('timer ended');
     this.start(4).off('end');
     });

     //start timer for 10 seconds
     timer.start(10);

// Random Player

