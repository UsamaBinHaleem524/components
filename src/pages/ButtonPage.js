import { IoIosHome,IoIosContact } from "react-icons/io";
import { MdOutlineProductionQuantityLimits,MdOutlineWebhook } from "react-icons/md";
import { AiFillFileUnknown } from "react-icons/ai";
import Button from "../components/Button";
function ButtonPage() {
    const handleClick=()=>{}
  return (
    <div>
      <div>
        <Button primary outline onClick={handleClick}>
          <IoIosHome  /> Home
        </Button>
      </div>
      <div>
        <Button secondary><MdOutlineProductionQuantityLimits onMouseEnter={handleClick}/> Products</Button>
      </div>
      <div>
        <Button success outline>
        <AiFillFileUnknown />
          About Us
        </Button>
      </div>
      <div>
        <Button warning rounded>
        <IoIosContact  />
          Contact Us
        </Button>
      </div>
      <div>
        <Button danger>
        <MdOutlineWebhook />
        New Arrivals
        </Button>
      </div>
    </div>
  );
}
export default ButtonPage;
