import { transJSXtoDOM } from '@/base/transJSXtoDOM';
import Component from '@/base/Component';
import style from './AboutCard.module.scss';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons/';
import { FontAwesome } from '@/components';
import { FontAwesomeProps } from '@/components/FontAwesome/FontAwesome';

/** @jsx transJSXtoDOM */
export default class AboutCard extends Component<FontAwesomeProps> {
  template() {
    const { title, description, icon } = this.props;

    return (
      <li class={style.aboutCard}>
        <FontAwesome title={title} description={description} icon={icon} size={33} />
        <h4>{title}</h4>
        <p>{description}</p>
      </li>
    );
  }
}
