import { DialogTrigger } from 'react-aria-components';
import {
  StyledModalOverlay,
  StyledModal,
  StyledShowAllButton,
  StyledCloseModalBtn,
} from './styled';
import Image from 'next/image';
import EmblaCarousel from '../Carousel';

const imageSlides = [
  '/images/property-1/a.jpg',
  '/images/property-1/b.jpg',
  '/images/property-1/c.jpg',
  '/images/property-1/d.jpg',
  '/images/property-1/e.jpg',
  '/images/property-1/f.jpg',
  '/images/property-1/g.jpg',
  '/images/property-1/h.jpg',
  '/images/property-1/i.jpg',
  '/images/property-1/j.jpg',
  '/images/property-1/k.jpg',
  '/images/property-1/l.jpg',
  '/images/property-1/m.jpg',
  '/images/property-1/n.jpg',
  '/images/property-1/o.jpg',
  '/images/property-1/p.jpg',
  '/images/property-1/q.jpg',
  '/images/property-1/r.jpg',
  '/images/property-1/s.jpg',
];

export default function Modal({
  setIsOpen,
  isOpen,
  selectedImgIndex,
}: Readonly<{
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  selectedImgIndex: number;
}>) {
  return (
    <DialogTrigger>
      <StyledShowAllButton onPress={() => setIsOpen(true)}>
        <Image src="/icons/camera.svg" alt="" width={16} height={16} />
        <span>{imageSlides.length ?? ''}</span>
      </StyledShowAllButton>
      <StyledModalOverlay
        isDismissable
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      >
        <StyledModal>
          <StyledCloseModalBtn
            className="close-modal-btn"
            onClick={() => setIsOpen(false)}
          >
            <Image src="/icons/close-dark.svg" alt="" width={16} height={16} />
          </StyledCloseModalBtn>
          <EmblaCarousel
            slides={imageSlides}
            options={{ loop: true, startIndex: selectedImgIndex }}
          />
        </StyledModal>
      </StyledModalOverlay>
    </DialogTrigger>
  );
}
