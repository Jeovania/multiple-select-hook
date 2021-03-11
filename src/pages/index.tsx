import { FC } from "react";
import SelectableImage from "../components/SelectabledImage";
import styles from "./index.module.css";
import { useMultipleSelect } from "../hooks/useMultipleSelect";
import locale from "../assets/locale.json";
import gallery from "../assets/gallery.json";

interface Gallery {
  name: string;
  alt: string;
}

const Page: FC = () => {
  const MultipleSelect = useMultipleSelect<Gallery>([]);

  const handleDownload = () => {
    if (MultipleSelect.getSize() > 0) {
      console.log(MultipleSelect.getItems());
      alert(locale.download_success_message);
    } else {
      alert(locale.download_error_message);
    }
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <section className={styles.titleWrapper}>
          <h1 className={styles.title}>{locale.title}</h1>
          {
            <h3 className={styles.subtitle}>{`${MultipleSelect.getSize()} ${
              locale.subtitle
            }`}</h3>
          }
        </section>
        <div className={styles.buttonsWrapper}>
          <button
            onClick={() => MultipleSelect.toggleAllItems(gallery)}
            className={styles.button}
          >
            {MultipleSelect.getSize() > 0 ? locale.deselect : locale.select}
          </button>
          <button onClick={handleDownload} className={styles.button}>
            {locale.download}
          </button>
        </div>
      </header>

      <section className={styles.gallery}>
        {gallery.map((image) => (
          <SelectableImage
            key={image.name}
            isChecked={MultipleSelect.hasItem(image)}
            onClick={() => MultipleSelect.toggleItem(image)}
          />
        ))}
      </section>
    </div>
  );
};

export default Page;
