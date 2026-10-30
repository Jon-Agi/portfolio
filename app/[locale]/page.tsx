import ProjectList from "@/components/content/projectList";
import { setRequestLocale } from "next-intl/server";

export default async function FilmPortfolio({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main>
      <ProjectList />
    </main>
  );
}
