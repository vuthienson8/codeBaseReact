import './App.scss';
import logo from './logo.svg';
import Test from './pages/test';

function App() {
  return (
    <Suspense fallback={<></>}>
      <Test />
    </Suspense>
  );
}

export default App;
