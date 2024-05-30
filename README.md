# Stopwatch App
This is a simple stopwatch application built using vanilla JavaScript and HTML with basic styling from Bootstrap.

## Features:
Start, stop, and reset functionality for the timer.
Displays the elapsed time in HH:MM:SS format.

## Requirements:
A modern web browser that supports JavaScript (tested with recent versions of Chrome, Firefox, and Edge).

## How to Use:
Download the HTML file (index.html) and the JavaScript file (script.js) to your local machine.
Open the HTML file in your web browser.
Click the "Start" button to begin the timer.
Click the "Stop" button to pause the timer.
Click the "Reset" button to set the timer back to 00:00:00.

## Implementation Details:
The HTML file defines the structure and layout of the stopwatch, including the timer display, buttons, and basic Bootstrap styling.
The JavaScript file (script.js) handles the core functionality of the stopwatch:
Tracks elapsed time using Date.now() and calculates the difference from a starting point.
Updates the timer display every second using setInterval().
Manages the state of the buttons (enabled/disabled) based on whether the timer is running, stopped, or reset.