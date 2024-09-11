import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = () => {
  return (
    <footer className="flex w-full justify-center bg-[#1a1a1a] py-32">
      <div className="max-w-full justify-center md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <div className="grid grid-cols-4 gap-7">
          <menu className="flex flex-col">
            <h2 className="mb-5 font-abril text-lg text-white">Quick Links</h2>
            {quickLinks.map(({ label, href }) => {
              return (
                <a className="mb-2 font-mukta text-lg text-[#ffffffb3] hover:text-white" href={href}>
                  {label}
                </a>
              );
            })}
          </menu>
          <menu className="flex flex-col">
            <h2 className="mb-5 font-abril text-lg text-white">Support</h2>
            {supportLinks.map(({ label, href }) => {
              return (
                <a className="mb-2 font-mukta text-lg text-[#ffffffb3] hover:text-white" href={href}>
                  {label}
                </a>
              );
            })}
          </menu>
          <menu>
            <h2 className="mb-5 font-abril text-lg text-white">Contact Info</h2>
            <h3 className="font-mukta text-lg italic text-white">Address:</h3>
            <p className="mb-4 font-mukta text-lg leading-8 text-[#ffffffb3]">
              98 West 21th Street, Suite 721 New York NY 10016
            </p>
            <h3 className="font-mukta text-lg italic text-white">Phone:</h3>
            <p className="mb-4 font-mukta text-lg text-[#ffffffb3]">(+1) 435 3533</p>
            <h3 className="font-mukta text-lg italic text-white">Email:</h3>
            <p className="mb-4 font-mukta text-lg text-[#ffffffb3]">info@yourdomain.com</p>
          </menu>
          <menu>
            <h2 className="mb-5 font-abril text-lg text-white">Subscribe</h2>
            <p className="mb-4 font-mukta text-lg text-[#ffffffb3]">Sign up for our newsletter</p>
            <div className="relative flex items-center border-b border-gray-500 pb-2">
              <input
                type="email"
                placeholder="Your email..."
                className="w-full bg-transparent text-gray-300 placeholder-gray-500 outline-none"
              />
              <FontAwesomeIcon icon={faPaperPlane} className="absolute right-0 text-gray-400" />
            </div>
          </menu>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 border-t border-white border-opacity-10 pt-12">
          <p className="font-mukta text-lg text-[#ffffff80]">
            Copyright © 2024 All rights reserved | This template is made with{' '}
            <span>
              <FontAwesomeIcon icon={faHeart} />
            </span>{' '}
            by Colorlib
          </p>
          <menu className="flex w-full items-center justify-center gap-5">
            {socials.map(({ icon, link }) => {
              return (
                <a className="text-white opacity-70" href={link}>
                  <FontAwesomeIcon icon={icon} />
                </a>
              );
            })}
          </menu>
        </div>
      </div>
    </footer>
  );
};

const quickLinks = [
  { label: 'About Us', href: '/' },
  { label: 'Terms & Conditions', href: '/' },
  { label: 'Privacy Policy', href: '/' },
  { label: 'Help', href: '/' },
  { label: 'Rooms', href: '/' },
];

const supportLinks = [
  { label: 'Our Location', href: '/' },
  { label: 'The Hosts', href: '/' },
  { label: 'About', href: '/' },
  { label: 'Contact', href: '/' },
  { label: 'Restaurant', href: '/' },
];

const socials = [
  { icon: faFacebook, link: '#' },
  { icon: faTwitter, link: '#' },
  { icon: faInstagram, link: '#' },
  { icon: faLinkedin, link: '#' },
  { icon: faYoutube, link: '#' },
];
