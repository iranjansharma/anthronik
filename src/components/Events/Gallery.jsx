import PhotoAlbum from 'react-photo-album';
import photos from './Photos';

const Gallery = () => {
  return (
    <div
      id='gallery'
      className='w-11/12 mx-auto justify-center items-center content-center'
    >
      <PhotoAlbum photos={photos} layout='rows' />
    </div>
  );
};

export default Gallery;
