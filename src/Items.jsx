import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import styles from "./item.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "inherit",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#fff",
  fontSize: "",
  borderStyle: "none",
  boxShadow: "none",
}));

function calculateSizes(order) {
  const sizes = {
    s: "",
    m: "",
    l: "",
    xl: "",
    _xl: "",
  };
  if (!order) return sizes;

  sizes.s = sizes._xl = Math.round(+order * 0.1);
  sizes.m = sizes.xl = Math.round(+order * 0.24);
  sizes.l = Math.round(+order * 0.32);

  const remender = sizes.s + sizes.m + sizes.l + sizes._xl + sizes.xl - order;
  console.log(remender);

  if (remender === 1) {
    sizes._xl = sizes.s = sizes._xl - 1;
    sizes.l++;
  }

  if (remender === -1) sizes.l++;

  if (remender === 2) sizes._xl = sizes.s = sizes._xl - 1;

  if (remender === -2) {
    sizes.m++;
    sizes.xl++;
  }
  return sizes;
}

function Items({ orders }) {
  const sizes = calculateSizes(orders);

  const labels = Object.keys(sizes);

  function renderItem() {
    return labels.map((label) => (
      <Item key={label}>
        <div key={label} className={`flex column ${styles.item_container}`}>
          <div className={styles.item_value + " flex"}>{sizes[label]}</div>
          <p className="label">
            {label.startsWith("_")
              ? "2 " + label.slice(1).toUpperCase()
              : label.toUpperCase()}
          </p>
        </div>
      </Item>
    ));
  }

  return (
    <div className={`flex column ${styles.items_container}`}>
      <Stack direction="row" spacing={2}>
        {renderItem()}
      </Stack>
    </div>
  );
}

export default Items;
