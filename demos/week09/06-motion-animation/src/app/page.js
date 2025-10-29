import AnimateText from "@/component/AnimateText";
import LoadingCircleSpinnerCSS from "@/component/PureCSSSpinner";
import SlowComponenet from "@/component/SlowComponent";
import LoadingCircleSpinner from "@/component/Spinner";
import { Suspense } from "react";


export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center m-10 min-h-100">
      <br />
      <br /><br /><br />
      <div className="h-[200px] w-100"></div>
      <AnimateText>
        <p>I am a child to AnimateText</p>
      </AnimateText>
{/* 
      <AnimateText>
        <p>Some more text!</p>
      </AnimateText> */}
      <LoadingCircleSpinner />
      {/* if you're using suspense, any fallback must be pure html/css - any javascript will effecitvely be ignored */}
      <Suspense fallback={<LoadingCircleSpinnerCSS />}>
        <SlowComponenet />
      </Suspense>
    </div>
  )
}