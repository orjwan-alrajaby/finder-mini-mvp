import { DialogTrigger } from 'react-aria-components';
import {
  StyledModalOverlay,
  StyledModal,
  StyledShowAllButton,
  StyledCloseModalBtn,
} from './styled';
import Image from 'next/image';
import EmblaCarousel from '../Carousel';

export default function Modal({
  setIsOpen,
  isOpen,
  gallery,
  selectedImgIndex,
}: Readonly<{
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  gallery: string[],
  selectedImgIndex: number;
}>) {
  return (
    <DialogTrigger>
      <StyledShowAllButton onPress={() => setIsOpen(true)}>
        <Image src="/icons/camera.svg" alt="" width={16} height={16} />
        <span>{gallery.length ?? ''}</span>
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
            slides={gallery}
            options={{ loop: true, startIndex: selectedImgIndex }}
          />
        </StyledModal>
      </StyledModalOverlay>
    </DialogTrigger>
  );
}
