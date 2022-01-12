import { transJSXtoDOM } from '@/base/transJSXtoDOM';
import Component from '@/base/Component';
import style from './AboutCard.module.scss';
import { stringToDOMArray } from '@/utils';
import { icon as _icon } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface Props {
  title: string;
  description: string;
  icon: IconDefinition;
  iconTitle: string;
}

/** @jsx transJSXtoDOM */
export default class AboutCard extends Component<Props> {
  createDOMIcon() {
    const { icon, iconTitle } = this.props;
    console.log(icon);
    const iconTemplete = _icon(icon, {
      transform: { size: 33 },
      title: iconTitle,
    }).html;
    console.log(iconTemplete);
    return stringToDOMArray(iconTemplete[0]);
  }

  template() {
    const { title, description } = this.props;

    return (
      <li class={style.aboutCard}>
        {this.createDOMIcon.call(this)}
        <h4>{title}</h4>
        <p>{description}</p>
      </li>
    );
  }
}
