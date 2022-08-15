var imageUrls = [];
var $gallery = document.querySelector('main');
var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', function () {
  if ($imageUrlInput.value !== '') {
    imageUrls.push($imageUrlInput.value);
    $imageUrlInput.value = '';
    updateGallery();
  }
});

function updateGallery() {
  var imagelength = imageUrls.length;
  $gallery.innerHTML = '';
  for (var i = 0; i < imagelength; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
  /**
  was testing code to display text if there were no images and figured I'd leave this here
  console.log(imagelength);
  if (imagelength === 0) {
    var noimage = document.createElement('h1');
    noimage.innerHTML('No images found');
    var missingimage = document.querySelector(div.noimage);
    missingimage.appendChild(noimage);
  } **/
}

updateGallery();
