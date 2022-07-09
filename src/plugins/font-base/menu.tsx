import "./index.scss";
import { FC, useMemo } from "react";
import { InputNumber } from "@arco-design/web-react";
import { FontBaseConfig } from "./index";
import { useMemoizedFn } from "ahooks";

interface Props {
  top: number;
  left: number;
  config: FontBaseConfig;
  onChange: (value: FontBaseConfig) => void;
}

export const FONT_COLOR_LIST = [
  "var(--color-text-1)",
  "rgb(var(--gray-6))",
  "rgb(var(--red-6))",
  "rgb(var(--blue-6))",
  "rgb(var(--green-6))",
  "rgb(var(--orange-6))",
  "rgb(var(--purple-6))",
  "rgb(var(--magenta-6))",
  "rgb(var(--pinkpurple-6))",
];

export const FontBaseMenu: FC<Props> = props => {
  const top = props.top + 50;
  const left = props.left - 180;

  const onChange = useMemoizedFn(
    (key: keyof FontBaseConfig, value: string | number | undefined) => {
      console.log(key, value);
      props.onChange({ ...props.config, [key]: value });
    }
  );

  const generatePicker = useMemo(
    () => (list: string[] | (string | undefined)[], type: keyof FontBaseConfig) => {
      return (
        <div className="font-base-picker">
          {list.map((item, index) => (
            <div
              key={index}
              className="picker-item"
              onClick={() => onChange(type, item)}
              style={{ backgroundColor: item }}
            ></div>
          ))}
        </div>
      );
    },
    [onChange]
  );

  return (
    <div className="font-base-menu" style={{ left, top }}>
      <div className="menu-line">
        <div>
          <span className="label">字号</span>
          <InputNumber
            size="mini"
            defaultValue={props.config.fontSize || 14}
            mode="button"
            min={10}
            onChange={v => onChange("fontSize", v)}
          />
        </div>
        <div style={{ marginLeft: 8 }}>
          <span className="label">行高</span>
          <InputNumber
            size="mini"
            mode="button"
            defaultValue={props.config.fontSize || 1.8}
            step={0.1}
            precision={1}
            min={0.5}
            onChange={v => onChange("lineHeight", v)}
          />
        </div>
      </div>
      <div className="menu-line">
        <span className="label">颜色</span>
        {generatePicker(FONT_COLOR_LIST, "color")}
      </div>
      <div className="menu-line">
        <span className="label">背景</span>
        {generatePicker(FONT_COLOR_LIST, "background")}
      </div>
    </div>
  );
};
