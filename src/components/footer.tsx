import { NAV_LINKS } from "@/constants/nav-links";
import {
  Flex,
  Text,
  Link as RadixLink,
  Section,
  Container,
} from "@radix-ui/themes";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--gray-2)]">
      <Section>
        <Container size="2" px="4">
          <Flex direction="column" gap="6">
            <Flex direction="column" gap="2">
              <Text weight="medium">Sitemap</Text>

              <Flex direction="column">
                {NAV_LINKS.map(({ href, label }, index) => (
                  <RadixLink key={index} asChild>
                    <Link href={href}>{label}</Link>
                  </RadixLink>
                ))}
              </Flex>
            </Flex>

            <Flex wrap="wrap" className="gap-x-4 gap-y-1">
              <RadixLink
                color="gray"
                size="1"
                href="https://tahmidazam.github.io"
              >
                © Tahmid Azam 2024
              </RadixLink>

              <RadixLink
                color="gray"
                size="1"
                href="https://github.com/Emmanuel-MedVet-Society/web"
              >
                Repository
              </RadixLink>
            </Flex>
          </Flex>
        </Container>
      </Section>
    </footer>
  );
}
