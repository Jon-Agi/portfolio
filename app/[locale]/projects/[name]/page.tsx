import { simpleProjectsVideoUrls } from "@/app/shared/simpleProjects";
import SimpleProject from "@/components/projects/simpleProject";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    Object.keys(simpleProjectsVideoUrls).map((name) => ({ locale, name }))
  );
}

export default async function SimpleProjectPage({
  params,
}: {
  params: Promise<{ locale: string; name: string }>;
}) {
  const { locale, name } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: name });

  return (
    <main>
      <SimpleProject
        videoUrl={
          simpleProjectsVideoUrls[name as keyof typeof simpleProjectsVideoUrls]
        }
        description={t("description")}
        responsibility={t("responsibility")}
      />
    </main>
  );
}
