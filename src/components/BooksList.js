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
      anotation:
        "Abe was a real Service Dog who dedicated his life assisting BJ, a good family friend. Service Dogs are smart, well trained, well behaved, dedicated, and committed to ensuring their master is safe. This book is intended to bring an awareness of their importance to early readers.",
    },
    {
      book: "tale2",
      picture: "tale2.jpg",
      name: "The Lunker",
      anotation:
        "Let's go fishing and a rhyming in this free illustrated children's book. Monday through Saturday was dad's to take but come Sunday, the lad caught a lunker. And boy! Wasn't he absolutely delighted?",
    },
    {
      book: "tale3",
      picture: "tale3.jpg",
      name: "Hammy The Hamster",
      anotation: "sizarmace",
    },
    {
      book: "tale4",
      picture: "tale4.jpg",
      name: "The Tooth Fairies",
      anotation: "mainc gamogichire :D",
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
