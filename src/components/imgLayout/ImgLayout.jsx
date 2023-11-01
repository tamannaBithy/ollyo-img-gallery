import { useState } from "react";
import imgData from "../../utils/imgData.json";
import "./ImgLayout.css";

const ImgLayout = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [hoveredImage, setHoveredImage] = useState(null);

  // Function to toggle the selection of an image
  const toggleSelection = (id) => {
    if (selectedImages.includes(id)) {
      setSelectedImages(
        selectedImages.filter((selectedId) => selectedId !== id)
      );
    } else {
      setSelectedImages([...selectedImages, id]);
    }
  };

  return (
    <div className=" grid lg:grid-cols-5 grid-cols-3 grid-flow-row gap-8 child-wrapper pb-10">
      {imgData?.map(({ id, imgSrc }) => {
        const isSelected = selectedImages.includes(id);
        const isHovered = hoveredImage === id;

        return (
          <div
            key={id}
            className={`relative image-border ${
              id === 1 ? "row-span-2 col-span-2" : "col-span-1"
            }`}
            onClick={() => toggleSelection(id)}
            onMouseEnter={() => setHoveredImage(id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <img src={imgSrc} alt="gallery" className="hover:brightness-50" />

            {(isSelected || isHovered) && (
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleSelection(id)}
                />
              </label>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImgLayout;
