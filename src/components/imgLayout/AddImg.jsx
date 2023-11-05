import { useSelection } from "../../context/SelectionContext";
import viewImg from "/view.svg";

const AddImg = () => {
  const { handleImageUpload } = useSelection();

  return (
    <div className="h-[130px] md:h-[200px] lg:h-[260px] border-dashed border-2 border-gray-300 rounded-xl flex items-center bg-gray-50 ">
      <label className="mx-auto cursor-pointer" htmlFor="fileInput">
        <input
          type="file"
          accept="image/*"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
        <div className="md:space-y-6 space-y-2">
          <div className="px-8">
            <img className=" w-6 lg:w-10" src={viewImg} alt="view" />
          </div>
          <p className="font-semibold md:text-lg text-sm px-1 md:px-0">
            Add Images
          </p>
        </div>
      </label>
    </div>
  );
};

export default AddImg;
