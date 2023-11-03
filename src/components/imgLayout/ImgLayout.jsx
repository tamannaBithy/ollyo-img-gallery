import { useState } from "react";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import SortableImg from "./SortableImg";
import { useSelection } from "../../context/SelectionContext";
import { FaRegImage } from "react-icons/fa6";
import SortableImgs from "../Test";

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
        <div className="grid lg:grid-cols-5 grid-cols-3 gap-2 md:gap-8 p-2 md:p-8">
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

          <div className="border-dashed border-2 border-gray-300 rounded-xl flex items-center bg-gray-50">
            <div className="mx-auto md:space-y-6 space-y-2">
              <div className="px-8 lg:text-3xl text-xl">
                <FaRegImage />
              </div>
              <p className="font-semibold md:text-lg text-sm px-1 md:px-0">
                Add Images
              </p>
            </div>
          </div>
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default ImgLayout;
