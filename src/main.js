import { searchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import { showLoader, hideLoader, showMessage } from './js/halper.js';

const searchForm = document.querySelector('.js-form');

searchForm.addEventListener('submit', onSearchBtn);

function onSearchBtn(e) {
  e.preventDefault();
  showLoader();
  clearMarkup();

  const searchInput = e.target.elements.data.value.trim().split(' ');
  const userWord = userValue.filter(word => word).join('+');

  if (!searchInput) {
    clearMarkup();
    showMessage('Please enter a search term');
    hideLoader();
    return;
  }

  searchImages(searchInput)
    .then(function (searchData) {
      if (searchData.hits.length === 0) {
        clearMarkup();
        showMessage('Sorry, no images found. Please try again.');
      } else {
        renderImages(searchData.hits);
      }
    })
    .catch(function (error) {
      console.error('Error fetching images:', error);
      showMessage('An error occurred. Please try again later.');
    })
    .finally(function () {
      hideLoader();
    });

  e.target.reset();
}
