import type { NextPage } from 'next';
import Image from 'next/image';

const Vendaje: NextPage = () => {
  return (
    <>
      <h2>Vendaje neuromuscular</h2>
      <p>
        En un tiempo relativamente corto el Vendaje Neuromuscular (VNM) o
        &quot;Kinesiotaping&quot; ha conquistado su sitio en la práctica diaria de muchos
        terapeutas manuales. La manera en que este método optimiza el proceso de
        recuperación del propio cuerpo lo hace muy popular tanto entre pacientes
        como entre profesionales.
      </p>
      <p>
        Las bases del método fueron sentadas en los años 70 en Asia, sobre todo
        en Corea y Japón, basándose en el pensamiento de que el movimiento y la
        actividad muscular son imprescindibles para mantener o recuperar la
        salud. La idea que hay detrás de este método es que la musculatura es
        necesaria para el movimiento, pero también influyen en la circulación
        sanguínea y linfática y en la temperatura corporal. Si la musculatura no
        funciona bien puede provocar toda una serie de síntomas y lesiones.
      </p>
      <p>
        En el VNM se utiliza un esparadrapo elástico de algodón con una capa de
        pegamento anti-alérgica, que ayuda en la función muscular sin limitar
        los movimientos corporales.
      </p>

      <Image
        alt='Vendaje neuromuscular'
        src='/images/vnm.jpg'
        width='1297'
        height='518'
      />

      <p>
        Es un tratamiento ideal para el deporte y actividades donde es necesaria
        una movilidad completa de las articulaciones. Hacemos uso de la
        elasticidad del esparadrapo con respecto a la de la piel. Estiramos la
        zona a tratar poniendo en posición de elongación a la musculatura y las
        articulaciones, y seguidamente pegamos el esparadrapo. Cuando el miembro
        vuelve a su posición inicial, la elasticidad del esparadrapo hace que se
        eleve ligeramente la piel. Se forman así ondulaciones denominadas
        &quot;convoluciones&quot;. Así, incrementamos el espacio subcutáneo donde se
        encuentran, entre otros, los capilares prelinfáticos, los vasos
        capilares y diversos receptores sensitivos.
      </p>
      <p>
        Uno de los efectos más importantes del VNM es la analgesia por
        disminución de la presión y la mejora de la circulación. Con esta
        técnica podemos eliminar, por ejemplo, un hematoma en la tercera parte
        del tiempo habitual.
      </p>
      <p>
        La función elevadora del VNM disminuye inmediatamente la presión y la
        estimulación de los receptores del dolor en los procesos inflamatorios,
        reestableciendo la circulación sanguínea, la evacuación linfática, y
        aumentando la movilidad.
      </p>
      <p>Resumiendo, los efectos se pueden catalogar en:</p>
      <p>1. Analgesia.</p>
      <p>2. Mejorar la función muscular por regulación del tono muscular.</p>
      <p>3. Ayuda a la función articular, por:</p>
      <ul>
        <li>Estimulación de la propiocepción.</li>

        <li>Corrección de la posición articular.</li>

        <li>Corrección de la dirección del movimiento.</li>

        <li>Aumentar la estabilidad.</li>
      </ul>
      <p>
        4. Eliminar bloqueos de la circulación sanguínea y evacuación linfática.
      </p>
      <p>
        Las nuevas aplicaciones y las amplias posibilidades para su combinación
        terapéutica hacen del VNM una terapia viva y un complemento perfecto a
        cualquier tipo de tratamiento manual.
      </p>
    </>
  );
};

export default Vendaje;
