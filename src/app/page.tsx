import { Hero } from "@/components/ui/Hero";
import { WriteupCard } from "@/components/ui/WriteupCard";
import { getAllPosts } from "@/lib/mdx";

export default function Home() {
  const posts = getAllPosts().slice(0, 3); // Get latest 3 posts

  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      
      <section className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-glow">
              Latest <span className="text-accent-foreground">Intel</span>
            </h2>
            <div className="h-px flex-1 bg-border/40 ml-8" />
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>
    </div>
  );
}
