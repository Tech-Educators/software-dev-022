export default async function UserProfile({ params }) {
  const pageParams = await params;
  console.log(pageParams);

  function sum(a, b) {
    console.log(a + b);
  }

  sum(1, 2);

  return (
    <>
      <h1>This is the profile page for user number {pageParams.id}</h1>
    </>
  );
}
