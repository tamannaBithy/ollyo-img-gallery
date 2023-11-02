/* eslint-disable react/prop-types */
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableImg = ({
  img,
  selectedImages,
  hoveredImage,
  setHoveredImage,
  toggleSelection,
  index,
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

  const handleClick = (event) => {
    // Check if the click target is the checkbox element
    if (event.target.tagName === "INPUT") {
      toggleSelection(id);
    }
  };

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        className={`relative ${
          index === 0 ? "row-span-2 col-span-2" : "col-span-1"
        } rounded-xl`}
        onClick={handleClick}
        onMouseEnter={() => setHoveredImage(id)}
        onMouseLeave={() => setHoveredImage(null)}
      >
        {(isSelected || isHovered) && (
          <label className="checkbox">
            <input
              className="opacity-100 cursor-pointer absolute z-10 md:w-6 md:h-6 m-2 md:m-4"
              type="checkbox"
              checked={isSelected}
              onChange={() => toggleSelection(id)}
            />
          </label>
        )}
        <div
          className={`border rounded-xl border-gray-300 bg-white hover:brightness-50 transition ease-in-out cursor-pointer ${
            isSelected && `opacity-60`
          }`}
          {...listeners}
        >
          <img className="rounded-xl" src={imgSrc} alt="gallery" />
        </div>
      </div>
    </>
  );
};

export default SortableImg;
