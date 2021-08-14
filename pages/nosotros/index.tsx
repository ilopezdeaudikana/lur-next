import type { NextPage } from 'next';
import { useState } from 'react';
import Image from 'next/image';
import { StylesProvider, withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import styles from './nosotros.module.scss';

const CustomDialogContent = withStyles(() => ({
  root: {
    padding: 0,
    '&:first-child': {
      padding: 0,
    },
    marginBottom: 0,
    height: 416,
    overflow: 'hidden',
  },
}))(DialogContent);

const imagesMap: { small: string; big: string }[] = [
  { small: '1a_mini', big: '1a' },
  { small: '3_mini', big: '3' },
  { small: '5_mini', big: '5' },
];
const Us: NextPage = () => {
  const [open, setOpen] = useState(false);
  const [dialogImage, setDialogImage] = useState('');

  const handleClickOpen = (image: string) => {
    setDialogImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <h2>Lur Terapia Naturalak</h2>
      <p>
        Después de varios años recorriendo el camino de las terapias manuales,
        en 2006 nació Lur, centro de terapias naturales.
      </p>
      <p>
        Lur empezó a dar sus primeros pasos con la idea de ofrecer terapias
        naturales, sin olvidar las ventajas de la medicina occidental,
        personalizando cada tratamiento y cuidando cada detalle.
      </p>
      <p>
        La unión de distintas terapias y la profesionalidad de los terapeutas,
        hace que este centro crezca con fuerza, sabiendo que nuestra mejor carta
        de presentación es la ilusión y la dedicación en cada sesión de trabajo.
      </p>
      <p>
        Muchas gracias a mis maestros, a mis compañeros y a cada una de las
        personas que confían en Lur.
      </p>

      <div className={styles.images}>
        {imagesMap.map((image) => (
          <Image
            key={image.big}
            alt='Instalaciones Lur'
            src={`/images/${image.small}.jpg`}
            width='320'
            height='237'
            onClick={() => handleClickOpen(image.big)}
          />
        ))}
      </div>

      <p>
        El horario de atención de Lur, es de lunes a viernes de 8 a 20 horas,
        por lo que nos adaptamos a todo tipo de horarios. La primera sesión
        disponible es a las <strong>nueve de la mañana</strong> y la última
        comienza a las <strong>siete de la tarde</strong>.
      </p>
      <p>
        Las sesiones tendrán una hora de duración y sólamente se atenderá a
        aquellos que dispongan de una <strong>cita previa</strong>.
      </p>
      <p>
        Puede consultar la disponibilidad horaria y reservar una sesión, por
        teléfono, mediante el formulario de contacto o en el mismo centro.
      </p>
      <p>Les esperamos.</p>

      <h3>Cómo llegar</h3>

      <iframe
        style={{ width: '100%', height: 400 }}
        src='https://mapsengine.google.com/map/embed?mid=zjU95yKfXAFg.kYCEm4K1iQEk'
      ></iframe>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='Instalaciones Lur'
        aria-describedby='Instalaciones Lur'
      >
        <CustomDialogContent>
          <Image
            alt='Instalaciones Lur'
            width='560'
            height='416'
            src={`/images/${dialogImage}.jpg`}
          />
        </CustomDialogContent>
      </Dialog>
    </>
  );
};

export default Us;
