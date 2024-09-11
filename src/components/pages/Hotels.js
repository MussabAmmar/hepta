import { Features } from '../features/Features';
import { DivContainer, SectionLayout, TitleContainer } from '../layout/Layout';
import { RoomCard } from '../room-card/RoomCard';
import SimpleSlider from '../slider/Slider';

export const Hotels = () => {
  return (
    <>
      <SectionLayout background={'white'}>
        <DivContainer>
          <Features />
        </DivContainer>
      </SectionLayout>
      <SectionLayout background={'white'}>
        <DivContainer>
          <div className="flex flex-col">
            {rooms.map(({ image, title, descriptions, link, isImageFirst }) => (
              <RoomCard
                image={image}
                title={title}
                descriptions={descriptions}
                link={link}
                isImageFirst={isImageFirst}
              />
            ))}
          </div>
        </DivContainer>
      </SectionLayout>
      <SectionLayout background={'white'}>
        <DivContainer>
          <TitleContainer>
            <h2 className="mb-7 text-center font-abril text-7xl">Hotel Gallery</h2>
            <p className="text-center font-mukta text-xl font-light leading-9 text-[#6c757d]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae
              sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias.
              Sed.
            </p>
          </TitleContainer>
        </DivContainer>
        <DivContainer>
          <SimpleSlider />
        </DivContainer>
      </SectionLayout>
      <section className="relative -mt-[500px] flex w-full flex-col items-center gap-12 overflow-hidden bg-[#E9ECEF] pb-32 pt-[500px]">
        <DivContainer>
          <TitleContainer>
            <h2 className="mb-7 text-center font-abril text-7xl">More Hotel Features</h2>
            <p className="text-center font-mukta text-xl font-light leading-9 text-[#6c757d]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae
              sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias.
              Sed.
            </p>
          </TitleContainer>
        </DivContainer>
        <DivContainer>
          {hotelFeatures.map(({ image, title }) => {
            return (
              <div className="mx-4 flex flex-col bg-white">
                <img className="mb-4" src={image} alt="hotel feature image" />
                <h3 className="px-7 py-2 font-abril text-2xl">{title}</h3>
              </div>
            );
          })}
        </DivContainer>
      </section>
    </>
  );
};

const rooms = [
  {
    image: 'https://preview.colorlib.com/theme/hepta/images/hero_1.jpg',
    title: 'Family Room',
    descriptions: [
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. ',
    ],
    link: '#',
    isImageFirst: true,
  },
  {
    image: 'https://preview.colorlib.com/theme/hepta/images/hero_2.jpg',
    title: 'Presidential Room',
    descriptions: [
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. ',
    ],
    link: '#',
    isImageFirst: false,
  },
];

const hotelFeatures = [
  { image: 'https://preview.colorlib.com/theme/hepta/images/img_1.jpg', title: 'Five Reasons to Stay at Villa Resort' },
  { image: 'https://preview.colorlib.com/theme/hepta/images/img_2.jpg', title: 'Five Reasons to Stay at Villa Resort' },
  { image: 'https://preview.colorlib.com/theme/hepta/images/img_3.jpg', title: 'Five Reasons to Stay at Villa Resort' },
];
