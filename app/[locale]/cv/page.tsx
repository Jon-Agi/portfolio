"use client";
import LaboralExperienceRow from "@/components/laboralExperience.row";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import TextEs from "./textEs";
import TextEus from "./textEus";
import TextEn from "./textEn";
import Image from "next/image";

export default function Cv() {
  const spaceBetweenTitle = "mb-3";
  const shortSpace = "mb-5";
  const longSpace = "mb-10";
  const t = useTranslations("cv");

  const pathnameLocale = usePathname();
  const uriLocale = pathnameLocale.slice(1).split("/")[0];

  return (
    <main className="flex-container md:px-20">
      <div className="md:relative">
        <div className="md:absolute md:-left-20 md:top-0 md:w-48 md:block">
          <Image
            src="/agi.webp"
            alt="Jon Aginako"
            height={1024}
            width={1024}
            className="w-full h-auto sticky top-20 rounded-lg shadow-lg"
          />
        </div>

        <div className="pt-4 md:pt-0 md:w-2/3 mx-auto justify-center font-mono relative z-10">
          {uriLocale === "es" ? <TextEs /> : ""}
          {uriLocale === "eus" ? <TextEus /> : ""}
          {uriLocale === "en" ? <TextEn /> : ""}
          <div className="flex flex-col gap-[0.4rem] md:grid md:grid-cols-2">
            <div>
              <p className={`${spaceBetweenTitle} text-2xl font-bold`}>
                {t("aptitudes")}
              </p>
              <p className={`md:${shortSpace}`}>
                Davinci Resolve, Premiere Pro, AfterEffects, Photoshop.
              </p>
            </div>
            <div>
              <p className={`${spaceBetweenTitle} text-2xl font-bold`}>
                {t("languages")}
              </p>
              <p className={`md:${shortSpace}`}>Euskara, Español, English.</p>
            </div>
            <div>
              <p className={`md:${spaceBetweenTitle} text-2xl font-bold`}>
                {t("workExperience")}
              </p>
              <LaboralExperienceRow
                company="BEGIRA PRODUKZIOAK"
                period="01/09/2024 - 30/06/2025"
              />
            </div>
            <div>
              <p className={`${spaceBetweenTitle} text-2xl font-bold`}>
                {t("academicFormation")}
              </p>
              <p className={`md:${shortSpace}`}>UPV/EHU 2019 - 2025</p>
            </div>
            <div>
              <p className={`${spaceBetweenTitle} text-2xl font-bold`}>
                {t("residence")}
              </p>
              <div className={`md:${longSpace}`}>
                <p>Zigoitia, Álava.</p>
                <p>{t("workPreference")}</p>
                <p>{t("driversLicense")}</p>
              </div>
            </div>
            <div>
              <p className={`${spaceBetweenTitle} text-2xl font-bold`}>
                {t("contactInformation")}
              </p>
              <p>{t("email")}: jonaginako14@gmail.com</p>
              <p>{t("phone")}: +34 687 14 63 94</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
