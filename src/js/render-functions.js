    import SimpleLightbox from "simplelightbox";
    import "simplelightbox/dist/simple-lightbox.min.css";


const refs = {
  allGallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.load-more'),
  bottomLoader: document.querySelector('.loader-bottom'),
};

////////////////////////////////////////////////////////////
export function showLoaderBottom() {
  console.log('Нижній спінер');
  refs.bottomLoader.classList.remove('hidden');
}
export function hideLoaderBottom() { 
  refs.bottomLoader.classList.add('hidden');
}
////////////////////////////////////////////////////////////
export function showLoader() {
  refs.loader.classList.remove('hidden');
}
export function hideLoader(){
  refs.loader.classList.add('hidden');
}
export function clearGallery() {
  refs.allGallery.innerHTML = '';
}
export function hideLoadMoreButton() {
  refs.loadMoreBtn.classList.add('hidden');
}
export function showLoadMoreButton() {
  refs.loadMoreBtn.classList.remove('hidden');
}
////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////
export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////

export function createMarkup(image) {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img
          class="gallery-image"
          src="${image.webformatURL}"
          alt="${image.tags}"
        />
      </a>
      <div class="image-stats">
        <div class="stat-block">
          <p class="label">Likes</p>
          <p class="value">${image.likes}</p>
        </div>
        <div class="stat-block">
          <p class="label">Views</p>
          <p class="value">${image.views}</p>
        </div>
        <div class="stat-block">
          <p class="label">Comments</p>
          <p class="value">${image.comments}</p>
        </div>
        <div class="stat-block">
          <p class="label">Downloads</p>
          <p class="value">${image.downloads}</p>
        </div>
      </div>
    </li>`;
}

export function createGallery(images) {
    refs.allGallery.insertAdjacentHTML('beforeend', images.map(createMarkup).join(''));
    lightbox.refresh();
}

/////////////////////////////////////////////////////////////////////////


