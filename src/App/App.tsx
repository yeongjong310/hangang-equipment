import { transJSXtoDOM } from '@/base/transJSXtoDOM';
import Component from '@/base/Component';
import { Router } from '@/Router/Router';
import 'element-closest-polyfill';
import '@/styles/index.scss';

/** @jsx transJSXtoDOM */
export default class App extends Component {
  template() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}
