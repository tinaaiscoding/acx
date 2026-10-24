'use client';

import type { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { useCallback, useEffect } from 'react';

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from '@/components/emblaCarousel/EmblaCarouselArrowButtons';

import './emblaCarousel.css';

type Slide = {
  title: string;
  image: StaticImageData;
  alt: string;
};

type PropType = {
  slides: Slide[];
  options?: EmblaOptionsType;
  onSlideChange: (index: number) => void;
};

const EmblaCarousel = ({ slides, options, onSlideChange }: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onSelect = useCallback(
    (api: NonNullable<typeof emblaApi>) => {
      onSlideChange(api.selectedScrollSnap());
    },
    [onSlideChange],
  );

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);

    emblaApi.on('select', onSelect).on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect).off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className='embla h-full'>
      <div className='embla__viewport h-full' ref={emblaRef}>
        <div className='embla__container h-full'>
          {slides.map((slide, index) => (
            <div className='embla__slide relative h-full' key={index}>
              {slide.title === 'Solar' ? (
                <>
                  <div className='pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[#034F3A]/13 from-[62%] to-[#09211B]/85 to-[88%]' />
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    sizes='(max-width: 768px) 100vw, 50vw'
                    className='object-cover'
                    priority={index === 0}
                  />
                </>
              ) : (
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                  className='object-cover'
                  priority={index === 0}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className='embla__controls absolute right-6 bottom-6 z-20'>
        <div className='embla__buttons flex gap-3'>
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            aria-label='Previous source'
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            aria-label='Next source'
          />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
