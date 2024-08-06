import PicturesList from './components/PictureList.jsx'
import './App.css'

// dont do this:
// const skatePicture = {// data not component
//   alt: "Reggie the the skateboarding person",
//   src: "https://muralsyourway.vtexassets.com/arquivos/ids/241160/Skateboard-Sunset-Mural-Wallpaper.jpg?v=638164405202200000",
//   caption: "Check out Reggie!"
// }
// const skiPicture = {
//   alt: "Skiing in the mountains",
//   src: "https://hotel-kaya.com/assets/uploads/2022/06/regles-ski-alpin.jpg",
//   caption: "Skiing is fun!"
// }
// const bikePicture = {
//   alt: "Biking in the city",
//   src: "https://wpassets.trainingpeaks.com/wp-content/uploads/2021/06/16152950/21126-Blog-1200x675-1.jpg",
//   caption: "Biking is cool!"
// }

// do this instead:
const pictures = [
  {
    id: 1,
    alt: "Reggie the cat",
    src: "images/cat.jpeg",
    caption: "Check out my cute cat Reggie!"
  },
  {
    id: 2,
    alt: "Robert the dog",
    src: "images/dog.jpeg",
    caption: "Check out my cute dog Robert!"
  },
  {
    id: 3,
    alt: "Daffy the Duck",
    src: "images/duck.jpeg",
    caption: "Check out my cute duck Daffy!"
  }
]

// const name = {
//   name: "Gonzalo"
// }
export const Person = ( { person } ) => {// Person component to use inside App
  return (
    <p>Hi {person}</p>
  )
}

export const Header = ( { name } ) => {// Header component to use inside App
  return (
    <header>
      <h1 id="head">Hello {name ? name:'World'}</h1>
      <p className="red">its a great Day</p>
      <Person person={name} />
    </header>
  )
}


function App() {
  return (
    <>
      <Header name={'Kevin'} />
      {/* <InstagramPost pictureData={skatePicture} />
      <InstagramPost pictureData={skiPicture} />
      <InstagramPost pictureData={bikePicture} /> */}
      {/* <PicturesList pictures={pictures}/> */}
    </>
  )
}

export default App;