import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content/writeups");

// Ensure directory exists
if (!fs.existsSync(contentDirectory)) {
  fs.mkdirSync(contentDirectory, { recursive: true });
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  tags?: string[];
  content: string;
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(contentDirectory);

  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const fullPath = path.join(contentDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "Untitled",
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || "",
        coverImage: data.coverImage,
        tags: data.tags || [],
        content,
      };
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    coverImage: data.coverImage,
    tags: data.tags || [],
    content,
  };
}
