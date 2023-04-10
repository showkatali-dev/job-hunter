import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#1A1919]">
      <div className="container mx-auto p-4 py-32 text-white/70 text-base space-y-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-12 flex-wrap">
          <div className="space-y-4 col-span-2">
            <h2 className="text-3xl font-bold text-white">JobHunter</h2>
            <p>
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <div className="flex items-center gap-x-3">
              <FaFacebookF className="text-blue-400 w-7 h-7 cursor-pointer p-1.5 rounded-full bg-white/90 hover:bg-white" />
              <FaTwitter className="text-blue-400 w-7 h-7 cursor-pointer p-1.5 rounded-full bg-white/90 hover:bg-white" />
              <FaInstagram className="text-orange-500 w-7 h-7 cursor-pointer p-1.5 rounded-full bg-white/90 hover:bg-white" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Company</h3>
            <ul className="space-y-4">
              <li className="cursor-pointer hover:text-white/80">About Us</li>
              <li className="cursor-pointer hover:text-white/80">Work</li>
              <li className="cursor-pointer hover:text-white/80">
                Latest News
              </li>
              <li className="cursor-pointer hover:text-white/80">Careers</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Product</h3>
            <ul className="space-y-4">
              <li className="cursor-pointer hover:text-white/80">Prototype</li>
              <li className="cursor-pointer hover:text-white/80">
                Plans & Pricing
              </li>
              <li className="cursor-pointer hover:text-white/80">Customers</li>
              <li className="cursor-pointer hover:text-white/80">
                Integrations
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Support</h3>
            <ul className="space-y-4">
              <li className="cursor-pointer hover:text-white/80">Help Desk</li>
              <li className="cursor-pointer hover:text-white/80">Sales</li>
              <li className="cursor-pointer hover:text-white/80">
                Become a Partner
              </li>
              <li className="cursor-pointer hover:text-white/80">Developers</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Contact</h3>
            <p>524 Broadway , NYC</p>
            <p>+1 777 - 978 - 5570</p>
          </div>
        </div>

        <hr className="border-white/20" />
        <div className="flex justify-between gap-x-8 text-white/40">
          <p>@2023 JobHunter. All Rights Reserved</p>
          <p>
            Powered by <span className="font-semibold">Showkat Ali Sam</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
