//Filter function for search
const search = document.getElementById('search');

search.addEventListener('keyup', e => {
    let searchValue = e.target.value.toLowerCase();
    let galleryImgs = document.querySelectorAll('.photo a');
    
    galleryImgs.forEach(galleryImg => {
        const caption = galleryImg.getAttribute('data-caption');
        
        if(caption.toLowerCase().includes(searchValue)) {
            galleryImg.parentNode.style.display = 'block';
        } else {
            galleryImg.parentNode.style.display = 'none';
        }
    });
});
