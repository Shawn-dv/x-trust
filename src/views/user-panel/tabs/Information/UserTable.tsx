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

const UserTable = () => {
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
                {t("user-table.investment-amount")}:
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
                {t("user-table.withdrawal-amount")}:
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
                {t("user-table.start-day")}:
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
                {t("user-table.present-value")}:
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
                {t("user-table.capital-ratio")}:
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="body1">0</Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <Typography
                variant="body1"
                className="text-start"
                sx={{ fontWeight: "bold" }}
              >
                {t("user-table.introduced-users")}:
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="body1">0</Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <Typography
                variant="body1"
                className="text-start"
                sx={{ fontWeight: "bold" }}
              >
                {t("user-table.introduced-investments")}:
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="body1">0</Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <Typography
                variant="body1"
                className="text-start"
                sx={{ fontWeight: "bold" }}
              >
                {t("user-table.introduced-withdraws")}:
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

export default UserTable;
