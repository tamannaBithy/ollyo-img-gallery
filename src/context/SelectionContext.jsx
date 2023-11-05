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

  //for select img
  const toggleSelection = (id) => {
    if (selectedImages.includes(id)) {
      setSelectedImages(
        selectedImages.filter((selectedId) => selectedId !== id)
      );
    } else {
      setSelectedImages([...selectedImages, id]);
    }
  };

  //for delete img
  const deleteSelectedImages = () => {
    const updatedImages = images?.filter(
      (image) => !selectedImages.includes(image.id)
    );
    setImages(updatedImages);

    setSelectedImages([]);
  };

  //for img upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const newImage = {
          id: images.length + 1,
          imgSrc: e.target.result,
        };

        setImages([...images, newImage]);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <SelectionContext.Provider
      value={{
        images,
        setImages,
        selectedImages,
        toggleSelection,
        deleteSelectedImages,
        handleImageUpload,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
}
