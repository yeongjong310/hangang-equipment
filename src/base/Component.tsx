import { transJSXtoDOM } from '@/base/transJSXtoDOM';

interface commonProps {
  children?: HTMLElement[] | HTMLElement | ((...pram: unknown[]) => HTMLElement);
  class?: string;
  role?: string;
  tabindex?: string;
  onclick?: (e: Event) => void;
}

/** @jsx transJSXtoDOM */
export default class Component<Props = unknown, State = unknown> {
  $node: ChildNode;
  props?: Props & commonProps;
  state?: State;

  constructor(props?: Props & commonProps) {
    this.props = props;
  }

  setState(newState: Partial<State>) {
    this.state = { ...this.state, ...newState };
    this.reRender();
  }

  componentDidMount() {
    throw new Error('Method not implemented.');
  }

  reRender() {
    const $parent = this.$node.parentNode;
    const $newNode = this.template();

    $parent.replaceChild($newNode, this.$node as ChildNode);

    this.$node = $newNode;
  }

  render() {
    const $newNode = this.template();
    this.$node = $newNode;

    setTimeout(() => {
      this.componentDidMount();
    });
  }

  template(): HTMLElement {
    throw new Error('Method not implemented.');
  }

  static component = Symbol.for('JSComponent');
}
