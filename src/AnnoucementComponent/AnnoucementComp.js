import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Grid,
  Container,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const announcements = [
  {
    id: 1,
    date: "Jan 23, 2024",
    content:
      "We are excited to announce that, due to our remarkable growth over the last 50 years, we are expanding! In fact, we are opening a new store in the UK. We invite you to celebrate with us during the big opening day on 20-JAN-2024. There will be many exciting surprises, including irresistible discounts.",
  },
  {
    id: 2,
    date: "Jan 23, 2024",
    content:
      "We are excited to announce that, due to our remarkable growth over the last 50 years, we are expanding! In fact, we are opening a new store in the UK. We invite you to celebrate with us during the big opening day on 20-JAN-2024. There will be many exciting surprises, including irresistible discounts.",
  },
  {
    id: 3,
    date: "Jan 23, 2024",
    content:
      "We are excited to announce that, due to our remarkable growth over the last 50 years, we are expanding! In fact, we are opening a new store in the UK. We invite you to celebrate with us during the big opening day on 20-JAN-2024. There will be many exciting surprises, including irresistible discounts.",
  },
];

const AnnouncementTab = () => {
  const [announcementsList, setAnnouncementsList] = useState(announcements);

  const handleDelete = (id) => {
    setAnnouncementsList(announcementsList.filter((announcement) => announcement.id !== id));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Announcements
          </Typography>
          {announcementsList.map(({ id, date, content }) => (
            <Card key={id} sx={{ mb: 2, p: 2, borderRadius: 2, boxShadow: 1 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={9}>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    {date}
                  </Typography>
                  <Typography variant="body1" color="primary" fontStyle="italic">
                    {content}
                  </Typography>
                  <Button
                    variant="text"
                    color="primary"
                    size="small"
                    sx={{ mt: 1, textTransform: "none" }}
                  >
                    Read more...
                  </Button>
                </Grid>
                <Grid item xs={3} sx={{ textAlign: "right" }}>
                  <IconButton color="info">
                    <Edit />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(id)}>
                    <Delete />
                  </IconButton>
                </Grid>
              </Grid>
            </Card>
          ))}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3, py: 1.5, borderRadius: 2 }}
          >
            Add New Announcement
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AnnouncementTab;