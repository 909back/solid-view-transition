import { ParentProps } from "solid-js"
import styles from "./Label.module.scss"
import classNames from "classnames/bind"

const cx = classNames.bind(styles)

interface LabelProps extends ParentProps {
  type?: "solid" | "outline",
  color?: "black"
}
export default function Label({
  type = 'solid',
  color = 'black',
  children
}: LabelProps) {
  return <span class={cx('wrapper', type, color)}>{children}</span>
}