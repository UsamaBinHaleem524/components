import SortableTable from "../components/SortableTable";
//import Table from "../components/Table";
function TablePage() {
  const fruit = [
    { name: "orange", color: "bg-orange-500", score: 5 },
    { name: "apple", color: "bg-red-500", score: 3 },
    { name: "banana", color: "bg-yellow-500", score: 2 },
    { name: "lime", color: "bg-green-500", score: 1 },
  ];
  const config = [
    { label: "Fruits", render: (fruit) => fruit.name, sortValue:(fruit)=>fruit.name },
    { label: "Color", render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div> },
    { label: "Score", render: (fruit) => fruit.score, sortValue:(fruit)=>fruit.score },
    { label: "Score Squared", render: (fruit) => fruit.score**2, sortValue:(fruit)=>fruit.score },
  ];
  const keyFn=(fruit)=>{
    return fruit.name;
  }
  return (
    <div>
      <SortableTable data={fruit} config={config} keyFn={keyFn}></SortableTable>
    </div>
  );
}
export default TablePage;
