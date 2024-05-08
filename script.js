document.addEventListener('DOMContentLoaded', () => {
    const commentBoxes = document.querySelectorAll('.comment-box');

    commentBoxes.forEach(box => {
        box.addEventListener('click', () => {
            box.classList.toggle('clicked');
        });
    });
});
