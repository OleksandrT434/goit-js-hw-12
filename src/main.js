import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const allForm = document.querySelector('.form');

allForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = e.target.elements["search-text"].value.trim();

if (!query) return;

    showLoader();
    clearGallery();
    getImagesByQuery(query)
    .then(images => {
      if (images.length === 0) {
        iziToast.show({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          color: 'red',
          position: 'topRight',
        });
        hideLoader();
        return;
      }

    createGallery(images);
    })
    .catch(error => {
        console.error('Error', error);
        hideLoader();
    })
    .finally(() => {
      hideLoader();
      e.target.reset();
    });
});