import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  hideLoadMoreButton,
  showLoadMoreButton,
  showLoaderBottom,
  hideLoaderBottom,
}
from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userValues = '';
let page = 1;

const allForm = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

allForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  userValues = e.target.elements["search-text"].value.trim();
  if (!userValues) return;
  page = 1; 

  showLoader();
  clearGallery();

  try {
    const images = await getImagesByQuery(userValues, page);
    if (images.length === 0) {
      iziToast.show({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        color: 'red',
        position: 'topRight',
      });
      
      hideLoader();
      hideLoadMoreButton();
      return;
    }
  
    createGallery(images);
    showLoadMoreButton();
    //////////////////////////////////////////////////////////////////////////////
    scrollFrame(() => {
      const lastImage = document.querySelector('.gallery-item:last-child');
      if (lastImage) {
        const rect = lastImage.getBoundingClientRect();
        window.scrollBy({
          top: rect.height + 24,
          behavior: 'smooth',
        });
      }
    }); 

//////////////////////////////////////////////////////////////////////////////
  } catch (error) {

  } finally {
    hideLoader();
    e.target.reset();
  }
});

loadMoreBtn.addEventListener('click', async e => {
  showLoaderBottom();
  page += 1;
 
  try {
    const images = await getImagesByQuery(userValues, page);
    if (images.length === 0) {
      iziToast.show({
        message: 'We are sorry, but you have reached the end of search results.',
        color: 'blue',
        position: 'topRight',
      });
      hideLoadMoreButton();
      hideLoaderBottom();
      return;
    }
    createGallery(images);
    showLoadMoreButton();
  } catch (error) {
    console.log('Error', error);
  } finally {
    hideLoaderBottom();
  }
});