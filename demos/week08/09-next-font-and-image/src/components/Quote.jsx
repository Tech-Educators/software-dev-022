import Image from "next/image";
import beetle from "../../public/beetle.jpg";
import { libreBarcode } from "@/app/layout";

export default function Quote() {
  return (
    <div className="h-[700px]" style={{ position: "relative" }}>
      {/* anything inside the public can be linked by just doing / */}
      {/* <Image src={beetle} alt="" /> */}

      {/* We can also do it this way but we need a height and width */}
      {/* <Image src='/beetle.jpg' alt="" height={500} width={250} /> */}

      {/* We can still use external sources - if you dont know the height and width, we can use the fill property */}

      {/* <div style={{height: '400px', width: '100%'}}> */}
      {/* <Image src="https://streamline.imgix.net/9909d0de-9797-4416-97c3-b6f877e5307d/2917df81-4e23-4e46-bc50-ffb38b535c8b/millipede_shutterstock_196273946.jpg?ixlib=rb-1.1.0&w=2000&h=2000&fit=max&or=0&s=fde95bfad3b4ca7c2216c7910dc4e0c4" alt="" fill={true}/> */}
      {/* </div> */}

      <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
        As Gregor Samsa awoke one morning from uneasy dreams he found himself
        transformed in his bed into a{" "}
        <span className={libreBarcode.className}>gigantic insect.</span> He was
        lying on his hard, as it were armor-plated, back and when he lifted his
        head a little he could see his dome-like brown belly divided into stiff
        arched segments on top of which the bed quilt could hardly keep in
        position and was about to slide off completely. His numerous legs, which
        were pitifully thin compared to the rest of his bulk, waved helplessly
        before his eyes.{" "}
      </p>
      <br />
      <p className="" style={{ textAlign: "center" }}>
        <span>What has happened to me? he thought.</span>
      </p>
    </div>
  );
}
