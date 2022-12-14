
import './App.css';
import DemoGrid from './TailWindComponent/DemoGrid';
import PaddingMarginDemo from './TailWindComponent/PaddingMarginDemo';
import WidthHeightDemo from './TailWindComponent/WidthHeightDemo';
import FlexDemo from './TailWindComponent/FlexDemo';
import RespnsiveDemo from './TailWindComponent/RespnsiveDemo';
import CustomCss from './TailWindComponent/CustomCss';
import BaiTapLayoutTailwindCSS from './TailWindComponent/BaiTapLayoutTailwindCSS';
import JoinDemo from './Lodash/JoinDemo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import New from './pages/New/New';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Detail from './pages/Detail/Detail';


const TicketBookLazy = lazy(() => import('./pages/TicketBook/TicketBook'))
const HomeLazy = lazy(() => import('./pages/Home/Home'))





function App() {
  return (
    <div className="App">
      {/* <DemoGrid /> */}
      {/* <PaddingMarginDemo/> */}
      {/* <WidthHeightDemo/> */}
      {/* <FlexDemo/> */}
      {/* <RespnsiveDemo/> */}
      {/* <CustomCss/> */}
      {/* <BaiTapLayoutTailwindCSS/> */}
      {/* <JoinDemo/> */}

      <BrowserRouter>
        <Switch>
          <Suspense fallback={<h1>ĐANG TẢI...</h1>}>
            <Route exact path="/home" component={HomeLazy} />

            <Route exact path="/contact" component={Contact} />
            <Route exact path="/new" component={New} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/detail/:id" component={Detail} />
            <Route exact path="/checkout/:id" component={TicketBookLazy} />

            <Route exact path="/" component={Home} />
          </Suspense>
        </Switch>
      </BrowserRouter>

    </div>

  );
}

export default App;
