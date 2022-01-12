import { transJSXtoDOM } from '@/base/transJSXtoDOM';
import Component from '@/base/Component';
import style from './AboutCard.module.scss';
import { IconLookup } from '@fortawesome/fontawesome-svg-core';
import { FontAwesome } from '@/components';
interface Props {
  title: string;
  description: string;
  icon: IconLookup;
  iconTitle: string;
}

/** @jsx transJSXtoDOM */
export default class AboutCard extends Component<Props> {
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
