import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 sm:flex-row">

        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} Velvet Blue
        </p>

        <div className="flex items-center gap-6">

          <a
            href="https://instagram.com/velvet_blue_amv"
            target="_blank"
            rel="noreferrer"
            className="text-white/45 transition-all duration-300 hover:text-blue"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="https://www.youtube.com/@velvet-blue-f7j"
            target="_blank"
            rel="noreferrer"
            className="text-white/45 transition-all duration-300 hover:text-blue"
          >
            <FaYoutube size={20} />
          </a>

          <a
            href="https://facebook.com/VelvetBlueAMV"
            target="_blank"
            rel="noreferrer"
            className="text-white/45 transition-all duration-300 hover:text-blue"
          >
            <FaFacebook size={20} />
          </a>

        </div>

      </div>
    </footer>
  );
}