/* eslint-disable react/prop-types */
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./ImgLayout.css";

const SortableImg = ({
  img,
  selectedImages,
  hoveredImage,
  setHoveredImage,
  toggleSelection,
}) => {
  const { id, imgSrc } = img;

  const isSelected = selectedImages.includes(id);
  const isHovered = hoveredImage === id;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const handleMouseDown = (event) => {
    if (!event.defaultPrevented) {
      // Check if the click target is the checkbox element
      if (event.target.tagName === "INPUT") {
        toggleSelection(id);
      }
    }
  };

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        className={`relative ${
          id === 1 ? "row-span-2 col-span-2" : "col-span-1"
        }`}
        onClick={handleMouseDown}
        onMouseEnter={() => setHoveredImage(id)}
        onMouseLeave={() => setHoveredImage(null)}
      >
        <div className="image-border img-transition" {...listeners}>
          <img src={imgSrc} alt="gallery" />
        </div>

        {(isSelected || isHovered) && (
          <label className="checkbox-label ">
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => toggleSelection(id)}
            />
          </label>
        )}
      </div>
    </>
  );
};

export default SortableImg;
