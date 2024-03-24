import Selector from "./Selector";

const CategorySelectors = () => {
  const selectors = ["football", "baseball", "cricket", "boxing"];
  return (
    <div className="flex gap-2 mr-1">
      {selectors.map((item, idx) => (
        <Selector key={idx}>{item}</Selector>
      ))}
    </div>
  );
};

export default CategorySelectors;
