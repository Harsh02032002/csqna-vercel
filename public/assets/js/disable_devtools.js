devtoolsOpen = false;

element = new Image();
Object.defineProperty(element, 'id', {
    get: function() {
        devtoolsOpen = true;
        alert('Please do not use developer tools!');
        // You can also redirect or take other actions here
        window.location.href = 'about:blank'; // Example action
    }
});

// setInterval(() => {
//     devtoolsOpen = false;
//     console.log(element); // Accessing the element will trigger the getter if dev tools are open
// }, 1000);

document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        event.preventDefault();
    }
    // Disable F11 key
    if (event.key === 'F11') {
        event.preventDefault();
    }
    
    // Disable Esc key
    if (event.key === 'Escape') {
        event.preventDefault();
    }
});

// console.log = function() {};
// console.error = function() {};
// console.warn = function() {};


// if (document.documentElement.requestFullscreen) {
//     document.documentElement.requestFullscreen();
// } else if (document.documentElement.mozRequestFullScreen) { // Firefox
//     document.documentElement.mozRequestFullScreen();
// } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
//     document.documentElement.webkitRequestFullscreen();
// } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
//     document.documentElement.msRequestFullscreen();
// }

// document.addEventListener('fullscreenchange', () => {
//     if (!document.fullscreenElement) {
//         // User has exited fullscreen
//         alert('You have exited fullscreen. Submitting your test.');
//         // Call your submit function here
//         submitTest();
//     }
// });

// function submitTest() {
//     // Logic to submit the test
//     console.log('Test submitted!');
//     // You can redirect to a submission page or perform an AJAX request
// }