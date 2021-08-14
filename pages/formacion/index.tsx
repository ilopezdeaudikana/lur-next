import type { NextPage } from 'next';
import Image from 'next/image';

const Curriculum: NextPage = () => {
  return (
    <>
      <h2>Formación</h2>
      <p>
        Máster en medicina osteopática kinesiología y suplementación en el
        deporte - Sanasport escuela superior de medicina manual-osteopatía
      </p>
      <p>
        Experto en micro nutrición y suplementacion en la actividad
        físico-deportiva - universidad de Almería (instituto de alimentación
        funcional)
      </p>
      <p>Medicina tradicional china - escuela superior de MTC </p>

      <p>
        Acupuntura, moxibustión y auriculoterapia - centro de enseñanza de
        medicina tradicional china C.E.M.E.T.C.
      </p>
      <p>Farmacopea y diagnóstico con Manuel Laborda Aznar.</p>
      <p>Acupuntura y moxibustión - centro internacional de Beijing. </p>
      <p>Osteopatía - centro Hermes – Fedine.</p>
      <p>Masaje deportivo - centro Hermes , Irrintzi e Intersa.</p>
      <p>
        Masaje de movilización articular (MMA) y rodillo caliente (RC) –
        Fortefis.
      </p>
      <br />

      <Image
        alt='Tinin, responsable de Lur terapia naturalak.'
        src='/images/curriculum.jpg'
        width='400'
        height='269'
      />
      <p>
        <strong>Tinin, responsable de Lur terapia naturalak.</strong>
      </p>

      <h2>Formación continua </h2>
      <p>Ginecología y obstetricia en MTC.</p>
      <p>Auriculomedicina método Nogier.</p>
      <p>Osteopatía pediátrica.</p>
      <p>Alimentación energética (Montse Bradford).</p>
      <p>Vendaje neuromuscular – kinesiotape.</p>
      <p>Asistente congresos SITEM terapias manuales.</p>

      <h2>Experiencia laboral </h2>
      <p>15 años de experiencia laboral en consulta propia:</p>
      <p>- Centro de terapias naturales Baxajaun – consulta. </p>
      <p>
        - Lur terapia naturalak - responsable y terapeuta del centro desde mayo
        de 2006 hasta la actualidad.
      </p>
      <p>Prácticas en el centro internacional de Beijing.</p>
      <p>
        CD Aurrera de Vitoria y Atenea futbol sala – Masajista, osteópata y
        acupuntor.
      </p>
      <p>
        Centro médico Cervantes (Miranda de Ebro) – Osteópata área de
        rehabilitación.
      </p>
      <p>Gimnasio Rodas – Masajista, osteópata y acupuntor.</p>
      <p>Profesor en cursos de formación de masaje Orthos Vitoria. </p>
      <p>Colaborador con artículos de salud en Sportvicious.</p>
    </>
  );
};

export default Curriculum;
