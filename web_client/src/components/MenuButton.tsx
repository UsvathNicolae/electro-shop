import { Button, makeStyles, PropTypes } from "@material-ui/core";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  wrapper: {
    margin: 15,
    width: 300,
    height: 45,
    fontFamily: "Playfair",
  },
});

const CustomMenuButton = (p: {
  variant?: "text" | "outlined" | "contained";
  color?: PropTypes.Color;
  children: ReactNode;
  onClick?: () => void;
  route: string;
}) => {
  const styles = useStyles();
  const navigate = useNavigate();

  const onButtonPressed = () => {
    if (p && p.onClick) p.onClick();
    if (typeof p.route === "string" && p.route === "/") {
      navigate(p.route, { replace: true });
    } else {
      navigate(p.route);
    }
  };

  return (
    <Button
      variant={p.variant}
      autoCapitalize="fals"
      color={p.color}
      onClick={onButtonPressed}
      className={styles.wrapper}
    >
      {p.children}
    </Button>
  );
};

export default CustomMenuButton;
