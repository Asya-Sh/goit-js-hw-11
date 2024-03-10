import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

const gallery = document.querySelector(".gallery")

export function renderImages(img) {
    const markup = img.map(imgTemplate).join('\n');
      gallery.innerHTML = markup;
      lightbox.refresh();
  }

function imgTemplate(images) {
    const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = images;
  
    return `<li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
        <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
            width="${previewWidth}"
            height="${previewHeight}"
        />
    </a>
    <ul class="desc-list">
            <li class="desc-item">
                <h3 class="desc-title">Likes</h3>
                <p>${likes}</p>
            </li>
            <li class="desc-li">
                <h3 class="desc-title">Views</h3>
                <p>${views}</p>
            </li>
            <li class="desc-li">
                <h3 class="desc-title">Comments</h3>
                <p>${comments}</p>
            </li>
            <li class="desc-li">
                <h3 class="desc-title">Downloads</h3>
                <p>${downloads}</p>
            </li>
        </ul>
</li>`;
  }

