import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const loader = document.querySelector(".loader")

iziToast.error({
    title: 'Error',
    message: 'Sorry, there are no images matching your search query. Please try again!',
    iconUrl: error,
    backgroundColor: '#EF4040',
    messageColor: '#fff',
    position: 'topRight',
    transitionIn: 'fadeInDown',
    transitionOut: 'fadeOutRight'
    closeOnClick: 'false'
});