import { Grid } from "@mui/material";
import SystemTable from "./SystemTable";
import { useTranslation } from "react-i18next";
import UserTable from "./UserTable";
import TokenTable from "./TokenTable";

export default function InformationTab() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-2 w-full">
      <Grid container spacing={4} sx={{ mt: 0, mb: 4 }}>
        <Grid item xs={12} sm={6} md={4} className="!flex !flex-col gap-4">
          <h1>{t("system")}</h1>
          <SystemTable />
        </Grid>
        <Grid item xs={12} sm={6} md={4} className="!flex !flex-col gap-4">
          <h1>{t("user")}</h1>
          <UserTable />
        </Grid>
        <Grid item xs={12} sm={6} md={4} className="!flex !flex-col gap-4">
          <h1>{t("available-tokens.title")}</h1>
          <TokenTable />
        </Grid>
      </Grid>
    </section>
  );
}
