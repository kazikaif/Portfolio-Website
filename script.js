const text1 = "Hello, I'm";
const text2 = "Mohammad Kaif";
let i = 0;
let j = 0;

function typeFirst() {
  if (i < text1.length) {
    document.getElementById("typing-text").innerHTML += text1.charAt(i);
    i++;
    setTimeout(typeFirst, 100);
  } else {
    setTimeout(typeSecond, 300);
  }
}

function typeSecond() {
  if (j < text2.length) {
    document.getElementById("typing-text2").innerHTML += text2.charAt(j);

    // Start photo animation after 3 characters
    if (j === 3) {
      document.querySelector(".photo").classList.add("show-photo");
    }

    j++;
    setTimeout(typeSecond, 100);
  } else {
    document.getElementById("resume-btn").classList.add("show");
  }
}

window.onload = () => {
  typeFirst();
};

// Animate sections when scrolled into view
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2
  }
);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
