import Link from "next/link";

import {
  RiYoutubeFill,
  RiFacebookFill,
  RiInstagramFill,
  RiGithubFill,
} from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="pt-12 xl:pt-24 bg-primary text-white text-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="capitalize leading-tight mb-2">
            You can contact us below.
            </h2>
          </div>

          {/* socials */}
          <div className="flex gap-8 mx-auto text-[20px] text-white/60 mb-20">
            <Link href='https://www.youtube.com/@posident9224'>
              <RiYoutubeFill />
            </Link>
            <Link href='https://www.facebook.com/poomziza.pb/'>
              <RiFacebookFill />
            </Link>
            <Link href='https://www.instagram.com/heqis_goblok/'>
              <RiInstagramFill />
            </Link>
            <Link href='https://github.com/Kittipong-Poom/e-commerce-nextjs'>
              <RiGithubFill />
            </Link>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="py-6 border-t border-white/5 text-white/60">
        Copyright &copy; 2024 figures. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
