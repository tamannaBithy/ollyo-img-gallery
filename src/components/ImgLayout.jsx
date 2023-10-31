import imgData from "../utils/imgData.json";

const ImgLayout = () => {
  return (
    <div className="grid grid-cols-5 grid-flow-row gap-8 child-wrapper">
      <div className="testb row-span-2 col-span-2">text</div>

      {imgData?.map(({ id, imgSrc }) => {
        return (
          <div key={id}>
            <div className="col-span-1 testb">
              <img src={imgSrc} alt="gallery" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImgLayout;
