import Component from '@/base/component';
import { transJSXtoDOM } from '@/base/transJSXtoDOM';
import { stringToDOMArray } from '@/utils';
import { icon as _icon, IconDefinition as iconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons/';

export interface FontAwesomeProps {
  title: string;
  description: string;
  icon: IconDefinition;
  iconTitle?: string;
  size?: number;
}

/** @jsx transJSXtoDOM */
export default class FontAwesome extends Component<FontAwesomeProps> {
  createDOMIcon() {
    const { icon, iconTitle, size } = this.props;
    // fontAwesome에서 제공하는 타입의 불일치로 인해 아래와 같이 작성함
    // IconName에 repeat1-alt... 를 사용할 경우 문제가 생길 수 있음.
    // 추후 코드 수정 필요
    const iconTemplete = _icon(icon as iconDefinition, {
      transform: { size },
      title: iconTitle,
    }).html;
    return stringToDOMArray(iconTemplete[0]);
  }

  template() {
    return this.createDOMIcon.call(this);
  }
}
