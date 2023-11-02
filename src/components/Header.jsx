import { useSelection } from "../context/SelectionContext";

const Header = () => {
  const { selectedImages, deleteSelectedImages } = useSelection();

  const handleDelete = () => {
    if (selectedImages.length > 0) {
      deleteSelectedImages();
    }
  };

  return (
    <div className="mx-auto md:px-6 px-3 border-b">
      <div className="flex justify-between items-center p-5">
        <p className="font-bold lg:text-xl text-lg">
          {selectedImages.length > 0
            ? `${selectedImages.length} Files Selected`
            : "Gallery"}
        </p>

        {selectedImages.length > 0 && (
          <button
            onClick={handleDelete}
            className="font-semibold text-red-600 lg:text-lg"
          >
            Delete Files
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
