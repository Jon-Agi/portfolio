import ActorAndImage from "@/components/projects/actorAndImage";
import Participants from "@/app/[locale]/projects/eneagrama/participants";
import YouTubeVideo from "@/components/youtubeVideo";
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
  const t = useTranslations("eneagrama");
  return (
    <main>
      <ActorAndImage
        imageUrlLong="/projects/eneagrama/enekoH.jpg"
        imageUrlShort="/projects/eneagrama/enekoB.jpg"
        alt1="Eneko Horziontal"
        alt2="Eneko Vertical"
        flip={true}
      />
      <ActorAndImage
        imageUrlLong="/projects/eneagrama/lideH.jpg"
        imageUrlShort="/projects/eneagrama/lideB.jpg"
        alt1="Agurtzen"
        alt2="Agurtzen2"
        order="smallFirst"
      />
      <ActorAndImage
        imageUrlLong="/projects/eneagrama/julenH.jpg"
        imageUrlShort="/projects/eneagrama/julenB.jpg"
        alt1="Eneko Horziontal"
        alt2="Eneko Vertical"
        flip={true}
      />
      <ActorAndImage
        imageUrlLong="/projects/eneagrama/axpiH.jpg"
        imageUrlShort="/projects/eneagrama/axpiB.jpg"
        alt1="Agurtzen"
        alt2="Agurtzen2"
        order="smallFirst"
      />
      <Participants
        imageUrls={[
          "/projects/eneagrama/small-fotos/aketza.jpg",
          "/projects/eneagrama/small-fotos/miren.jpg",
          "/projects/eneagrama/small-fotos/maite.jpg",
          "/projects/eneagrama/small-fotos/galder.jpg",
          "/projects/eneagrama/small-fotos/eider.jpg",
          "/projects/eneagrama/small-fotos/aner.jpg",
        ]}
        alt="Participants"
      />
      <div className="flex w-full mt-10 mb-6 justify-center">
        <h1 className="text-5xl font-bold">Eneagrama</h1>
      </div>
      <div className="md:px-20 md:text-justify text-xl md:text-2xl font-mono flex grid justify-center">
        <div>{t("description")}</div>
        <span className="my-4">{t("responsibility")}</span>
        <div className="flex justify-center items-center w-full mt-4">
          <div className="flex justify-center items-center w-2/3 aspect-[16/9]">
            <YouTubeVideo videoId="XVV0nlPzFzE" />
          </div>
        </div>
      </div>
    </main>
  );
}
