export default async function UserPost({ params }) {
  const pageParams = await params;
  console.log(pageParams);

  return (
    <h1>
      This is post number {pageParams.postId}, created by user {pageParams.id}
    </h1>
  );
}
