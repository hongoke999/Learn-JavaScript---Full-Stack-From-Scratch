document.addEventListener('click', (e) => {
    if (e.target.classList.contains("edit-me")) {
        let userInput = prompt("Enter you desired new text");
        axios.post('/update-item', {text: userInput}).then(() => {
            // do something interesting here in the next video
        }).catch(() => {
            console.log("Please try again later.");
        });
    }
});

