import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const loader = document.querySelector('.loader');

export function showLoader() {
  loader.classList.remove('is-hide');
}

export function hideLoader() {
  loader.classList.add('is-hide');
}

export function showMessage(message) {
  iziToast.error({
    title: 'Error',
    message,
    iconUrl: error,
    backgroundColor: '#EF4040',
    messageColor: '#fff',
    position: 'topRight',
    transitionIn: 'fadeInDown',
    transitionOut: 'fadeOutRight',
    closeOnClick: 'false',
  });
}
