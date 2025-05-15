document.addEventListener('DOMContentLoaded', function () {
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.getElementById('main-product-image');

  thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener('click', function () {
      mainImage.src = this.src;
    });
  });
});
