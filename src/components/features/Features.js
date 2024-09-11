export const Features = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-2">
      {featuresData.map(({ src, title, label }) => {
        return (
          <div className="flex flex-col items-center">
            <img className="mb-6" src={src} width={70} />
            <h3 className="mb-2 font-abril text-3xl">{title}</h3>
            <label className="text-center font-mukta text-lg font-extralight leading-8 text-[#6C757D]">{label}</label>
          </div>
        );
      })}
    </div>
  );
};

const featuresData = [
  {
    src: 'https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/001-breakfast.svg',
    title: 'Good Foods',
    label:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    src: 'https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/002-planet-earth.svg',
    title: 'Travel Anywhere',
    label:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    src: 'https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/003-airplane.svg',
    title: 'Airplane',
    label:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    src: 'https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/004-beach.svg',
    title: 'Beach Resort',
    label:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    src: 'https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/005-mountains.svg',
    title: 'Mountain Climbing',
    label:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    src: 'https://preview.colorlib.com/theme/hepta/fonts/flaticon/svg/006-hot-air-balloon.svg',
    title: 'Hot Air Balloon',
    label:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
];
