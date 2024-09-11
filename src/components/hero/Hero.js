import { Link } from 'react-router-dom';
import { Header } from '../header/Header';
import { useLocation } from 'react-router-dom';

export const Hero = ({ backgroundImage, title }) => {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-20" />
      <Header />
      <div className="z-10 flex flex-col items-center text-white">
        <h1 className="mb-6 font-abril text-7xl">{title}</h1>
        <p className="mb-12 font-mukta text-3xl font-extralight">A free template by Colorlib. Download and share!</p>
        {useLocation().pathname === '/' && (
          <button className="rounded-md border-2 border-[#F8F9FA] px-8 py-4 font-mukta tracking-widest text-[#F8F9FA] hover:bg-white hover:text-black">
            <Link to={'/'}>VISIT COLORLIB</Link>
          </button>
        )}
      </div>
    </section>
  );
};
