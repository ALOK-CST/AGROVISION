// Interactive Chart.js graph
const ctx = document.getElementById('priceChart').getContext('2d');
const priceChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'], // Example months
        datasets: [{
            label: 'Onion Price (in ₹)',
            data: [30, 40, 35, 50, 55, 60], // Example price data
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true, // Add color to under the line
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        animation: {
            duration: 2000, // Animation time for the chart
            easing: 'easeInOutBounce'
        }
    }
});

// Animations on scroll using GSAP (GreenSock Animation Platform)
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (sectionPosition < screenPosition) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Form submission animation
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form Submitted Successfully!');
});
