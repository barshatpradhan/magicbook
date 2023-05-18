import Card from "../components/Card.js";
import TestCard from "../components/TestCard.js";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function BookList() {
  const books = [
    {
      book: "tale1",
      picture: "tale1.jpg",
      name: "hide and seek",
      anotation: "bla bla text",
    },
    {
      book: "tale2",
      picture: "tale2.jpg",
      name: "hide and seek",
      anotation: "bla bla text",
    },
    {
      book: "tale3",
      picture: "tale3.jpg",
      name: "hide and seek",
      anotation: "bla bla text",
    },
    {
      book: "tale4",
      picture: "tale4.jpg",
      name: "hide and seek",
      anotation: "bla bla text",
    },
  ];

  return (
    <Box
      id="books"
      sx={{
        marginBottom: "40px",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <Typography variant="h2" gutterBottom>
          BOOKS
        </Typography>
      </Box>
      <Box sx={{ marginLeft: "30px", marginRight: "30px" }}>
        <Grid
          container
          spacing={3}
          direction="row"
          display="flex"
          justifyContent="spaceBetween"
        >
          {books.map((book) => (
            <Grid item xs={12} md={6} lg={3}>
              <Card
                book={book.book}
                imageUrl={book.picture}
                name={book.name}
                anotation={book.anotation}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default BookList;
