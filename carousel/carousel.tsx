import Image from 'next/image';
import { useState, useEffect, useCallback, MouseEventHandler } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import styles from './carousel.module.scss';

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
  const [emblaRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([0]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
    const timer = setInterval(() => {
      if (selectedIndex === scrollSnaps.length - 1) {
        scrollTo(0);
      } else {
        scrollNext();
      }
    }, 2500);

    return () => {
      clearInterval(timer);
    };
  }, [
    embla,
    setScrollSnaps,
    onSelect,
    scrollTo,
    scrollNext,
    selectedIndex,
    scrollSnaps.length,
  ]);

  return (
    <>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>
            <Image
              alt='Lur terapia naturalak'
              src='/images/imagen1.jpg'
              width='1297'
              height='518'
              className={styles.img___responsive}
            />
          </div>
          <div className={styles.embla__slide}>
            <Image
              alt='Lur terapia naturalak'
              src='/images/imagen2.jpg'
              width='1297'
              height='518'
              className={styles.img___responsive}
            />
          </div>
          <div className={styles.embla__slide}>
            <Image
              alt='Lur terapia naturalak'
              src='/images/imagen3.jpg'
              width='1297'
              height='518'
              className={styles.img___responsive}
            />
          </div>
          <div className={styles.embla__slide}>
            <Image
              alt='Lur terapia naturalak'
              src='/images/imagen4.jpg'
              width='1297'
              height='518'
              className={styles.img___responsive}
            />
          </div>
        </div>
        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
