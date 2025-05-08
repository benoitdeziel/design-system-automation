import { cva } from "@crispy-bacon/styled-system/css";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const button = cva({
  base: {
    display: "inline-flex",
    paddingY: "2",
    paddingX: "4",
    backgroundColor: "primary.bg",
    borderRadius: "md",
    color: "primary.fg",
    fontWeight: "bold",
    cursor: "pointer",
  },
});

export function Button(props: ButtonProps) {
  const { children, ...rest } = props;

  const styles = button();

  return (
    <button {...rest} className={styles}>
      {children}
    </button>
  );
}

export default Button;
