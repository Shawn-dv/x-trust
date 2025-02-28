import { Card, CardContent, Typography, Grid, Container } from "@mui/material";
import { useAppKitAccount } from "@reown/appkit/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaChartLine, FaHandshake, FaCoins } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ConnectButton from "../../components/custom/appkit/ConnectButton";

export default function StartInvestPageView() {
  const { t } = useTranslation();
  const navigateTo = useNavigate();
  const { isConnected } = useAppKitAccount();

  useEffect(() => {
    if (isConnected) {
      navigateTo("/user-panel");
    }
  }, [isConnected]);

  const cardData = [
    {
      icon: <FaChartLine size={50} />,
      title: t("start-invest-card1.title"),
      description: t("start-invest-card1.description"),
    },
    {
      icon: <FaHandshake size={50} />,
      title: t("start-invest-card2.title"),
      description: t("start-invest-card2.description"),
    },
    {
      icon: <FaCoins size={50} />,
      title: t("start-invest-card3.title"),
      description: t("start-invest-card3.description"),
    },
  ];

  return (
    <Container>
      {/* Header Section */}
      <Typography
        variant="h4"
        className="!font-bold"
        align="center"
        gutterBottom
        sx={{ mt: 4 }}
      >
        {t("start-invest-header.title")}
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary">
        {t("start-invest-header.subtitle")}
      </Typography>

      {/* Card Section */}
      <Grid container spacing={4} sx={{ mt: 2, mb: 4 }}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ textAlign: "center", height: "100%" }}>
              <CardContent>
                <Typography color="primary" sx={{ mb: 2 }}>
                  {card.icon}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Second Body Section */}
      <Typography variant="h5" align="center" gutterBottom>
        {t("start-invest-whyChoose.title")}
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary">
        {t("start-invest-whyChoose.description")}
      </Typography>

      {/* Footer Section */}
      <Typography variant="h6" align="center" gutterBottom sx={{ mt: 4 }}>
        {t("start-invest-footer.title")}
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary">
        {t("start-invest-footer.subtitle")}
      </Typography>
      <div className="text-center mt-4">
        <ConnectButton />
      </div>
    </Container>
  );
}
