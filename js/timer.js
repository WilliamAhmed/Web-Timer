			var hour=0, minute=0, second=0;
			var started = false;

			/*
			Simple onload to force an initial update of the Timer View
			*/
			window.onload = function() {
				reset();
			}

			/*
			Toggles the start/stop functionality to start/stop the timer
			*/
			function startStop() {
				started = !started;
				updateButtonText(started);
				timer();
			}

			/*
			Resets the Timer App
			*/
			function reset() {
				started = false;
				hour = 0;
				minute = 0;
				second = 0;
				updateTimerView();
				updateButtonText(false);
			}

			/*
			Function implementing the timer algorithm
			*/
			function timer() {
				if(started) {
					if(second < 59) {
						second++;
					} else {
						if(minute < 59) {
							minute++;
							
						} else {
							if(hour < 23) {
								hour++;
								minute = 0
							} else {
								startStop();
							}
						}
						second = 0;
					}
					updateTimerView();
					setTimeout(timer, 1000);
				}			
			}

			/*
			Updates the HTML view
			*/
			function updateTimerView() {
				document.getElementById('hour').innerHTML = formatNumber(hour);
				document.getElementById('minute').innerHTML = formatNumber(minute);
				document.getElementById('second').innerHTML = formatNumber(second);
			}

			/*
			Formats a number to a String value with a prefixed '0' if the value is below 10
			*/
			function formatNumber(number) {
				var result =  number < 10 ? "0" + number : "" + number;
				return result;
			}

			/*
			Updates the Start/Stop button with the correct text based on the state of the Timer
			*/
			function updateButtonText(startedBoolean) {
				var buttonText = startedBoolean ? 'Stop' : 'Start';
				document.getElementById('startStopButton').innerHTML = buttonText;
			}