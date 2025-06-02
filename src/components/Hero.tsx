'use client';

import Link from 'next/link';
import Header from './Header'; // Make sure the path is correct
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/cover_image.jpeg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/100 z-0" />

      {/* Fixed Header on top */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-between text-justify pt-28 mt-0">
        {/* Social Icons */}
        <div className="social-icons p-3 bg-secondary mx-4 rounded-sm flex flex-col items-center justify-center gap-6">
          <Link
            href="https://www.facebook.com/kakamemorialfoundation"
            target="_blank"
            className="text-white hover:text-primary-dark"
          >
            <FaFacebook className="size-6" />
          </Link>
          <Link
            href="https://www.instagram.com/kakamemorialfoundation/"
            target="_blank"
            className="text-white hover:text-primary-dark"
          >
            <FaInstagram className="size-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/kaka-memorial-foundation/"
            target="_blank"
            className="text-white hover:text-primary-dark"
          >
            <FaLinkedin className="size-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/kaka-memorial-foundation/"
            target="_blank"
            className="text-white hover:text-primary-dark"
          >
            <FaTwitter className="size-6" />
          </Link>
        </div>

        {/* Hero Text Content */}
        <div className="flex flex-col gap-4 text-white w-2/3 bg-secondary px-12 py-6">
          <h1 className="text-3xl md:text-5xl uppercase text-primary">
            Connecting Communities
          </h1>
          <p className="text-lg md:text-2xl font-medium tracking-wider">
            Engaging Stakeholders For Real Impact
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
