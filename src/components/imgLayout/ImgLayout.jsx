import { useState } from "react";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import SortableImg from "./SortableImg";
import { useSelection } from "../../context/SelectionContext";
import AddImg from "./AddImg";

const ImgLayout = () => {
  const { images, setImages, selectedImages, toggleSelection } = useSelection();

  const [hoveredImage, setHoveredImage] = useState(null);

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
    <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
      <SortableContext items={images} strategy={rectSortingStrategy}>
        <div className="grid lg:grid-cols-5 grid-cols-3 gap-2 md:gap-8 py-4 px-2 md:p-8">
          {images?.map((img, index) => (
            <SortableImg
              key={img?.id}
              img={img}
              index={index}
              selectedImages={selectedImages}
              hoveredImage={hoveredImage}
              setHoveredImage={setHoveredImage}
              toggleSelection={toggleSelection}
            />
          ))}

          {/* adding new img feature */}
          <AddImg />
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default ImgLayout;
