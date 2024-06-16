import Table from "./Table";
import useSort from "../Hooks/use-sort";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
function SortableTable(props) {
  const { config, data } = props;
  const {sortBy,sortOrder,setSortColumn,sortedData}=useSort(data,config);
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th className="cursor-pointer hover:bg-gray-100"
          onClick={() => {
            setSortColumn(column.label);
          }}
        >
        <div className="flex item-center">
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
          </div>
        </th>
      ),
    };
  });
  return (
    <div>
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
}
function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoTriangleUp />
        <GoTriangleDown />
      </div>
    );
  } else if (sortOrder === null) {
    return (
      <div>
        <GoTriangleUp />
        <GoTriangleDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <GoTriangleUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <GoTriangleDown />
      </div>
    );
  }
}
export default SortableTable;
