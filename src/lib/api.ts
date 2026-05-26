import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");
const noticiasDirectory = join(process.cwd(), "_noticias");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getNoticiasSlugs() {
  return fs.readdirSync(noticiasDirectory);
}

export function getNoticiaBySlugs(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(noticiasDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return { ...data, slug: realSlug } as any;
}

export function getAllNoticias() {
  const slugs = getNoticiasSlugs();
  const noticias = slugs
    .map((slug) => getNoticiaBySlugs(slug))
    // sort noticias by date in descending order
    .sort((noticia1, noticia2) => (noticia1.date > noticia2.date ? -1 : 1));
  return noticias;
}
