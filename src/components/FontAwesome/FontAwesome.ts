import Component from '@/base/component';
import { transJSXtoDOM } from '@/base/transJSXtoDOM';
import { stringToDOMArray } from '@/utils';
import { IconLookup, icon as _icon } from '@fortawesome/fontawesome-svg-core';

interface Props {
  title: string;
  description: string;
  icon: IconLookup;
  iconTitle?: string;
  size?: number;
}

/** @jsx transJSXtoDOM */
export default class FontAwesome extends Component<Props> {
  createDOMIcon() {
    const { icon, iconTitle, size } = this.props;

    const iconTemplete = _icon(icon, {
      transform: { size },
      title: iconTitle,
    }).html;
    return stringToDOMArray(iconTemplete[0]);
  }

  template() {
    return this.createDOMIcon.call(this);
  }
}
