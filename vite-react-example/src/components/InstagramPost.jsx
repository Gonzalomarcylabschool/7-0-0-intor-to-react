//only allowed outside of a component
function InstagramPost( { pictureData } ){// InstagramPost component to use inside App
  const {src, alt, caption} = pictureData
  return (

    <figure>
      <img style={{width: '30rem'}} src={src} alt={alt} />
      {/* <p>{skatePicture.caption}</p>this is a comment */}
      <figcaption style={{fontStyle: 'italic'}} >{caption}</figcaption>
    </figure>
    
  )
}

export default InstagramPost;