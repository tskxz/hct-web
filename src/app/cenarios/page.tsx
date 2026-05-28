import { getAllCenarios } from "@/lib/api";
import Container from "@/app/_components/container";
import CenariosProtected from "./CenariosProtected";

export default function CenariosPage() {
  const cenarios = getAllCenarios();

  return (
    <main>
      <Container>
        <CenariosProtected cenarios={cenarios} />
      </Container>
    </main>
  );
}
