import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");
  
  const pdfConfig: Record<string, { href: string; filename: string }> = {
    serep: {
      href: "/assets/blog/dynamic-routing/Artigo Serendpidade.pdf",
      filename: "Artigo Serendpidade.pdf",
    },
    "serendipidade-em-ciencia": {
      href: "/assets/blog/serep/SERENDIPIDADE EM CIENCA.pdf",
      filename: "SERENDIPIDADE EM CIENCA.pdf",
    },
    "futuro-digital": {
      href: "/assets/blog/digitaleuropa/Moldando o Futuro Digitalda Europa.pdf",
      filename: "Moldando o Futuro Digitalda Europa.pdf",
    },
  };

  const hasPdf = pdfConfig[params.slug];

  return (
    <main>
      <Alert preview={post.preview} />
      <Container>
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
          {hasPdf && (
            <div className="max-w-2xl mx-auto mb-8 px-4 md:px-0">
              <a
                href={hasPdf.href}
                download={hasPdf.filename}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-colors text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17h6m-6-4h6m-6-4h3"
                  />
                </svg>
                Descarregar PDF
              </a>
            </div>
          )}

        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}