import { WriteupCard } from "@/components/ui/WriteupCard";
import { getAllPosts } from "@/lib/mdx";

export const metadata = {
  title: "Writeups | iihnsight",
  description: "Browse our latest cybersecurity research and technical writeups.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="container px-4 md:px-6 mx-auto py-24">
      <div className="mb-16 space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-glow">
          All <span className="text-accent-foreground">Writeups</span>
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          A collection of security findings, CTF solutions, and research papers.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <WriteupCard
            key={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            slug={post.slug}
            tags={post.tags}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
