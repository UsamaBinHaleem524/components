import Accordion from "../components/Accordion";
function AccordionPage() {
  const items = [
    {
      id: "11",
      label: "Hy my name is Usama Bin Haleem",
      content:
        "I study in comsats University Lahore and doing BCE and my current semester is 8th",
    },
    {
      id: "22",
      label: "Hy my name is Usama Bin Haleem",
      content:
        "I study in comsats University Lahore and doing BCE and my current semester is 8th",
    },
    {
      id: "33",
      label: "Hy my name is Usama Bin Haleem",
      content:
        "I study in comsats University Lahore and doing BCE and my current semester is 8th",
    },
  ];
  return (
    <div>
      <Accordion items={items}/>
    </div>
  );
}
export default AccordionPage;
