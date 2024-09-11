import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import SimpleSlider from '../slider/Slider';
import { StarRating } from '../star-rating/StarRating';
import { VideoModal } from '../video-modal/VideoModal';
import { DivContainer, SectionLayout, TitleContainer } from '../layout/Layout';
import { Features } from '../features/Features';

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <SectionLayout background={'white'}>
        <DivContainer>
          <div className="grid grid-cols-2 items-center justify-items-center">
            <img src="https://preview.colorlib.com/theme/hepta/images/img_1_long.jpg" alt="standing man" width={450} />
            <article className="flex flex-col px-10">
              <h2 className="mb-6 font-abril text-3xl">Welcome To Our Website</h2>
              <p className="mb-4 font-mukta text-lg font-extralight leading-8 text-[#6C757D]">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean.
              </p>
              <p className="mb-4 font-mukta text-lg font-extralight leading-8 text-[#6C757D]">
                A small river named Duden flows by their place and supplies it with the necessary regelialia.{' '}
              </p>
              <button
                className="mt-6 flex items-center gap-4 font-mukta text-lg font-extrabold text-teal"
                onClick={openModal}
              >
                <FontAwesomeIcon icon={faCirclePlay} size="3x" />
                <span className="uppercase">Watch the Video</span>
              </button>
            </article>
          </div>
        </DivContainer>
      </SectionLayout>

      {isModalOpen && <VideoModal closeModal={closeModal} />}

      <SectionLayout background={'[#FAFAFA]'}>
        <DivContainer>
          <TitleContainer>
            <h2 className="mb-2 text-center font-abril text-3xl">Experience Once In Your Life Time</h2>
            <p className="mb-4 text-center font-mukta text-xl font-light leading-9 text-[#6C757D]">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
              ocean.
            </p>
          </TitleContainer>
        </DivContainer>
        <DivContainer>
          <Features />
        </DivContainer>
      </SectionLayout>

      <SectionLayout background={'teal'}>
        <div className="absolute inset-0 h-1/2 w-full origin-bottom-left -skew-y-6 transform bg-white" />
        <DivContainer>
          <TitleContainer>
            <h2 className="mb-7 text-center font-abril text-7xl">International Tour Management.</h2>
            <p className="text-center font-mukta text-xl font-light leading-9 text-[#6c757d]">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
              ocean.
            </p>
          </TitleContainer>
        </DivContainer>
        <DivContainer>
          <SimpleSlider />
        </DivContainer>
        <DivContainer>
          <TitleContainer>
            <h2 className="mb-7 text-center font-abril text-7xl">Recent Blog Post</h2>
            <p className="text-center font-mukta text-xl font-light leading-9 text-[#ffffffb3]">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
              ocean.
            </p>
          </TitleContainer>
        </DivContainer>
        <DivContainer>
          {blogPosts.map(({ img, title, description, date }) => {
            return (
              <div className="mx-4 flex w-full min-w-72 flex-col bg-white">
                <img className="mb-6" src={img} alt="blog image" />
                <span className="px-7 font-mukta text-lg text-[#ced4da]">{date}</span>
                <h3 className="mb-4 px-7 font-abril text-3xl">{title}</h3>
                <p className="mb-4 px-7 font-mukta text-lg font-extralight text-[#6C757D]">{description}</p>
              </div>
            );
          })}
        </DivContainer>
      </SectionLayout>

      <SectionLayout background={'[#FAFAFA]'}>
        <DivContainer>
          <TitleContainer>
            <h1 className="mb-7 font-abril text-7xl">Happy Customers</h1>
          </TitleContainer>
        </DivContainer>
        <DivContainer>
          {reviews.map(({ img, review, name }) => {
            return (
              <div className="mx-4 flex w-full min-w-72 flex-col bg-[#FAFAFA]">
                <img className="mb-4 rounded-full" src={img} width={70} height={70} alt="review image" />
                <p className="mb-4 font-mukta text-xl font-extralight italic leading-8">{review}</p>
                <span className="mb-4 font-mukta text-lg font-extralight italic text-[#6c757d]">{`— ${name}`}</span>
              </div>
            );
          })}
        </DivContainer>
      </SectionLayout>

      <SectionLayout background={'white'}>
        <DivContainer>
          <TitleContainer>
            <h1 className="mb-2 text-center font-abril text-3xl">Top Destination</h1>
            <p className="mb-4 text-center font-mukta text-xl font-light leading-9 text-[#6C757D]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae
              sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias.
              Sed.
            </p>
          </TitleContainer>
        </DivContainer>
        <DivContainer>
          {destinations.map(({ img, title, rating, reviews }) => {
            return (
              <div className="mx-4">
                <img className="mb-4" src={img} alt="destination image" />
                <h4 className="font-abril text-xl">{title}</h4>
                <div className="flex justify-between">
                  <StarRating rating={rating} size="sm" />
                  <span className="font-mukta text-lg font-extralight italic text-[#666666]">{`${reviews} reviews`}</span>
                </div>
              </div>
            );
          })}
        </DivContainer>
      </SectionLayout>
    </>
  );
};

const blogPosts = [
  {
    img: 'https://preview.colorlib.com/theme/hepta/images/img_1.jpg',
    title: '45 Best Places To Unwind',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    date: 'February 26, 2018',
  },
  {
    img: 'https://preview.colorlib.com/theme/hepta/images/img_2.jpg',
    title: '45 Best Places To Unwind',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    date: 'February 26, 2018',
  },
  {
    img: 'https://preview.colorlib.com/theme/hepta/images/img_3.jpg',
    title: '45 Best Places To Unwind',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    date: 'February 26, 2018',
  },
];

const reviews = [
  {
    img: 'https://preview.colorlib.com/theme/hepta/images/person_1.jpg',
    review:
      '“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.rdquo;',
    name: 'Clare Gupta',
  },
  {
    img: 'https://preview.colorlib.com/theme/hepta/images/person_2.jpg',
    review:
      '“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.rdquo;',
    name: 'Rogie Slater',
  },
  {
    img: 'https://preview.colorlib.com/theme/hepta/images/person_3.jpg',
    review:
      '“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.rdquo;',
    name: 'John Doe',
  },
];

const destinations = [
  {
    img: 'https://preview.colorlib.com/theme/hepta/images/img_1.jpg',
    title: 'Food & Wines',
    rating: 3.5,
    reviews: '3,239',
  },
  {
    img: 'https://preview.colorlib.com/theme/hepta/images/img_2.jpg',
    title: 'Resort & Spa',
    rating: 3.5,
    reviews: '4,921',
  },
  {
    img: 'https://preview.colorlib.com/theme/hepta/images/img_3.jpg',
    title: 'Hotel Rooms',
    rating: 4,
    reviews: '2,112',
  },
  {
    img: 'https://preview.colorlib.com/theme/hepta/images/img_4.jpg',
    title: 'Mountaing Climbing',
    rating: 4,
    reviews: '6,421',
  },
];
