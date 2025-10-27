import AnotherClient from "@/components/AnotherClient"
import Client from "@/components/Client"
import ComponentThatTakesChildren from "@/components/ComponentThatTakesChildren"
import Server from "@/components/Server"
export default function Page() {
  console.log(`This page runs on the server`)
  return (
    <div>
      {/* I run on the server */}
      <Server />
      {/* I run on the client */}
      <Client />

      {/* If you import a server component into a client component the server component will now run as a client component... */}
      <AnotherClient />
      {/* It's totally fine to import client components into server components, that wont change anything */}

      {/* A component that uses children */}
      {/* This is particularly useful when doing animations - animations have to be client components, but the content in them you may want to still run on the server */}
      <ComponentThatTakesChildren>
        <p>This is a child!</p>
        <p>This is another child</p>
        <p>So many lost</p>
        {/* using the server compnent as a child to the client one is fine, and it still renders on the server */}
        <Server />
      </ComponentThatTakesChildren>
    </div>
  )
}