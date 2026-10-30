import ActorAndImage from "@/components/projects/actorAndImage";
import VimeoVideo from "@/components/vimeoVideo";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function App({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("rekalde");
  return (
    <main>
      <ActorAndImage
        imageUrlLong="/projects/rekalde/txalapartaH.jpg"
        imageUrlShort="/projects/rekalde/txalapartaB.jpg"
        alt1="Txalaparta Horziontal"
        alt2="Txalaparta Vertical"
      />
      <ActorAndImage
        imageUrlLong="/projects/rekalde/susanaH.jpg"
        imageUrlShort="/projects/rekalde/susanaB.jpg"
        alt1="Agurtzen"
        alt2="Agurtzen2"
        order="smallFirst"
      />
      <ActorAndImage
        imageUrlLong="/projects/rekalde/hereticasH.jpg"
        imageUrlShort="/projects/rekalde/hereticasB.jpg"
        alt1="Eneko Horziontal"
        alt2="Eneko Vertical"
      />
      <ActorAndImage
        imageUrlLong="/projects/rekalde/igorH.jpg"
        imageUrlShort="/projects/rekalde/igorB.jpg"
        alt1="Agurtzen"
        alt2="Agurtzen2"
        order="smallFirst"
      />
      <ActorAndImage
        imageUrlLong="/projects/rekalde/amaiaH.jpg"
        imageUrlShort="/projects/rekalde/amaiaB.jpg"
        alt1="Agurtzen"
        alt2="Agurtzen2"
      />
      <ActorAndImage
        imageUrlLong="/projects/rekalde/522H.jpg"
        imageUrlShort="/projects/rekalde/522B.jpg"
        alt1="Agurtzen"
        alt2="Agurtzen2"
        order="smallFirst"
      />
      <ActorAndImage
        imageUrlLong="/projects/rekalde/patrikH.jpg"
        imageUrlShort="/projects/rekalde/patrikB.jpg"
        alt1="Agurtzen"
        alt2="Agurtzen2"
      />
      <div className="flex w-full mt-10 mb-6 justify-center">
        <h1 className="text-5xl font-bold">LANEAN REKALDE EN OBRAS</h1>
      </div>
      <div className="md:px-20 md:text-justify text-xl md:text-2xl font-mono flex grid justify-center">
        <div>{t("description")}</div>
        <span className="my-4">{t("responsibility")}</span>
        <VimeoVideo videoId="https://player.vimeo.com/video/1082246863?h=01a0ff374d" />
      </div>
    </main>
  );
}
