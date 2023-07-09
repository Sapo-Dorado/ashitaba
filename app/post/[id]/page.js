import { Post } from "lib/db/posts";
import { notFound } from "next/navigation"

async function getData(id) {
  const post = await Post.getPostFromId(id);
  if (!post) {
    notFound();
  }

  return post;
}

export default async function Home({ params }) {
  const post = await getData(params.id);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Buy our products!</p>
      <p>Product: {post.product_name} </p>
      <img src={post.product_picture} alt="Product Picture"></img>
      <p>Influencer: {post.influencer_name} </p>
      <img src={post.influencer_picture} alt="Influencer Picture"></img>

    </main>
  );
}
