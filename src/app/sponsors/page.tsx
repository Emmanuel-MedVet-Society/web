import Markdown from "@/components/markdown";
import PageHeaderSection from "@/components/page-header-section";
import { Container, Section } from "@radix-ui/themes";

export default function Home() {
  return (
    <>
      <PageHeaderSection
        title={"Sponsors"}
        subtitle={"Support the EMVS community"}
      />

      <Section>
        <Container size="2" px="4">
          <Markdown publicPath="text/sponsors.mdx" />
        </Container>
      </Section>
    </>
  );
}
