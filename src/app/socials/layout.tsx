import PageHeaderSection from "@/components/page-header-section";

export default function SocialsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <>
      <PageHeaderSection
        title={"Socials"}
        subtitle={"Stay updated with the exciting events we have planned"}
      />

      {children}
    </>
  );
}
