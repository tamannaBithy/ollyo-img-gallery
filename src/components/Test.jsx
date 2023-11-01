/* eslint-disable react/prop-types */
import { useState } from "react";
import imgData from "../utils/imgData.json";
import "./imgLayout/ImgLayout.css";

import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import SortableImg from "./imgLayout/SortableImg";

const Test = () => {
  const [images, setImages] = useState(imgData);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);

  console.log(selectedImages);

  const toggleSelection = (id) => {
    if (selectedImages.includes(id)) {
      setSelectedImages(
        selectedImages.filter((selectedId) => selectedId !== id)
      );
    } else {
      setSelectedImages([...selectedImages, id]);
    }
  };

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    setImages((images) => {
      const oldIndex = images.findIndex((img) => img?.id === active.id);
      const newIndex = images.findIndex((img) => img?.id === over.id);
      return arrayMove(images, oldIndex, newIndex);
    });
  };

  return (
    <div>
      <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <SortableContext items={images} strategy={rectSortingStrategy}>
          <div className="grid lg:grid-cols-5 grid-cols-3 grid-flow-row gap-8 child-wrapper pb-10">
            {images.map((img) => (
              <SortableImg
                key={img?.id}
                img={img}
                selectedImages={selectedImages}
                hoveredImage={hoveredImage}
                setHoveredImage={setHoveredImage}
                toggleSelection={toggleSelection}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default Test;
