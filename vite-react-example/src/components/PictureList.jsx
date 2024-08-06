import InstagramPost from './InstagramPost';

function PicturesList({pictures}) {
  console.log(pictures);
  return (
    <ul>
      {
        pictures.map((picture) => {
          return (
            <InstagramPost key={picture.id} pictureData={picture} />
          );
        })
      }
    </ul>
  );
}

export default PicturesList;
