import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { getPostBySlug } from "@/lib/api";

export default function Index() {
  const serepPost = getPostBySlug("serep");

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={serepPost.title}
          coverImage=""
          date={serepPost.date}
          author={serepPost.author}
          slug={serepPost.slug}
          excerpt={serepPost.excerpt}
        />
      </Container>
    </main>
  );
}
