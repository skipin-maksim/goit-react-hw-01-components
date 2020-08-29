import styles from "./Statistics.module.scss";

export default function colorPicker(label) {
  switch (label) {
    case ".docx":
      return styles.itemDocx;
    case ".pdf":
      return styles.itemPdf;
    case ".mp3":
      return styles.itemMp3;
    case ".psd":
      return styles.itemPsd;

    default:
      return styles.item;
  }
}
