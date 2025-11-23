document.querySelector('.container').addEventListener('wheel', (e) => {
  e.preventDefault();
  e.currentTarget.scrollLeft += e.deltaY;
});
