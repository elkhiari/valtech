import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="font-sans tracking-wide  py-10 px-12 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
        <div>
          <h4 className="text-black text-lg font-semibold mb-6">Entreprise</h4>
          <ul className="space-y-5">
            <li>
              <Link
                href="/qui-sommes-nous"
                className="text-gray-800 hover:text-black text-[15px]"
              >
                Qui sommes-nous
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="text-gray-800 hover:text-black text-[15px]"
              >
                Contactez-nous
              </Link>
            </li>
            <li>
              <a
                href=" #"
                className="text-gray-800 hover:text-black text-[15px]"
              >
                Comming Soon
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-black text-lg font-semibold mb-6">Legal</h4>
          <ul className="space-y-5">
            <li>
              <a
                href=" #"
                className="text-gray-800 hover:text-black text-[15px]"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href=" #"
                className="text-gray-800 hover:text-black text-[15px]"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href=" #"
                className="text-gray-800 hover:text-black text-[15px]"
              >
                Refund Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-black text-lg font-semibold mb-6">Support</h4>
          <ul className="space-y-5">
            <li>
              <a
                href=" #"
                className="text-gray-800 hover:text-black text-[15px]"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href=" #"
                className="text-gray-800 hover:text-black text-[15px]"
              >
                Comming Soon
              </a>
            </li>
            <li>
              <a
                href=" #"
                className="text-gray-800 hover:text-black text-[15px]"
              >
                Comming Soon
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-full max-w-2xl">
          <h4 className="text-black text-lg font-semibold mb-6">Newsletter</h4>
          <p className="text-gray-800 mb-4 text-[15px]">
            {/* Subscribe to our newsletter to get updates on new products and
            promotions. */}
            Abonnez-vous à notre newsletter pour recevoir des mises à jour sur
          </p>

          <form className="mb-4">
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-200 px-4 py-3.5 rounded-l-md w-full text-[15px] text-gray-800 outline-none"
              />
              <button
                type="button"
                className="bg-gray-100 text-[15px] text-gray-800 tracking-wide px-4 py-3.5 rounded-r-md"
              >
                Inscrire
              </button>
            </div>
          </form>
        </div>
      </div>

      <p className="text-gray-800 text-right text-[15px] mt-8">
        © 2023
        <a
          href="https://valtech.ma/"
          target="_blank"
          className="hover:underline mx-1"
        >
          Valtech
        </a>
        All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
