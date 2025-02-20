
import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "./ui/separator";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-cameroon-green text-white py-8 md:py-12 mt-8 md:mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold">{t("footer.contact")}</h3>
            <div className="space-y-2">
              <p className="font-bold text-sm md:text-base">Mbonge Council</p>
              <div className="flex items-start gap-2 text-sm md:text-base">
                <MapPin className="h-4 w-4 mt-1" />
                <p>
                  P. O Box 03 Mbonge Marumba<br />
                  South West Region<br />
                  Meme Division
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Phone className="h-4 w-4" />
                <p>
                  (+237) 678121219<br />
                  (+237) 675730808
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Mail className="h-4 w-4" />
                <p>contact@mbongecouncil.cm</p>
              </div>
              <p className="text-sm md:text-base">{t("footer.hours")}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="/government/meet-mayor" className="hover:underline">{t("nav.meetMayor")}</a></li>
              <li><a href="/government/cabinet" className="hover:underline">{t("nav.cabinet")}</a></li>
              <li><a href="/residents/directions" className="hover:underline">{t("nav.directions")}</a></li>
              <li><a href="/visitors/getting-around" className="hover:underline">{t("nav.gettingAround")}</a></li>
              <li><a href="/residents/public-safety" className="hover:underline">{t("nav.safety")}</a></li>
              <li><a href="/residents/parks-recreation" className="hover:underline">{t("nav.parks")}</a></li>
            </ul>
          </div>

          {/* City Details */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold">{t("footer.cityDetails")}</h3>
            <p className="text-sm md:text-base">{t("footer.incorporated")}</p>
            <div className="space-y-2 text-sm md:text-base">
              <p>{t("footer.population")}</p>
              <p>{t("footer.area")}</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold">{t("footer.followUs")}</h3>
            <div className="flex space-x-4">
              <a href="#facebook" className="hover:text-cameroon-yellow transition-colors">
                <Facebook className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a href="#twitter" className="hover:text-cameroon-yellow transition-colors">
                <Twitter className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a href="#linkedin" className="hover:text-cameroon-yellow transition-colors">
                <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a href="#youtube" className="hover:text-cameroon-yellow transition-colors">
                <Youtube className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-6 md:my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
          <p>{t("footer.fraudReport")}</p>
          <p>{t("footer.credits")}</p>
        </div>
      </div>
    </footer>
  );
};
