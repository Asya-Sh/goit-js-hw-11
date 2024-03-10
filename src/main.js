

function getImages(value) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api';
  const params = new URLSearchParams({
    key: '42797390-82869f1936654cf50378828df',
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;

  return fetch(url).then(res => {
    if (!res.ok) throw new Error(res.status);
    return res.json();
  });
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

const gallery = document.querySelector(".gallery")
