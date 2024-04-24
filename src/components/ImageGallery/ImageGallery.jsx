import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, openModal }) {
  return (
    <ul className={css.list}>
      {/* Набір елементів списку із зображеннями */}
      {items.map((item) => {
        return (
          <li className={css.item} key={item.id}>
            <ImageCard item={item} openModal={openModal} />
          </li>
        );
      })}
    </ul>
  );
}
