import Container from "@/app/_components/container";
import { getAllNoticias } from "@/lib/api";

export default function NoticiasPage() {
  const allNoticias = getAllNoticias();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-PT", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main className="py-16">
      <Container>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-12 border-b pb-6 border-neutral-200 dark:border-slate-800">
          Notícias
        </h1>

        <div className="space-y-6">
          {allNoticias.map((noticia) => (
            <article
              key={noticia.slug}
              className="p-6 rounded-lg border border-neutral-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start gap-4 mb-4">
                <h2 className="text-2xl font-semibold tracking-tight flex-1">
                  {noticia.title}
                </h2>
                <time className="text-sm font-medium text-gray-500 dark:text-slate-400 whitespace-nowrap">
                  {formatDate(noticia.date)}
                </time>
              </div>

              {noticia.excerpt && (
                <p className="text-gray-600 dark:text-slate-400 text-base leading-relaxed mb-4">
                  {noticia.excerpt}
                </p>
              )}

              {(noticia.reference || noticia.link) && (
                <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-slate-700 space-y-2">
                  {noticia.reference && (
                    <p className="text-sm text-gray-600 dark:text-slate-400 break-words">
                      <span className="font-medium">Referência:</span>{" "}
                      {noticia.reference}
                    </p>
                  )}
                  {noticia.link && (
                    <a
                      href={noticia.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Ver notícia →
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>

        {allNoticias.length === 0 && (
          <p className="text-gray-500 dark:text-slate-500">Vazio.</p>
        )}
      </Container>
    </main>
  );
}
