import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const BnbInput = styled("input")(({ theme }) => ({
  fontSize: 22,
  fontWeight: 500,
  padding: "8px 70px 8px 16px",
  textAlign: "right",
  borderRadius: 18,
  border: `1px solid ${theme.palette.text.textLight}`,
  color: "#033333",
  background: "#fff",
  width: "100%",
  outline: "none",
  "& label.Mui-focused": {
    color: "#ffffff00"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#ffffff00"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ffffff00"
    },
    "&:hover fieldset": {
      borderColor: "#ffffff00"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ffffff00"
    }
  }
}));

export default function PriceInput({ value, max, onChange = () => {} }) {
  return (
    <Box position="relative">
      <BnbInput
        type="number"
        className="priceinput"
        min={0}
        max={max}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span></span>
      <Typography
        fontSize={20}
        position="absolute"
        top={11}
        right={18}
        color="#282cbb"
      >
        ETH
      </Typography>
    </Box>
  );
}
