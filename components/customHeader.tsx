"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { usePathname as usePathnameWithLocale } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { simpleProjectsToTitles } from "@/app/shared/simpleProjects";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

const projectTitleMap = {
  eneagrama: "ENEAGRAMA",
  rekalde: "LANEAN REKALDE EN OBRAS",
  ...simpleProjectsToTitles,
};

export default function CustomHeader() {
  const pathnameLocale = usePathnameWithLocale();
  const uriLocale = pathnameLocale.slice(1).split("/")[0];
  const pathname = usePathname();
  const pathnameArray = pathname.slice(1).split("/");
  const router = useRouter();
  const t = useTranslations("general");

  const [selected, setSelected] = useState(pathnameArray[0] || "home");
  const [displayedSelectedRoute, setDisplayedSelectedRoute] = useState(
    t(pathnameArray[0] || "home")
  );
  const [locale, setLocale] = useState(uriLocale);

  const navigationClick = (page: string) => {
    setSelected(page);
    setDisplayedSelectedRoute(t(page));
    router.push({ pathname: `/${page === "home" ? "" : page}` });
  };

  const changeLocale = (locale: string) => {
    setLocale(locale);
    router.replace(pathname, { locale });
  };

  const title = (route: string) => {
    const routeArray = route.slice(1).split("/");
    if (routeArray[0] !== "projects") {
      return "JON AGINAKO";
    }
    return projectTitleMap[routeArray[1] as keyof typeof projectTitleMap];
  };

  return (
    <header className="pt-4 pb-4 md:px-20 px-5">
      <div className="grid grid-cols-3 items-center hidden md:grid">
        <div className="flex md:gap-4 gap-2 justify-start md:px-4">
          <Button
            className={`px-1 text-xl ${
              pathname.slice(1).split("/")[0] !== "projects" &&
              selected === "home"
                ? "text-danger"
                : ""
            }`}
            variant="link"
            onMouseDown={() => navigationClick("home")}
          >
            {t("home")}
          </Button>
          <Button
            className={`text-xl md:pl-4 pl-0 ${
              selected === "cv" ? "text-primary" : ""
            }`}
            variant="link"
            onMouseDown={() => navigationClick("cv")}
          >
            {t("cv")}
          </Button>
        </div>

        <p className="text-center uppercase text-4xl">{title(pathname)} </p>
        <div className="justify-end flex md:pr-4">
          <Button
            variant="link"
            className={`px-1 ${locale === "eus" ? "text-danger" : ""}`}
            onClick={() => changeLocale("eus")}
          >
            Eus
          </Button>
          <Button
            variant="link"
            className={`px-1 ${locale === "es" ? "text-danger" : ""}`}
            onClick={() => changeLocale("es")}
          >
            Es
          </Button>
          <Button
            variant="link"
            className={`px-1 ${locale === "en" ? "text-danger" : ""}`}
            onClick={() => changeLocale("en")}
          >
            En
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center md:hidden">
        <div className="flex flex-row w-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="link"
                className="text-xl flex items-center gap-1 text-danger"
              >
                <span>{displayedSelectedRoute}</span>{" "}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem
                className={`text-xl cursor-pointer ${
                  pathname.slice(1).split("/")[0] !== "projects" &&
                  selected === "home"
                    ? "text-danger"
                    : ""
                }`}
                onSelect={() => navigationClick("home")}
              >
                {t("home")}
              </DropdownMenuItem>
              <DropdownMenuItem
                className={`text-xl cursor-pointer ${
                  selected === "cv" ? "text-primary" : ""
                }`}
                onSelect={() => navigationClick("cv")}
              >
                {t("cv")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="link"
                  className="text-xl flex items-center gap-1 text-danger"
                >
                  <span className="capitalize">{locale}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  className={`cursor-pointer ${
                    locale === "eus" ? "text-danger" : ""
                  }`}
                  onSelect={() => changeLocale("eus")}
                >
                  Eus
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`cursor-pointer ${
                    locale === "es" ? "text-danger" : ""
                  }`}
                  onSelect={() => changeLocale("es")}
                >
                  Es
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={`cursor-pointer ${
                    locale === "en" ? "text-danger" : ""
                  }`}
                  onSelect={() => changeLocale("en")}
                >
                  En
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <p className=" text-center uppercase text-4xl">{title(pathname)} </p>
      </div>
    </header>
  );
}
