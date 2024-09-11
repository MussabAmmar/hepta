import { Outlet, useLocation } from 'react-router-dom';
import { Hero } from '../hero/Hero';
import { Footer } from '../footer/Footer';

export const Layout = () => {
  const location = useLocation();

  const heroSettings = {
    '/': {
      backgroundImage: 'https://preview.colorlib.com/theme/hepta/images/hero_1.jpg',
      title: 'Travel & Tours',
    },
    '/hotels': {
      backgroundImage: 'https://preview.colorlib.com/theme/hepta/images/hero_2.jpg',
      title: 'Our Hotel',
    },
    '/about': {
      backgroundImage: 'https://preview.colorlib.com/theme/hepta/images/hero_3.jpg',
      title: 'About Us',
    },
    '/gallery': {
      backgroundImage: 'https://preview.colorlib.com/theme/hepta/images/hero_4.jpg',
      title: 'Gallery',
    },
    '/news': {
      backgroundImage: 'https://preview.colorlib.com/theme/hepta/images/hero_5.jpg',
      title: 'Blog',
    },
    '/contact': {
      backgroundImage: 'https://preview.colorlib.com/theme/hepta/images/hero_4.jpg',
      title: 'Contact',
    },
  };

  const currentPath = location.pathname;
  const { backgroundImage, title } = heroSettings[currentPath];

  return (
    <>
      <Hero backgroundImage={backgroundImage} title={title} />
      <main className="flex flex-col items-center justify-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export const SectionLayout = ({ children, background }) => {
  return (
    <section className={`relative flex w-full flex-col items-center gap-12 overflow-hidden bg-${background} py-32`}>
      {children}
    </section>
  );
};

export const DivContainer = ({ children }) => {
  return (
    <div className="relative flex w-full max-w-full justify-center md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
      {children}
    </div>
  );
};

export const TitleContainer = ({ children }) => {
  return <div className="flex max-w-screen-sm flex-col">{children}</div>;
};
