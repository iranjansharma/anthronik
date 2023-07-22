import PhotoAlbum from 'react-photo-album';

const Gallery = () => {
  return (
    <div
      id='gallery'
      className='w-11/12 mx-auto justify-center items-center content-center'
    >
      <PhotoAlbum
        photos={[
          {
            src: '/1.jpg',
            width: 600,
            height: 400,
          },
          {
            src: '/2.jpg',
            width: 400,
            height: 200,
          },
          {
            src: '/3.jpg',
            width: 500,
            height: 400,
          },
          {
            src: '/4.jpg',
            width: 450,
            height: 200,
          },
          {
            src: '/5.jpg',
            width: 500,
            height: 200,
          },
          {
            src: '/6.jpg',
            width: 400,
            height: 200,
          },
          {
            src: '/7.jpg',
            width: 200,
            height: 200,
          },
          {
            src: '/8.jpg',
            width: 400,
            height: 200,
          },
          {
            src: '/9.jpg',
            width: 400,
            height: 200,
          },
          {
            src: '/10.jpg',
            width: 400,
            height: 200,
          },
          {
            src: '/11.jpg',
            width: 450,
            height: 200,
          },
          {
            src: '/12.jpg',
            width: 300,
            height: 200,
          },
          {
            src: '/13.jpg',
            width: 400,
            height: 200,
          },
          {
            src: '/14.jpg',
            width: 450,
            height: 200,
          },
          {
            src: '/15.jpg',
            width: 400,
            height: 200,
          },
          {
            src: '/16.jpg',
            width: 400,
            height: 200,
          },
          {
            src: '/17.jpg',
            width: 400,
            height: 200,
          },
          {
            src: '/18.jpg',
            width: 400,
            height: 200,
          },
          {
            src: '/19.jpg',
            width: 400,
            height: 200,
          },
          {
            src: '/20.jpg',
            width: 400,
            height: 200,
          },
          {
            src: '/21.jpg',
            width: 400,
            height: 200,
          },
          {
            src: '/22.jpg',
            width: 400,
            height: 200,
          },
          {
            src: '/23.jpg',
            width: 400,
            height: 200,
          },
          {
            src: '/24.jpg',
            width: 400,
            height: 250,
          },
          {
            src: '/25.jpg',
            width: 400,
            height: 250,
          },
          {
            src: '/26.jpg',
            width: 400,
            height: 200,
          },
          {
            src: '/27.jpg',
            width: 450,
            height: 200,
          },
        ]}
        layout='rows'
      />
    </div>
  );
};

export default Gallery;
