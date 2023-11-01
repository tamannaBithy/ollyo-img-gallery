import { useState } from "react";
import imgData from "../../utils/imgData.json";
import "./ImgLayout.css";
import featureImg from "/images/image-11.jpeg";

const ImgLayout = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [hoveredImage, setHoveredImage] = useState(null);

  console.log(selectedImages);

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
    <div className="grid lg:grid-cols-5 grid-cols-3 grid-flow-row gap-8 child-wrapper pb-10">
      <div className="row-span-2 col-span-2 image-border hover:brightness-50">
        <img src={featureImg} alt="featureImage" />
      </div>

      {imgData?.map(({ id, imgSrc }) => {
        const isSelected = selectedImages.includes(id);
        const isHovered = hoveredImage === id;

        return (
          <div key={id} className="relative">
            <div
              className={`col-span-1 image-border ${
                isSelected ? "selected" : ""
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
          </div>
        );
      })}
    </div>
  );
};

export default ImgLayout;
