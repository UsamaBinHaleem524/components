import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
function CounterPage({ initialCounter }) {
  // const [count, setCount] = useState(initialCounter);
  // const [valuetoAdd, setValuetoAdd] = useState(0);
  const INCREMENT_COUNT = "increment";
  const DECREMENT_COUNT = "decrement";
  const SET_VALUE_TO_ADD = "value-add-to-change";
  const ADD_VALUE_TO_COUNT = "Add_value_to_count";
  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT_COUNT:
        return {
          ...state,
          count: state.count + 1,
        };
      case DECREMENT_COUNT:
        return {
          ...state,
          count: state.count - 1,
        };
      case SET_VALUE_TO_ADD:
        return {
          ...state,
          valuetoAdd: action.payload,
        };

      case ADD_VALUE_TO_COUNT:
        return {
          count: state.count + state.valuetoAdd,
          valuetoAdd: 0,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    count: initialCounter,
    valuetoAdd: 0,
  });
  const increament = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };
  const decreament = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };
  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <Panel>
      <h1>count is {state.count}</h1>
      <div className="flex flex-row space-x-2">
        <Button primary onClick={increament}>
          Increament
        </Button>
        <Button primary onClick={decreament}>
          Decreament
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add the Number</label>
        <input
          className="p-1 m-3 bg-gray-50 border"
          type="number"
          onChange={handleChange}
          value={state.valuetoAdd || ""}
        ></input>
        <Button>Add</Button>
      </form>
    </Panel>
  );
}
export default CounterPage;
