document.addEventListener('DOMContentLoaded', () => {
    let timerInterval;
    let seconds = 0;
    let isRunning = false;

    const timeDisplay = document.getElementById('timeDisplay');
    const startStopButton = document.getElementById('startStopButton');
    const resetButton = document.getElementById('resetButton');

    const updateTimeDisplay = () => {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        timeDisplay.textContent = `${hours}:${minutes}:${secs}`;
    };

    const startTimer = () => {
        timerInterval = setInterval(() => {
            seconds++;
            updateTimeDisplay();
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(timerInterval);
    };

    const resetTimer = () => {
        stopTimer();
        seconds = 0;
        updateTimeDisplay();
        startStopButton.textContent = 'Start';
        isRunning = false;
    };

    startStopButton.addEventListener('click', () => {
        if (isRunning) {
            stopTimer();
            startStopButton.textContent = 'Start';
        } else {
            startTimer();
            startStopButton.textContent = 'Stop';
        }
        isRunning = !isRunning;
    });

    resetButton.addEventListener('click', resetTimer);
});
