/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import imgData from "../utils/imgData.json";

const SelectionContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useSelection() {
  return useContext(SelectionContext);
}

export function SelectionProvider({ children }) {
  const [images, setImages] = useState(imgData);
  const [selectedImages, setSelectedImages] = useState([]);

  const toggleSelection = (id) => {
    if (selectedImages.includes(id)) {
      setSelectedImages(
        selectedImages.filter((selectedId) => selectedId !== id)
      );
    } else {
      setSelectedImages([...selectedImages, id]);
    }
  };

  const deleteSelectedImages = () => {
    const updatedImages = images?.filter(
      (image) => !selectedImages.includes(image.id)
    );
    setImages(updatedImages);

    setSelectedImages([]);
  };

  return (
    <SelectionContext.Provider
      value={{
        images,
        setImages,
        selectedImages,
        toggleSelection,
        deleteSelectedImages,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
}
