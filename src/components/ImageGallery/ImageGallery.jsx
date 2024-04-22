import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, openModal }) {
  return (
    <ul className={css.list}>
      {/* Набір елементів списку із зображеннями */}
      {items.map((item) => {
        return (
          <li className={css.item} key={item.id} onClick={openModal}>
            <div>
              <img
                className={css.image}
                src={item.urls.small}
                alt={item.alt_description}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
