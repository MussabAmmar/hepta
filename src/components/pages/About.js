import { DivContainer, SectionLayout, TitleContainer } from '../layout/Layout';
import { RoomCard } from '../room-card/RoomCard';
import SimpleSlider from '../slider/Slider';
import { TeamCard } from '../team-card/TeamCard';

export const About = () => {
  const roomCardData = {
    image: 'https://preview.colorlib.com/theme/hepta/images/slider-1.jpg',
    title: 'Welcome Travel & Tours',
    descriptions: [
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    ],
    link: '#',
    isImageFirst: true,
  };

  return (
    <>
      <SectionLayout background={'white'}>
        <DivContainer>
          <RoomCard {...roomCardData} />
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
      <SectionLayout background={'white'}>
        <DivContainer>
          <TitleContainer>
            <h2 className="mb-2 text-center font-abril text-3xl">Team</h2>
            <p className="text-center font-mukta text-xl font-light leading-9 text-[#6c757d]">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
              ocean.
            </p>
          </TitleContainer>
        </DivContainer>
        <DivContainer>
          <div className="grid grid-cols-3">
            {teamMembers.map((member) => (
              <TeamCard {...member} />
            ))}
          </div>
        </DivContainer>
      </SectionLayout>
    </>
  );
};

const teamMembers = [
  {
    image: 'https://preview.colorlib.com/theme/hepta/images/person_3.jpg',
    title: 'CEO, Co-Founder',
    name: 'Vince Richardson',
  },
  {
    image: 'https://preview.colorlib.com/theme/hepta/images/person_1.jpg',
    title: 'CTO, Co-Founder',
    name: 'Jean Love',
  },
  {
    image: 'https://preview.colorlib.com/theme/hepta/images/person_2.jpg',
    title: 'Marketer, Co-Founder',
    name: 'Jeff Stark',
  },
  {
    image: 'https://preview.colorlib.com/theme/hepta/images/person_3.jpg',
    title: 'CEO, Co-Founder',
    name: 'Vince Richardson',
  },
  {
    image: 'https://preview.colorlib.com/theme/hepta/images/person_1.jpg',
    title: 'CTO, Co-Founder',
    name: 'Jean Love',
  },
  {
    image: 'https://preview.colorlib.com/theme/hepta/images/person_2.jpg',
    title: 'Marketer, Co-Founder',
    name: 'Jeff Stark',
  },
];
