export function convertDriveLink(shareableLink: string) {
  const match = shareableLink.match(/\/d\/(.*?)\//);
  return match
    ? `https://drive.google.com/uc?export=view&id=${match[1]}`
    : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffreesvg.org%2Fimg%2FPlaceholder.png&f=1&nofb=1&ipt=6912a0db518fbe08f667cfba8b7b8ef25d8924c5445207a3b10820c7568bae70&ipo=images";
}
