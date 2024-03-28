import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import CryptoHome from './components/CryptoHome/index'
import Charts from './components/Charts/index'
import Prices from './components/Prices/index'
import Wallet from './components/Wallet/index'
import NotFound from './components/NotFound/index'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={CryptoHome} />
      <Route exact path="/charts" component={Charts} />
      <Route exact path="/prices" component={Prices} />
      <Route exact path="/wallet" component={Wallet} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
