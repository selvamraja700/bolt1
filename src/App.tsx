import { Switch, Route } from 'wouter';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={Home} />
      <Route path="/products" component={Home} />
      <Route path="/services" component={Home} />
      <Route path="/faq" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
