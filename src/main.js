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
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userValues = '';
let page = 1;
let totalHits = 0;
let imagesLoaded = 0;

const allForm = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

hideLoadMoreButton();
hideLoader();
hideLoaderBottom();

///////////////////////////////////////////////////////////////////////////
allForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  userValues = e.target.elements["search-text"].value.trim();
  if (!userValues) return;

  page = 1; 
  imagesLoaded = 0;

  showLoader();
  clearGallery();

  try {
    const { hits, totalHits: total } = await getImagesByQuery(userValues, page);
    totalHits = total;

    if (hits.length === 0) {
      iziToast.show({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        color: 'red',
        position: 'topRight',
      });
      hideLoadMoreButton();
      return;
    }

    createGallery(hits);
    imagesLoaded += hits.length;

    if (imagesLoaded < totalHits) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
    }

    scrollToNewImages();

  } catch (error) {
   console.log(error);
   
  } finally {
    hideLoader();
    e.target.reset();
  }
});

// ===================== LOAD MORE =====================/////
loadMoreBtn.addEventListener('click', async () => {
  showLoaderBottom();
  hideLoadMoreButton();


  console.log('Нижній спінер');
  page += 1;

  try {
    const { hits } = await getImagesByQuery(userValues, page);
    imagesLoaded += hits.length;
    showLoadMoreButton();
    if (hits.length === 0 || imagesLoaded >= totalHits) {
      hideLoadMoreButton();
       iziToast.info({
        message: 'We are sorry, but you have reached the end of search results.',
        position: 'topRight'
      });
    }

    createGallery(hits);
    scrollToNewImages();

  } catch (error) {
    console.log(error);
    
  } finally {
    hideLoaderBottom();
  }
});

////////////////////////////////////////////////////////////////////////
function scrollToNewImages() {
  const lastImage = document.querySelector('.gallery-item:last-child');
  if (lastImage) {
    const rect = lastImage.getBoundingClientRect();
    window.scrollBy({
      top: rect.height + 24,
      behavior: 'smooth',
    });
  }
}
