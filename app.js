// query Selectors:
const galleryActive = document.querySelector('.gallery-active');
const thumbnails = document.querySelectorAll('.thumbnail');
const thumbnailArray = Array.from(thumbnails);
let activeImage;
let timer;
const timingInterval = 2500;

// auto rotation function:
function autoRotateImage(){
    timer = setInterval(function(){
        console.log('looking for next active');
        // console.log('counting seconds')
        activeImage = document.querySelector('.thumbnail.active');
        // console.log(activeImage);
        if(activeImage === thumbnailArray[thumbnailArray.length - 1]){
            const newImg = thumbnailArray[0];
            updateActiveImage(newImg)
        }else{
        const newImg = activeImage.nextElementSibling;
        // console.log(newImg);
        updateActiveImage(newImg)
}}, timingInterval);
}

autoRotateImage();


// set active function:✅✅
function updateActiveImage(img){
    thumbnails.forEach(thumb => {
        thumb.classList.remove('active');
    })
    img.classList.add('active');

    galleryActive.src = img.querySelector('img').src;
}


// event listener:✅✅
thumbnails.forEach(img => {
    img.addEventListener('click', function(){
        // console.log('clicked')
        updateActiveImage(img);
        console.log('cleared timer!')
        clearInterval(timer);
        autoRotateImage();
    })
})