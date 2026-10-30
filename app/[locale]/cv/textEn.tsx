export default function TextEn() {
  const spaceBetweenTitle = "mb-3";
  const shortSpace = "mb-5";
  const longSpace = "mb-10";
  return (
    <div>
      <p className={`${spaceBetweenTitle} text-2xl font-bold`}>About me,</p>
      <p className={`${shortSpace}`}>
        My name is Jon Aginako. I was born in Vitoria-Gasteiz on January 14,
        2000, and I live in Zigoitia (Álava). Since childhood, cinema and video
        games have been two passions of mine. I grew up with a controller in my
        hand and going to the cinema to see new releases on the big screen. I
        have always been fascinated by the ability of audiovisual media to move
        people and tell stories.
      </p>
      <p className={`${shortSpace}`}>
        The world of content creation is very present in my daily life. I
        frequently watch videos on YouTube or streams on Twitch, and I am
        interested in and informed about how these platforms work. I even have
        my own channel on both mentioned platforms to understand them in depth.
      </p>
      <p className={`${shortSpace}`}>
        Over time, I discovered my place in video editing, a discipline where I
        combine creativity and technique. I enjoy working with programs such as
        DaVinci Resolve and Adobe Premiere, and I am constantly learning. I am
        also interested in related areas such as animation (Blender or After
        Effects) and digital photography (Photoshop).
      </p>
      <p className={`${longSpace}`}>
        My professional goal is to develop my skills in the audiovisual field,
        especially in video editing and montage, although I am always open to
        exploring new opportunities within the creative and technological
        sectors.
      </p>
    </div>
  );
}
