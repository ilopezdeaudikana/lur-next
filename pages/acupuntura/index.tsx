import type { NextPage } from 'next';
import Image from 'next/image';

const Acupunture: NextPage = () => {
  return (
    <>
      <h2>Acupuntura</h2>
      <p>
        La acupuntura es una técnica de Medicina Tradicional China (MTC) que
        trata de la inserción y la manipulación de agujas en precisos puntos con
        el objetivo de favorecer el reequilibrio del sistema energético-vital, y
        restaurar la salud y el bienestar en el paciente.
      </p>

      <Image alt='Acupuntura' src='/images/acupuntura.jpg' width='1297' height='518'/>

      <p>
        De acuerdo con la concepción china, la energía vital (Qi) fluye por el
        cuerpo a lo largo de meridianos, que no son más que canales o vías de
        comunicación con los órganos vitales y la totalidad de las funciones
        fisiológicas del organismo.
      </p>
      <p>
        Utilizamos ampliamente la acupuntura para el tratamiento del dolor. Sin
        embargo, para la MTC, tanto los órganos como las vísceras tienen
        funciones asociadas mucho más amplias que las otorgadas en Occidente,
        que van desde su estructura más fisiológica a la más profunda o
        emocional. A modo de ejemplo, el corazón, órgano Yin, regula el flujo y
        el ritmo sanguíneo, la sangre y los vasos. Pero entre otras; controla el
        pensamiento, el habla, la memoria, la calidad del sueño, la alegría o su
        falta en la vida... y se refleja en la lengua.
      </p>
      <p>
        La acupuntura que realizamos bajo un diagnóstico apropiado en MTC y una
        buena selección de puntos no debe tener efectos secundarios. Puede
        ayudarnos en todos aquellos procesos en los que queramos no sólo un
        alivio sintomático sino profundo. Proponemos una mirada y atención
        amplias a la enfermedad y a sus causas. Nos ayuda a mejorar la respuesta
        del sistema inmune, la cualidad y distribución de nuestra energía vital,
        y en un sentido más profundo a entender la relación de todos aquellos
        signos y síntomas, en cada caso, de un modo más integrado.
      </p>
      <p>
        Basado en los desequilibrios energéticos, seleccionamos los puntos
        específicos e insertamos agujas, que quedan en el cuerpo entre 20 y 30
        minutos, dependiendo del objetivo de la sesión.
      </p>
      <p>
        Según el tipo de patología a tratar, utilizamos tratamientos adicionales
        durante la sesión de acupuntura:
      </p>
      <ul>
        <li>
          Estimulación de las agujas con una corriente eléctrica
          (electroacupuntura).
        </li>
        <li>
          Aplicación de “moxa” (Artemisa Vulgaris seca) cerca de la piel o en el
          extremo de las agujas para proporcionar un calor penetrante y
          agradable en el punto de acupuntura. Esta técnica muy extendida dentro
          de la Medicina Tradicional China se denomina moxibustión.
        </li>
        <li>
          Utilización de ventosas de vidrio redondas o de plástico para crear la
          succión encima de puntos específicos o para realizar un masaje en
          zonas más amplias.
        </li>
      </ul>
    </>
  );
};

export default Acupunture;
