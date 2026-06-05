import { useState, useEffect } from "react";
import Section from "../shared/Section";
import { Typography, Box, Stack, ButtonBase } from "@mui/material";
import TextAnimation from "../../animations/AnimatedText";

import {
  doc,
  onSnapshot,
  updateDoc,
  increment,
  setDoc,
} from "firebase/firestore";
import { db } from "../../utils/firebase";

interface AboutSectionProps {
  trigger: number;
}

const AboutSection = ({ trigger }: AboutSectionProps) => {
  const statColor = "#bfc0c0";
  const [clickCount, setClickCount] = useState<number | null>(null);

  useEffect(() => {
    const docRef = doc(db, "stats", "pageClicks");
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setClickCount(docSnap.data().count);
      } else {
        setDoc(docRef, { count: 0 });
        setClickCount(0);
      }
    });
    return () => unsubscribe();
  }, []);

  const handlePlusClick = async () => {
    setClickCount((prev) => (prev !== null ? prev + 1 : 1));
    const docRef = doc(db, "stats", "pageClicks");
    try {
      await updateDoc(docRef, {
        count: increment(1),
      });
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return (
    <Section id="about" noPaddingTop>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: { xs: 4, md: 6 },
          width: "100%",
        }}
      >
        <TextAnimation duration={0.6} trigger={trigger}>
          <Typography variant="h3">about</Typography>
        </TextAnimation>
        <Box sx={{ width: "100%" }}>
          <TextAnimation duration={0.1} trigger={trigger}>
            <Typography
              variant="body1Montreal"
              sx={{
                // color: "#bfc0c0",
                color: "text.secondary",
                fontWeight: 500,
                lineHeight: 1.8,
                maxWidth: "800px",
              }}
            >
              I am a product-centric Frontend Engineer based in{" "}
              <Box component="span" sx={{ color: "text.primary" }}>
                Manchester
              </Box>
              , with over 4 years of experience leveraging TypeScript to build
              responsive, scalable React applications. Having engineered
              enterprise-scale applications for 30,000+ users at{"  "}
              <Box component="span" sx={{ color: "text.primary" }}>
                PwC
              </Box>
              , I thrive in environments that value ownership, data-driven
              decisions, and maintaining high coding standards to meet the
              business' bottom line.
            </Typography>
          </TextAnimation>
        </Box>

        <Box sx={{ width: "100%", maxWidth: "800px" }}>
          <TextAnimation duration={1.5} trigger={trigger} delay={0.3}>
            <Stack
              direction="row"
              spacing={{ xs: 4, md: 8 }}
              sx={{
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="h3">4</Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "medium",
                    color: "#5ccfe6",
                    lineHeight: 1,
                    mt: -1,
                  }}
                >
                  +
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: statColor,
                    fontWeight: 500,
                    lineHeight: 1.2,
                    ml: 1,
                  }}
                >
                  Years of <br /> experience
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="h3">30k</Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "medium",
                    color: "#5ccfe6",
                    lineHeight: 1,
                    mt: -1,
                  }}
                >
                  +
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: statColor,
                    fontWeight: 500,
                    lineHeight: 1.2,
                    ml: 1,
                  }}
                >
                  Users <br /> reached
                </Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    minWidth: "80px",
                    textAlign: "right",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {clickCount !== null ? clickCount : "..."}
                </Typography>

                <ButtonBase
                  onClick={handlePlusClick}
                  disableRipple
                  sx={{ p: 0, m: 0, display: "inline-flex" }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "medium",
                      color: "#5ccfe6",
                      lineHeight: 1,
                      mt: -1,
                    }}
                  >
                    +
                  </Typography>
                </ButtonBase>

                <Typography
                  variant="body1"
                  sx={{
                    color: statColor,
                    fontWeight: 500,
                    lineHeight: 1.2,
                    ml: 1,
                  }}
                >
                  Page <br /> clicks
                </Typography>
              </Stack>
            </Stack>
          </TextAnimation>
        </Box>
      </Box>
    </Section>
  );
};

export default AboutSection;
