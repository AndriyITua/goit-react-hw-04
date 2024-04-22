export default function ImageGallery({ items }) {
  return (
    <ul>
      {/* Набір елементів списку із зображеннями */}
      {items.map((item) => {
        return (
          <li key={item.id}>
            <div>
              <img src={item.urls.small} alt={item.alt_description} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
