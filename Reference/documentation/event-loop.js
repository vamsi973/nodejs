// my file name is loop.js start here
loop.myContext();


function shouldContinue() {
    // 1) node looks at pending timers and sees if any functions are ready to be called. setTimeout,setIntervel
    // 2) node looks at pendingOsTasks and pendingOperations and calls relvent callbacks.
    // 3) pause execution. continue when
    //          --a new pendingOsTask is done
    //          --a new pendingOperation is done
    //          --a timer is about to complete
    // 4) look at pendingTimers. call any setImmediate
    // 5) Handle any 'close' events

}

// entire body executes in one 'tick'
while (shouldContinue()) {

}


//my file name is loop.js ends here