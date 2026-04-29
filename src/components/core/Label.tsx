import { ParentProps } from "solid-js"
import styles from "./Label.module.scss"
import classNames from "classnames/bind"

const cx = classNames.bind(styles)

interface LabelProps extends ParentProps {
  type?: "solid" | "outline",
  color?: "black"
}
export default function Label(props: LabelProps) {
  return <span class={cx("wrapper", props.type ?? "solid", props.color ?? "black")}>{props.children}</span>
}