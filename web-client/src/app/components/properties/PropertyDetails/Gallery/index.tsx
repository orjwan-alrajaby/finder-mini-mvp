"use client";

import Image from "next/image";
import { StyledGalleryWrapper, StyledMainFigure, StyledMainImageContainer, StyledThumbnailColumn, StyledThumbnailItem, StyledZoomButton } from "./styled";
import Modal from "@/app/components/properties/PropertyDetails/Gallery/Modal";
import { useState } from "react";

const imageSlides = [
    "/images/property-1/a.jpg",
    "/images/property-1/b.jpg",
    "/images/property-1/c.jpg",
]


function ZoomButton({onClick}: Readonly<{onClick: () => void}>) {
    return (
        <StyledZoomButton className="magnify-img-btn" onClick={onClick}>
            <Image className="magnify-icon" src="/icons/magnifier.svg" alt="" width={24} height={24} />
        </StyledZoomButton>
    )
}

export default function Gallery() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImgIndex, setSelectedImgIndex] = useState(0);
    return (
        <StyledGalleryWrapper>
            <StyledMainImageContainer>
                <StyledMainFigure>
                    <Image
                        src={imageSlides[0]}
                        alt=""
                        fill
                        className="image"
                    />
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
                        <Image
                            src={imageSlides[1]}
                            alt=""
                            fill
                            className="image"
                        />
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
                        <Image
                            src={imageSlides[2]}
                            alt=""
                            fill
                            className="image"
                        />
                    </figure>
               <ZoomButton 
                        onClick={() => {
                            setSelectedImgIndex(2);
                            setIsModalOpen(true);
                        }} 
                    />
            <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} selectedImgIndex={selectedImgIndex} />
                </StyledThumbnailItem>
            </StyledThumbnailColumn>
        </StyledGalleryWrapper>

    )
}