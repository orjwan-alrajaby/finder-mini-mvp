import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { Embla, EmblaButtons, EmblaContainer, EmblaDots, EmblaSlide, EmblaViewport, EmblaControls } from './styled'
import Image from 'next/image'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  return (
      <Embla>
        <EmblaViewport ref={emblaRef}>
          <EmblaContainer>
            {slides.map((ImageUrl, index) => (
              <EmblaSlide key={index}>
                <Image src={ImageUrl} alt="" fill />
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaViewport>
        <EmblaControls>
          <EmblaDots>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                isSelected={selectedIndex === index}
              />
            ))}
          </EmblaDots>
          <EmblaButtons className="embla-arrow-btns">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </EmblaButtons>
        </EmblaControls>
      </Embla>
  )
}

export default EmblaCarousel