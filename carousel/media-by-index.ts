import media1 from '../public/images/imagen1.jpg';
import media2 from '../public/images/imagen2.jpg';
import media3 from '../public/images/imagen3.jpg';
import media4 from '../public/images/imagen4.jpg';


export const media: any[] = [media1, media2, media3, media4];
export const mediaByIndex = (index: number) => media[index % media.length];
