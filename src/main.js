
import { searchImages } from './pixabay-api.js';
import { renderImages } from './render-functions.js';
import iziToast from './iziToast.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.js-form');
  const loader = document.querySelector('.loader');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchInput = e.currentTarget.querySelector('.input-form').value.trim()

    if (!searchInput) {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a search query.',
      });
      return;
    }
    try {
      loader.style.display = 'block';
      const images = await searchImages(searchInput);
      renderImages(images);
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: error.message,
      });
    } finally {
      loader.style.display = 'none';
    }
  });
});