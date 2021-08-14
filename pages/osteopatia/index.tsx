import type { NextPage } from 'next';
import Image from 'next/image';

const Us: NextPage = () => {
  return (
    <>
      <h2>Osteopatía</h2>
      <p>
        La osteopatía es una técnica manual cuyo objetivo es restablecer la
        movilidad perdida y dar equilibrio al sistema musculoesquelético,
        visceral y craneosacral.
      </p>
      <p>
        Se utiliza en casos de dolor y/o desequilibrio de espalda, huesos,
        músculos, tendones, ligamentos, articulaciones y vísceras. Es una
        técnica muy precisa que requiere tanto de unos conocimientos profundos
        de la anatomía, fisiología y funciones del cuerpo humano, como de la
        habilidad y destreza manual del profesional.
      </p>

      <Image alt='Osteopatía' src='/images/osteopatia.jpg' width='1297' height='518'/>

      <p>
        Fue el doctor y cirujano norteamericano Andrew Taylor Still (1828 -
        1917) quien sentó las bases de la Osteopatía. Still evidenció las
        interrelaciones que existen, por una parte entre el sistema
        músculo-esquelético y los otros sistemas orgánicos y, por otro lado,
        entre la movilidad y la libertad de dichos sistemas y la salud en
        general.
      </p>
      <p>
        La osteopatía es una disciplina terapéutica manual, que pone especial
        énfasis en la estructura del cuerpo, empleando principalmente el
        tratamiento de tejidos blandos y las correcciones articulares.
        Realizamos un diagnostico osteopático que consiste en valorar el grado
        de libertad de movimiento existente en determinadas articulaciones en
        relación al problema o dolencia que presente el paciente.
      </p>
      <p>
        Si existen restricciones del movimiento valoramos qué tejidos blandos
        puedan estar causando dicha restricción, incluyendo aponeurosis,
        fascias, músculos, tendones, ligamentos y capsulas articulares.
        Valoramos el grado de inflamación (no siempre presente en dolores
        músculo-esqueléticos), revisamos la postura y el apoyo bipodal, así como
        la implicación de vísceras, órganos, la boca y los ojos. En la medida de
        lo posible tratamos de mejorar la funcionalidad de los tejidos y la
        postura del sujeto, normalizando estas estructuras por medio de técnicas
        manuales.
      </p>
      <p>
        Existen otras técnicas de corte visceral o craneosacral que difieren
        ligeramente de las descritas, pero básicamente siempre enfocadas a
        normalizar la estructura corporal corrigiendo las lesiones osteopáticas
        encontradas.
      </p>
    </>
  );
};

export default Us;
