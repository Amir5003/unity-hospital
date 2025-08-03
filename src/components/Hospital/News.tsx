import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  MobileStepper,
  Button,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

interface EventItem {
  image?: string;
  title?: string;
  description?: string;
}

const News = React.forwardRef<HTMLDivElement>((props, ref) => {
  const [news, setNews] = useState<EventItem[]>([]);
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/1IMC5gNfSslGDeOJmrZw-MgWsjAWJjR9EO3ZQ8Ho98Uc/Events"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data------>",data); 
        setNews(Array.isArray(data) ? data : []);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % news.length);
    }, 10000);

    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [news]);

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % news.length);
  };

  const handleBack = () => {
    setActiveStep((prev) => (prev - 1 + news.length) % news.length);
  };

  if (news.length === 0) return null;

  const currentNews = news[activeStep];

  return (
    <Container ref={ref} sx={{ my: 6 }}>
      <Typography
        variant="h4"
        fontWeight={700}
        gutterBottom
        sx={{ fontSize: { xs: "1.5rem", sm: "2.125rem" } }}
      >
        News & Events
      </Typography>

      <Box
        sx={{
          width: "100%",
          maxWidth: 600,
          // mx: "auto",
          position: "relative",
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: 3,
        }}
      >
        <Card>
          {currentNews.image && (
            <CardMedia
              component="img"
              image={currentNews.image}
              alt={currentNews.title || "Event Image"}
              sx={{ height: 250, objectFit: "cover" }}
            />
          )}
          <CardContent>
            <Typography variant="h6" fontWeight={700}>
              {currentNews.title || "Untitled Event"}
            </Typography>
            <Typography variant="body2">
              {currentNews.description || "No description available"}
            </Typography>
          </CardContent>
        </Card>

        <MobileStepper
          variant="dots"
          steps={news.length}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={news.length <= 1}>
              Next
              {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={news.length <= 1}>
              {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Prev
            </Button>
          }
        />
      </Box>
    </Container>
  );
});

News.displayName = "News";
export default News;
