import { Popover } from "radix-ui";

export default function Home() {
  return (
    <div>
      <Popover.Root>
        <Popover.Trigger>
          <p className="border-lime-200 border-2">I have a popover</p>
        </Popover.Trigger>
        <Popover.Content>
          <p>I am the popover!</p>
          <Popover.Arrow className="fill-white"></Popover.Arrow>
        </Popover.Content>
      </Popover.Root>
    </div>
  )
}

// export default function Home() {
//   const {Trigger, Root, Content} = Popover
//   return (
//     <div>
//       <Root>
//         {/* This display on the page at all times and causes a when clicked */}
//         <Trigger>
//           <p>Hello</p>
//         </Trigger>

//         {/* What is in the actual */}
//         <Content>
//           <p>World!</p>
//         </Content>
//       </Root>
//     </div>
//   )
// }