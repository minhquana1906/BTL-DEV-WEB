document.querySelectorAll('.img-container .image img').forEach(image => {
    image.onclick = () => {
        document.querySelector('#popup-overlay').style.display = 'block';
        document.querySelector('#popup-overlay img').src = image.getAttribute('src');
    }
});

document.querySelector('#popup-overlay .overlay').onclick = () => {
    document.querySelector('#popup-overlay').style.display = 'none';
}