import { Container, Flex, Section, Spinner, Text } from "@radix-ui/themes";

export default function LoadingSection({ message }: { message?: string }) {
  return (
    <Section>
      <Container size="1" px="4">
        <Flex className="gap-2 items-center" justify="center">
          <Spinner />
          <Text size="2" color="gray">
            {message ?? "Loading..."}
          </Text>
        </Flex>
      </Container>
    </Section>
  );
}
