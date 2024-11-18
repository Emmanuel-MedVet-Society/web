import PageHeaderSection from "@/components/page-header-section";

export default function LecturesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <>
      <PageHeaderSection
        title={"Medicine and Beyond"}
        subtitle={"A lecture series open to all"}
      />

      {children}
    </>
  );
}
