export interface ICollapseProps {
  /**
   * @description 展开的面板，支持 v-model 双向绑定
   */
  value?: string[] | number[],
  /**
   * @description 手风琴模式，每次只打开一个面板
   * @default false
   */
  accordion: boolean,
  /**
   * @description 面板内列表标签宽度
   */
  labelWidth: number,
  /**
   * @description 折叠面板标题
   */
  title: string,
}

export const CollapseProps = {
  value: Array,
  accordion: {
    type: Boolean,
    default: false,
  },
  labelWidth: Number,
  title: String,
};

export interface ICollapsePanelProps {
  /**
   * @description 面板标识 name，不填为索引值
   */
  name?: string | number,
  /**
   * @description 标题，支持命名slot
   */
  title: string | number,
  /**
   * @description 是否展开态，支持 v-model 双向绑定
   * @default false
   */
  active: boolean,
  /**
   * @description 右侧补充描述，支持命名slot
   */
  extra: string | number,
  /**
   * @description 内容，默认slot；数组，则为列表内容
   */
  content: any[] | string | number,
  /**
   * @description 若为`true`，面板将不可展开/折叠
   */
  disabled: boolean,
  /**
   * @description 默认`true`，面板头部可点，触发展开/折叠事件
   */
  headerClickable: boolean,
}
export const CollapsePanelProps = {
  name: [String, Number],
  active: {
    type: Boolean,
    default: false,
  },
  title: [String, Number],
  extra: [String, Number],
  content: [String, Number, Array],
  disabled: Boolean,
  headerClickable: {
    type: Boolean,
    default: true,
  },
};

/**
 * @description: 折叠面板按钮图标
 */
export enum CollapseIcon {
  active = 'arrow-up',
  // 非展开态
  inactive = 'arrow-down',
}
