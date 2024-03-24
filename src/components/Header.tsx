import CategorySelectors from "./CategorySelectors";

const Header = () => {
  return (
    <header className="bg-gray-900 h-12 p-2 pl-4 flex items-center fixed w-full justify-between">
      <img className="w-20 mr-2" src="/smarkets.svg" alt="" />
      <CategorySelectors />
    </header>
  );
};

export default Header;
