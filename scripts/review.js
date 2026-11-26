let reviewCounts = Number(localStorage.getItem('reviewCounts')) || 0;
reviewCounts++

localStorage.setItem('reviewCounts', reviewCounts);
const displayCount = document.querySelector('#reviewCount');

displayCount.textContent = localStorage.getItem('reviewCounts');
