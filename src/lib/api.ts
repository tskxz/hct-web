import { Post } from "@/interfaces/post";
import { Cenario } from "@/interfaces/cenario";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");
const noticiasDirectory = join(process.cwd(), "_noticias");
const cenariosDirectory = join(process.cwd(), "_cenarios");

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

export function getCenarioSlugs() {
  return fs.readdirSync(cenariosDirectory);
}

export function getCenarioBySlug(slug?: string | string[]) {
  const realSlug = typeof slug === "string" ? slug.replace(/\.md$/, "") : Array.isArray(slug) && slug.length > 0 ? slug[0].replace(/\.md$/, "") : "";

  if (!realSlug) {
    return undefined;
  }

  const fullPath = join(cenariosDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return {
    ...data,
    slug: realSlug,
  } as Cenario;
}

export function getAllCenarios(): Cenario[] {
  const slugs = getCenarioSlugs();
  const cenarios = slugs
    .map((slug) => getCenarioBySlug(slug))
    .filter((cenario): cenario is Cenario => Boolean(cenario))
    .sort((cenario1, cenario2) => {
      const title1 = typeof cenario1.title === "string" ? cenario1.title : cenario1.slug;
      const title2 = typeof cenario2.title === "string" ? cenario2.title : cenario2.slug;
      return title1.localeCompare(title2, "pt", { numeric: true });
    });
  return cenarios;
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
