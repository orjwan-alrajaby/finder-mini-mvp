'use client';

import Image from 'next/image';
import {
  StyledGalleryWrapper,
  StyledMainFigure,
  StyledMainImageContainer,
  StyledThumbnailColumn,
  StyledThumbnailItem,
  StyledZoomButton,
} from './styled';
import Modal from '@/components/properties/PropertyDetails/Gallery/Modal';
import { useState } from 'react';

function ZoomButton({ onClick }: Readonly<{ onClick: () => void }>) {
  return (
    <StyledZoomButton className="magnify-img-btn" onClick={onClick}>
      <Image
        className="magnify-icon"
        src="/icons/magnifier.svg"
        alt=""
        width={24}
        height={24}
      />
    </StyledZoomButton>
  );
}

export default function Gallery({ gallery }: Readonly<{ gallery: string[] }>) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  return (
    <StyledGalleryWrapper>
      <StyledMainImageContainer>
        <StyledMainFigure>
          <Image src={gallery[0]} alt="" fill className="image" />
          <ZoomButton
            onClick={() => {
              setSelectedImgIndex(0);
              setIsModalOpen(true);
            }}
          />
        </StyledMainFigure>
      </StyledMainImageContainer>
      <StyledThumbnailColumn>
        <StyledThumbnailItem>
          <figure>
            <Image src={gallery[1]} alt="" fill className="image" />
          </figure>
          <ZoomButton
            onClick={() => {
              setSelectedImgIndex(1);
              setIsModalOpen(true);
            }}
          />
        </StyledThumbnailItem>
        <StyledThumbnailItem>
          <figure>
            <Image src={gallery[2]} alt="" fill className="image" />
          </figure>
          <ZoomButton
            onClick={() => {
              setSelectedImgIndex(2);
              setIsModalOpen(true);
            }}
          />
          <Modal
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
            selectedImgIndex={selectedImgIndex}
            gallery={gallery}
          />
        </StyledThumbnailItem>
      </StyledThumbnailColumn>
    </StyledGalleryWrapper>
  );
}
