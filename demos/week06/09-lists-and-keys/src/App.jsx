import { images } from "./stores/imageData";
import { Image } from "./components/Image";

export default function App() {
  return (
    <div>
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
    </div>
  );
}

// export default function App() {
//   const imagesComponents = images.map((image) => {
//     return (
//       <Image imgUrl={image.imgUrl} author={image.author} title={image.title} />
//     );
//   });
//   console.log(imagesComponents)
//   return (
//     // we cant use forEach anymore,
//     <div>
//       {imagesComponents}
//     </div>
//   );
// }
