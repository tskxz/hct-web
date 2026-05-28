import type { Metadata } from "next";
import Container from "@/app/_components/container";
import { getAllPosts } from "@/lib/api";
import AulasAutodirigidasProtected from "./AulasAutodirigidasProtected";

export const metadata: Metadata = {
  title: "Aulas Auto-dirigidas",
  description: "Área protegida de aulas auto-dirigidas, acessível apenas com password.",
};

export default function AulasAutodirigidasPage() {
  const allPosts = getAllPosts();

  return (
    <main className="py-16">
      <Container>
        <AulasAutodirigidasProtected posts={allPosts} />
      </Container>
    </main>
  );
}