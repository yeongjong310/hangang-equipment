import { transJSXtoDOM } from '@/base/transJSXtoDOM';
import Component from '@/base/Component';
import styles from './LandingListCard.module.scss';
import { stringToDOMArray } from '@/utils';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faFaucet, faSun, faTint, faTools } from '@fortawesome/free-solid-svg-icons';
import { IconLookup } from '@fortawesome/fontawesome-common-types';
interface Props {
  service: {
    iconClassName: string;
    title: string;
    iconTitle: string;
    explain: string;
  };
}

/** @jsx transJSXtoDOM */
export default class LandingListCard extends Component<Props> {
  getIconArray() {
    const { iconClassName, iconTitle } = this.props.service;
    let targetIcon;

    switch (iconClassName) {
      case 'fa-faucet':
        targetIcon = faFaucet;
        break;
      case 'fa-sun':
        targetIcon = faSun;
        break;
      case 'fa-tint':
        targetIcon = faTint;
        break;
      case 'fa-tools':
        targetIcon = faTools;
        break;
    }

    const iconTemplete = icon(targetIcon as IconLookup, {
      transform: { size: 16 },
      title: iconTitle,
    }).html;

    return stringToDOMArray(iconTemplete[0]).map($icon => {
      ($icon as HTMLElement).classList.add(styles.service__icon);
      return $icon;
    });
  }

  template() {
    const { service } = this.props;

    return (
      <li class={styles.service}>
        {this.getIconArray.call(this)}
        <h4 class={styles}>{service.title}</h4>
        <span class={styles.service__description}>{service.explain}</span>
        <span class={styles.service__detail}>자세히보기</span>
      </li>
    );
  }
}
