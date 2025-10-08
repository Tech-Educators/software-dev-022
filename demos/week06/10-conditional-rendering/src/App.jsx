import { images } from "./stores/imageData";
import "./App.css"
import { Image } from "./components/Image";

export default function App() {
  return (
    <div className="container">
      {images.map((image) => {
        return (
          <Image
            author={image.author}
            imgUrl={image.imgUrl}
            title={image.title}
            key={image.id}
          />
        );
      })}
      <div>
        <Image author="sam" imgUrl={`https://www.nature.scot/sites/default/files/styles/hero_banner_half_width/public/2017-07/Otter-01v2.jpg?h=0006430b&itok=WcsIZM11`} title={'Wowo'} key={9} loved={true} />
      </div>
    </div>
  );
}
