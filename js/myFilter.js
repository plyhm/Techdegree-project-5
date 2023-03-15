
const search = document.getElementById('search');

search.addEventListener('keyup', e => {
    let searchValue = e.target.value.toLowerCase();
    let galleryImgs = document.querySelectorAll('.photo a');
    
    galleryImgs.forEach(galleryImg => {
        const caption = galleryImg.getAttribute('data-caption');
        
        if(caption.toLowerCase().includes(searchValue)) {
            galleryImg.style.display = 'block';
        } else {
            galleryImg.style.display = 'none';
        }
    });
});
