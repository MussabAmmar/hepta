import { GalleryContainer } from '../gallery/Gallery';
import { DivContainer, SectionLayout } from '../layout/Layout';

const images = [
  { src: 'https://preview.colorlib.com/theme/hepta/images/img_1.jpg' },
  { src: 'https://preview.colorlib.com/theme/hepta/images/img_2.jpg' },
  { src: 'https://preview.colorlib.com/theme/hepta/images/img_3.jpg' },
  { src: 'https://preview.colorlib.com/theme/hepta/images/img_5.jpg' },
  { src: 'https://preview.colorlib.com/theme/hepta/images/img_3.jpg' },
  { src: 'https://preview.colorlib.com/theme/hepta/images/img_1.jpg' },
  { src: 'https://preview.colorlib.com/theme/hepta/images/img_2.jpg' },
  { src: 'https://preview.colorlib.com/theme/hepta/images/img_3.jpg' },
  { src: 'https://preview.colorlib.com/theme/hepta/images/img_5.jpg' },
  { src: 'https://preview.colorlib.com/theme/hepta/images/img_3.jpg' },
  { src: 'https://preview.colorlib.com/theme/hepta/images/img_1.jpg' },
  { src: 'https://preview.colorlib.com/theme/hepta/images/img_2.jpg' },
  { src: 'https://preview.colorlib.com/theme/hepta/images/img_3.jpg' },
  { src: 'https://preview.colorlib.com/theme/hepta/images/img_5.jpg' },

  // Add more images as needed
];

export const Gallery = () => {
  return (
    <SectionLayout>
      <GalleryContainer images={images} />
    </SectionLayout>
  );
};
