const Header = () => {
  return (
    <div className="child-wrapper border-b">
      <div className="flex justify-between items-center p-5 ">
        <p className="font-bold lg:text-xl text-lg">3 Files Selected</p>
        <p className="font-semibold text-red-600 lg:text-lg">Delete Files</p>
      </div>
    </div>
  );
};

export default Header;
