import Image from 'next/image';
import { useState, useEffect, useCallback, MouseEventHandler } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import { mediaByIndex } from './media-by-index';
import styles from './carousel.module.scss';

const SLIDE_COUNT = 4;
const slides: number[] = Array.from(Array(SLIDE_COUNT).keys());

export const DotButton = (props: {
  selected: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => (
  <button
    className={`${styles.embla__dot} ${
      props.selected ? `${styles.is_selected}` : ''
    }`}
    type='button'
    onClick={props.onClick}
  />
);

export const Carousel = () => {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    draggable: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [disableTimer, setDisableTimer] = useState(false);
  const scrollTo = useCallback(
    (index) => {
      if (embla) {
        embla.scrollTo(index);
        setSelectedIndex(index);
        setDisableTimer(true);
      }
    },
    [embla]
  );

  const scrollNext = useCallback(() => {
    if (embla) {
      embla.scrollNext();
      const index = selectedIndex + 1 === SLIDE_COUNT ? 0 : selectedIndex + 1;
      setSelectedIndex(index);
    }
  }, [embla, selectedIndex]);

  const onSelect = useCallback(() => {
    if (!embla) return;
  }, [embla]);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (!embla) return;
    onSelect();
    embla.on('select', onSelect);
    if (!disableTimer) {
      timer = setInterval(() => {
        scrollNext();
      }, 2500);
    }
    return () => {
      clearInterval(timer);
    };
  }, [embla, onSelect, scrollNext, disableTimer]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((index) => (
            <div className={styles.embla__slide} key={index}>
              <div className={styles.embla__slide__inner}>
                <Image
                  alt='Lur terapia naturalak'
                  src={mediaByIndex(index)}
                  className={styles.embla__slide__img}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.embla__dots}>
          {slides.map((index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
