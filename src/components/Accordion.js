import { useState } from "react";
import { GoChevronRight, GoChevronDown } from "react-icons/go";
function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const handleClick = (nextIndex) => {
    if(expandedIndex===nextIndex){
      setExpandedIndex(-1);
    }else{
        setExpandedIndex(nextIndex);
    }
  };
  const renderItems = items.map((items, index) => {
    const isExpanded = index === expandedIndex;
    const icon = <span className="text-2xl">{isExpanded ? <GoChevronDown /> : <GoChevronRight />} </span>;
    return (
      <div key={items.id}>
        <div onClick={() => handleClick(index)} className="flex p-3 cursor-pointer bg-gray-300 border-b justify-between">
          {items.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{items.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderItems}</div>;
}
export default Accordion;
