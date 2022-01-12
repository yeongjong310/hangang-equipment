import { transJSXtoDOM } from './base/transJSXtoDOM';
import App from '@/App/App';

const $root = document.getElementById('root');

/** @jsx transJSXtoDOM */
$root.appendChild(<App />);
