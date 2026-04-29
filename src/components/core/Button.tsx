import styles from "./Button.module.scss"
import classNames from "classnames/bind"
import { splitProps } from "solid-js"
import type { HTMLButtonProps } from "~/interface/element"

const cx = classNames.bind(styles)

interface ButtonProps extends HTMLButtonProps {
  variant?: "solid" | "outline" | "link"
  size?: "L" | "M" | "S"
  contentType?: "text" | "icon"
  fluid?: boolean
}

export default function Button(props: ButtonProps) {
  const [local, rest] = splitProps(props, ["variant", "size", "contentType", "class", "children", "fluid"])

  return (
    <button
      {...rest}
      class={cx(
        "button",
        local.variant??"solid",
        local.size??"M",
        local.class,
        local.contentType,
        { fluid: local.fluid }
      )}
    >
      {local.children}
    </button>
  )
}
