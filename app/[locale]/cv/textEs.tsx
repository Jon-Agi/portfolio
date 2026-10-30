export default function TextEs() {
  const spaceBetweenTitle = "mb-3";
  const shortSpace = "mb-5";
  const longSpace = "mb-10";
  return (
    <div>
      <p className={`${spaceBetweenTitle} text-2xl font-bold`}>Sobre mí,</p>
      <p className={`${shortSpace}`}>
        Soy Jon Aginako, nacido en Vitoria-Gasteiz el 14 de enero del 2000 y
        residente en Zigoitia (Álava). Desde la infancia, el cine y los
        videojuegos han sido dos grandes pasiones en mi vida. He crecido con un
        mando en la mano y acudiendo al cine a ver los estrenos en la gran
        pantalla, fascinado por la capacidad del medio audiovisual para emocionar y
        contar historias.
      </p>
      <p className={`${shortSpace}`}>
        El mundo de la creación de contenido es otro punto muy presente en mi
        día a día, consumo frecuentemente vídeos de Youtube o directos en
        Twitch, estoy interesado e informado en el funcionamiento de estas
        plataformas, incluso tengo un canal propio de ambas para entenderlas a
        fondo.
      </p>
      <p className={`${shortSpace}`}>
        Con el tiempo, descubrí mi lugar en la edición de vídeo, una disciplina
        donde puedo unir creatividad y técnica. Disfruto trabajando con
        programas como DaVinci Resolve y Adobe Premiere, y me mantengo en
        constante aprendizaje. También me interesan áreas afines como la
        animación (Blender o After Effects) y la fotografía (Photoshop).
      </p>
      <p className={`${longSpace}`}>
        Mi objetivo profesional es desarrollarme en el ámbito audiovisual,
        especialmente en el montaje y la edición de vídeo, aunque siempre estoy
        abierto a explorar nuevas oportunidades dentro del sector creativo y
        tecnológico.
      </p>
    </div>
  );
}
