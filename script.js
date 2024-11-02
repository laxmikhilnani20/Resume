// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // Smooth scroll to the target element
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to display a modal with more information about research papers
function showPaperModal(paperTitle, paperDescription) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h3>${paperTitle}</h3>
            <p>${paperDescription}</p>
        </div>
    `;

    document.body.appendChild(modal);

    // Close modal when clicking the close button
    modal.querySelector('.close-button').addEventListener('click', () => {
        modal.remove();
    });

    // Close modal when clicking outside the modal content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Adding event listeners to research paper links
const paperLinks = document.querySelectorAll('.paper-link');
paperLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor click behavior
        const paperTitle = e.target.previousElementSibling.innerText; // Get paper title
        const paperDescription = e.target.parentElement.children[2].innerText; // Get paper description
        showPaperModal(paperTitle, paperDescription); // Show the modal
    });
});
