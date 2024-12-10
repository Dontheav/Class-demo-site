document.querySelector('button').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#555';
});

document.querySelector('button').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#333';
});