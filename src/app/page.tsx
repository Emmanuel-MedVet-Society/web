import Markdown from "@/components/markdown";
import PageHeaderSection from "@/components/page-header-section";
import { Container, Section } from "@radix-ui/themes";

export default function Home() {
  return (
    <>
      <PageHeaderSection
        title={"Welcome"}
        subtitle={"Emmanuel MedVet Society"}
      />

      <Section>
        <Container size="2" px="4">
          <Markdown publicPath="text/about.mdx" />
        </Container>
      </Section>
    </>
  );
}
