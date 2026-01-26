
// Scroll Animation
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});

// Slider Logic
const sliderStates = {};

function moveSlider(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    const track = slider.querySelector('.slider-track');
    const slides = track.querySelectorAll("img").length;

    if (!(sliderId in sliderStates)) {
        sliderStates[sliderId] = 0;
    }

    sliderStates[sliderId] += direction;

    // wrap around
    if (sliderStates[sliderId] < 0) {
        sliderStates[sliderId] = slides - 1;
    } else if (sliderStates[sliderId] >= slides) {
        sliderStates[sliderId] = 0;
    }

    track.style.transform = `translateX(-${sliderStates[sliderId] * 100}%)`;
}

function resetSlider(sliderId) {
    const slider = document.getElementById(sliderId);
    if (!slider) return;

    const track = slider.querySelector('.slider-track');
    sliderStates[sliderId] = 0;
    track.style.transform = "translateX(0)";
}
