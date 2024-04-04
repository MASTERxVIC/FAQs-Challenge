const card = document.querySelector('.card');
const uni = document.querySelectorAll('.uni');

let activeAnswer = null;

uni.forEach(uni => {
    const icon = uni.querySelector('.question img');
    const answer = uni.querySelector('.answer');

    uni.addEventListener('click', () => {
        if (icon.classList.contains('active')) {
            // If the clicked question is already active, deactivate it
            icon.classList.remove('active');
            icon.src = "./assets/images/icon-plus.svg"; // Change the icon to plus
            answer.style.maxHeight = null;
            card.style.height = "55vh"; // Reset card height to normal
            activeAnswer = null; // No active answer
        } else {
            // Deactivate the previously active question if any
            if (activeAnswer) {
                activeAnswer.querySelector('.question img').classList.remove('active');
                activeAnswer.querySelector('.question img').src = "./assets/images/icon-plus.svg"; // Change the icon to plus
                activeAnswer.querySelector('.answer').style.maxHeight = null;
            }

            // Activate the clicked question
            icon.classList.add('active');
            icon.src = "./assets/images/icon-minus.svg"; // Change the icon to minus
            answer.style.maxHeight = answer.scrollHeight + 'px';
            card.style.height = card.scrollHeight + 'px'; // Adjust card height to fit content with smooth transition
            activeAnswer = uni; // Update the active answer
        }
    });
});
