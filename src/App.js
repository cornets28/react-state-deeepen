import logo from './logo.svg';
import './App.css';
import UseStateHook from './useState/UseStateHook';
import UseReducerHook from './useReducer/UseReducerHook';
import UseEffectHook from './useEffect/UseEffectHook';
import UseRefHook from './useRef/UseRefHook';
import UseLayoutEffectHook from './useLayoutEffect/UseLayoutEffectHook';
import UseImperativeHandleHook from './useImperativeHandle/UseImperativeHandleHook';
import UseContextHook from './useContext/UseContextHook';
// import UseMemoHook from './useMemo/useMemoHook'
import UseCallback from "./useCallback/UseCallback";

function App() {
  return (
    <div className="App">
      {/* <UseStateHook />  */}
      {/* <UseReducerHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseLayoutEffectHook /> */}
      {/* <UseImperativeHandleHook /> */}
      {/* <UseContextHook /> */}
      {/* <UseMemoHook /> */}
      <UseCallback />
    </div>
  );
}

export default App;
