import Link from 'next/link';
import {FiFacebook, FiInstagram} from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-transparent bottom-0 w-full pb-20 relative">
      <footer className="w-full">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  @ Dizajn
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Upoznajmo se
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="/gallery" className="hover:underline">
                      Naši radovi
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:underline"
                    >
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Pratite nas
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link
                      href="https://www.facebook.com/szfr.dizajn"
                      className="hover:underline "
                    >
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/ninoslavjanackovic/"
                      className="hover:underline"
                    >
                      Instagram
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Pravila upotrebe stranice
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="/terms" className="hover:underline">
                      Pravila privatnosti
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:underline">
                      Uslovi korištenja &amp; kolačići
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <Link href="/" className="hover:underline">
                @ Dizajn Studio™
              </Link>
              . Sva prava zadržana.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <Link
                href="https://www.facebook.com/szfr.dizajn"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <FiFacebook className="w-6 h-6" />
                <span className="sr-only">Facebook page</span>
              </Link>
              <Link
                href="https://www.instagram.com/ninoslavjanackovic/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <FiInstagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>             
            </div>            
          </div>
          <div className="flex flex-col items-center justify-center sm:flex sm:items-center sm:justify-between text-gray-500 hover:text-gray-900 dark:hover:text-white hover:underline mt-4 bottom-0 mx-auto">
              <Link href="/sitemap.xml">sitemap.xml</Link>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;