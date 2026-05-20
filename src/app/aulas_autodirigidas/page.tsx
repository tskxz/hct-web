import Link from "next/link";
import Container from "@/app/_components/container";
import { getAllPosts } from "@/lib/api";

export default function AulasAutodirigidasPage() {
  const allPosts = getAllPosts();

  return (
    <main className="py-16">
      <Container>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-12 border-b pb-6 border-neutral-200 dark:border-slate-800">
          Aulas Auto-dirigidas
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allPosts.map((post) => (
            <article 
              key={post.slug} 
              className="p-6 rounded-lg border border-neutral-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors bg-white dark:bg-slate-900 shadow-sm"
            >
              <h2 className="text-2xl font-semibold tracking-tight mb-4">
                <Link 
                  href={`/posts/${post.slug}`} 
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              
              {post.excerpt && (
                <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              )}

              <div className="mt-4">
                <Link 
                  href={`/posts/${post.slug}`}
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Ler →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {allPosts.length === 0 && (
          <p className="text-gray-500 dark:text-slate-500">
            Vazio.
          </p>
        )}
      </Container>
    </main>
  );
}