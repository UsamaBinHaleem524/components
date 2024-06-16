import { useState, useRef, useEffect } from "react";
import Panel from "./Panel";
import { GoChevronDown } from "react-icons/go";
function Dropdown({ options, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handler, true);
    return()=>{
      document.removeEventListener('click',handler);
    }
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (options) => {
    onChange(options);
    setIsOpen(false);
  };
  const renderedItems = options.map((options) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(options)}
        key={options.value}
      >
        {options.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select"} <GoChevronDown className="text-lg" />
      </Panel>
      <div>
        {isOpen && <Panel className="abolute top-full">{renderedItems}</Panel>}
      </div>
    </div>
  );
}
export default Dropdown;
