import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

interface PullRequest {
  id: number;
  title: string;
  html_url: string;
  created_at: string;
}

interface GitChangelogProps {
  owner: string;
  repo: string;
  color: string;
}

const GitChangelog = ({ owner, repo, color }: GitChangelogProps) => {
  const [prs, setPrs] = useState<PullRequest[]>([]);

  useEffect(() => {
    const fetchPRs = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/pulls?state=closed&sort=updated&per_page=20`
        );
        const data = await response.json();
        const featPrs = data
          .filter((pr: any) => pr.title.toLowerCase().startsWith("feat"))
          .slice(0, 4);
        setPrs(featPrs);
      } catch (error) {
        console.error("Error fetching changelog:", error);
      }
    };
    fetchPRs();
  }, [owner, repo]);

  if (prs.length === 0) return null;

  return (
    <Box sx={{ mt: 4, display: "flex", flexDirection: "column" }}>
      {prs.map((pr, index) => (
        <Box
          key={pr.id}
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            py: 1,
          }}
        >
          {index < prs.length - 1 && (
            <Box
              sx={{
                position: "absolute",
                left: "4px",
                top: "24px",
                width: "2px",
                height: "24px",
                bgcolor: color,
                zIndex: 0,
              }}
            />
          )}
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              border: `2px solid ${color}`,
              bgcolor: "background.default",
              mr: 2,
              zIndex: 1,
              flexShrink: 0,
            }}
          />
          <Typography
            component="a"
            href={pr.html_url}
            target="_blank"
            rel="noopener noreferrer"
            variant="body1Montreal"
            sx={{
              color: "text.primary",
              fontWeight: 500,
              fontSize: "0.85rem",
              textDecoration: "none",
              "&:hover": { color: color },
            }}
          >
            {pr.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default GitChangelog;
