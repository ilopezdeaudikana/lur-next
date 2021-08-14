import type { NextPage } from 'next';
import Image from 'next/image';

const Masaje: NextPage = () => {
  return (
    <>
      <h2>Masaje deportivo</h2>
      <p>
        El masaje es probablemente la herramienta terapéutica más antigua
        utilizada por el hombre para comunicarse y proporcionar un recurso
        natural contra el dolor. El masaje es una combinación de manipulaciones
        o maniobras realizadas armoniosa y metódicamente, con fines higiénicos,
        preventivos y terapéuticos.
      </p>
      <p>
        El masaje posee una parte técnica, viva y por ello en constante cambio y
        adaptación. Sus beneficios han llegado hasta nuestros días evolucionando
        desde las técnicas más simples, que proporcionan relajación y favorecen
        el sueño, hasta el desarrollo específico de algunas más complejas para
        aliviar o eliminar patologías concretas. Según la indicación y los
        objetivos de tratamiento propuestos, podemos obtener efectos mecánicos,
        fisiológicos, preventivos, terapéuticos, deportivos, estéticos,
        psicológicos, etc.
      </p>

      <Image alt='Masaje' src='/images/masaje.jpg' width='1297' height='518' />
      <p>
        Actualmente el tratamiento por masaje es sinónimo de bienestar y salud.
        Es un buen recurso para aliviar el dolor pues aumenta la circulación y
        favorece el retorno venoso; ayuda a drenar el exceso de linfa que se
        forma en las áreas edematosas. Permite liberar las fibras nerviosas
        atrapadas por desequilibrios mecánicos en las articulaciones y en los
        tejidos blandos que la rodean al relajar las áreas de tensión. Al tocar
        la piel con suavidad o mediante una presión mantenida se estimulan los
        receptores sensoriales y esto permite &quot;bloquear&quot; el ascenso por la
        médula espinal de los impulsos dolorosos, trasmitidos por los receptores
        del dolor en su camino hacia el encéfalo.
      </p>
      <p>
        Aplicamos el masaje mediante la manipulación manual de la piel, los
        músculos y el tejido conectivo para optimizar la función de estos y
        promover la circulación, la relajación, el bienestar, la recuperación y
        la rehabilitación física de los procesos patológicos, o de las lesiones.
      </p>
    </>
  );
};

export default Masaje;
