document.addEventListener("DOMContentLoaded", function () {
    let timer;

    const hour = document.querySelector(".timings-hours");
    const min = document.querySelector(".timings-minutes");
    const sec = document.querySelector(".timings-seconds");

    const StartButton = document.querySelector(".start");
    const StopButton = document.querySelector(".stop");
    const ResetButton = document.querySelector(".reset");

    if (StartButton && StopButton && ResetButton) {
        StartButton.addEventListener('click', () => {
            let hours = parseInt(hour.value) || 0;
            let minutes = parseInt(min.value) || 0;
            let seconds = parseInt(sec.value) || 0;

            const totalSeconds = hours * 3600 + minutes * 60 + seconds;

            if (totalSeconds === 0) {
                alert("Please set a non-zero time.");
            } else {
                // Disable input fields while the timer is running
                hour.disabled = true;
                min.disabled = true;
                sec.disabled = true;

                timer = setInterval(() => {
                    if (totalSeconds > 0) {
                        totalSeconds--;
                        updateDisplay(totalSeconds);
                    } else {
                        clearInterval(timer);
                        // Enable input fields when the timer finishes
                        hour.disabled = false;
                        min.disabled = false;
                        sec.disabled = false;
                    }
                }, 1000);
            }
        });

        StopButton.addEventListener('click', () => {
            clearInterval(timer);
            // Enable input fields when the timer is stopped
            hour.disabled = false;
            min.disabled = false;
            sec.disabled = false;
        });

        ResetButton.addEventListener('click', () => {
            clearInterval(timer);
            hour.value = "";
            min.value = "";
            sec.value = "";
            // Enable input fields when the timer is reset
            hour.disabled = false;
            min.disabled = false;
            sec.disabled = false;
        });
    }

    function updateDisplay(totalSeconds) {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        hour.value = String(hours).padStart(2, '0');
        min.value = String(minutes).padStart(2, '0');
        sec.value = String(seconds).padStart(2, '0');
    }
});
