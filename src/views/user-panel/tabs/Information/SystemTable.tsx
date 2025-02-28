import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const SystemTable = () => {
  const { t } = useTranslation();

  return (
    <TableContainer component={Paper} elevation={3} sx={{ maxWidth: 600 }}>
      <Table>
        <TableBody>
          {/* Row 1 */}
          <TableRow>
            <TableCell>
              <Typography
                variant="body1"
                className="text-start"
                sx={{ fontWeight: "bold" }}
              >
                {t("information-table.investors")}:
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="body1">0</Typography>
            </TableCell>
          </TableRow>

          {/* Row 2 */}
          <TableRow>
            <TableCell>
              <Typography
                variant="body1"
                className="text-start"
                sx={{ fontWeight: "bold" }}
              >
                {t("information-table.invested")}:
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="body1">0</Typography>
            </TableCell>
          </TableRow>

          {/* Row 3 */}
          <TableRow>
            <TableCell>
              <Typography
                variant="body1"
                className="text-start"
                sx={{ fontWeight: "bold" }}
              >
                {t("information-table.withdrawn")}:
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="body1">0</Typography>
            </TableCell>
          </TableRow>

          {/* Row 4 */}
          <TableRow>
            <TableCell>
              <Typography
                variant="body1"
                className="text-start"
                sx={{ fontWeight: "bold" }}
              >
                {t("information-table.value-capital")}:
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="body1">0</Typography>
            </TableCell>
          </TableRow>

          {/* Row 5 */}
          <TableRow>
            <TableCell>
              <Typography
                variant="body1"
                className="text-start"
                sx={{ fontWeight: "bold" }}
              >
                {t("information-table.ratio-capital")}:
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="body1">0</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SystemTable;
