import { useTranslations } from "next-intl";
import EqualSizeRow from "./project-rows/equalSizeRow";
import { ResponsiveImage } from "./project-rows/ResponsiveImage";

export default function ProjectList() {
  const t = useTranslations("mainPage");
  return (
    <div className="flex flex-col gap-[0.4rem] flex-row">
      <ResponsiveImage
        imageUrl="/page/eneagrama.jpg"
        alt="Imagen eneagrama bideopodkasta"
        imageText={t("podcast", { year: "2025" })}
        route="/eneagrama"
      />
      <EqualSizeRow
        imageUrl1="/page/isliaGorri.jpg"
        alt1="Imagen islia"
        image1Text={t("trailer", { year: "2025" })}
        route1="/islia"
        imageUrl2="/page/vistoParaSentencia.jpg"
        alt2="Imagen visto para sentencia"
        image2Text={t("trailer", { year: "2024" })}
        route2="/vps"
      />
      <ResponsiveImage
        imageUrl="/page/glaziarrak.jpg"
        alt="Imagen glaziarrak agurtzen"
        imageText={t("documental", { year: "2025" })}
        route="/glaziarrak"
      />
      <EqualSizeRow
        imageUrl1="/page/zinebi.jpg"
        alt1="Imagen zinebi 2024"
        image1Text={t("summary", { year: "2025" })}
        route1="/zinebi"
        imageUrl2="/page/rekalde.jpg"
        alt2="Imagen lanean rekalde"
        image2Text={t("documental", { year: "2025" })}
        route2="/rekalde"
      />
      <ResponsiveImage
        imageUrl="/page/kguasaki.jpg"
        alt="Imagen kaguasaki"
        imageText={t("shortFilm", { year: "2024" })}
        route="/kguasaki"
      />
      <EqualSizeRow
        imageUrl1="/page/agurMaria.jpg"
        alt1="Imagen agur maria"
        image1Text={t("shortFilm", { year: "2024" })}
        route1="/agur_maria"
        imageUrl2="/page/ezErreka.jpg"
        alt2="imagen ez erreka ez ni"
        image2Text={t("shortFilm", { year: "2024" })}
        route2="/erreka"
      />
      <ResponsiveImage
        imageUrl="/page/denbora.jpg"
        alt="Imagen denbora"
        imageText={t("shortDocumental", { year: "2023" })}
        route="/denbora"
      />
      <EqualSizeRow
        imageUrl1="/page/oilotegi.jpg"
        alt1="imagen oilotegi"
        image1Text={t("documental", { year: "2024" })}
        route1="/oilotegi"
        imageUrl2="/page/entzunDezatelaGorri.jpg"
        alt2="imagen entzun dezatela"
        image2Text={t("videoClip", { year: "2024" })}
        route2="/entzun"
      />
      <EqualSizeRow
        imageUrl1="/page/akatu.jpg"
        alt1="imagen akatu"
        image1Text={t("shortFilm", { year: "2023" })}
        route1="/akatu"
        imageUrl2="/page/behinBatean.jpg"
        alt2="imagen Behin batean loiolan"
        image2Text={t("trailer", { year: "2023" })}
        route2="/bbl"
      />
    </div>
  );
}
