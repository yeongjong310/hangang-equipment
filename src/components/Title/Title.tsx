import { transJSXtoDOM } from '@/base/transJSXtoDOM';
import Component from '@/base/Component';
import styles from './Title.module.scss';
import { generateClassName } from '@/utils';

interface Props {
  title: string;
  description?: string;
}

/** @jsx transJSXtoDOM */
export default class Title extends Component<Props> {
  template() {
    const { title, description } = this.props;
    return (
      <section class={generateClassName(styles.title__section)}>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </section>
    );
  }
}
