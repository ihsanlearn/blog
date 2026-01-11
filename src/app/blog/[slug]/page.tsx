import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Writeup Not Found',
    };
  }

  return {
    title: `${post.title} | iihnsight`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container relative max-w-4xl px-4 py-24 mx-auto md:px-6">
      <Link
        href="/blog"
        className="absolute left-4 top-10 hidden lg:inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group"
      >
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Writeups
      </Link>

      <div className="space-y-6 text-center mb-16">
        <div className="flex items-center justify-center gap-2">
          {post.tags?.map((tag) => (
             <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent-foreground border border-accent/20">
               {tag}
             </span>
          ))}
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl text-glow">
          {post.title}
        </h1>
        <time className="block text-muted-foreground">{post.date}</time>
      </div>

      <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-accent-foreground hover:prose-a:text-accent prose-pre:!bg-[#282c34] prose-pre:!text-gray-100 prose-pre:border prose-pre:border-border">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
