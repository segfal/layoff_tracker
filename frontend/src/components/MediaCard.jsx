// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

// export default function MediaCard({ article }) {

//   return (
//     <Card
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         maxWidth: 400,
//         // minHeight: 300, // Use minHeight to ensure all cards have the same starting height
//       }}
//     >
//       <CardMedia
//         component="img"
//         sx={{ height: 140 }} // Fixed height for the image
//         image={article.urlToImage}
//         alt={article.title}
//       />
//       <CardContent sx={{ flexGrow: 1, overflow: "hidden" }}>
//         <Typography
//           gutterBottom
//           variant="h5"
//           component="div"
//           sx={{
//             whiteSpace: "nowrap",
//             overflow: "hidden",
//             textOverflow: "ellipsis",
//             WebkitLineClamp: 2
//           }}
//         >
//           {article.title}
//         </Typography>
//         <Typography
//           variant="body2"
//           color="text.secondary"
//           sx={{
//             display: "-webkit-box",
//             overflow: "hidden",
//             WebkitBoxOrient: "vertical",
//             WebkitLineClamp: 3, // Limit to 3 lines of text
//           }}
//         >
//           {article.description}
//         </Typography>
//       </CardContent>
//       <CardActions sx={{ mt: "auto" }}>
//         <Button size="small" color="primary" href={article.url} target="_blank">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }
//
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { redirect } from "react-router-dom";

export default function MediaCard({ article }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 345,
        minHeight: "100%", // Card takes full height of grid item
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: 140 }} // Keep image height fixed
        image={article.urlToImage}
        alt={article.title}
      />
      <CardContent sx={{ flexGrow: 1, minHeight: "150px" }}>
        {" "}
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2, // Show 2 lines of title
            WebkitBoxOrient: "vertical",
          }}
        >
          {article.title}
        </Typography>
        <Typography
          gutterBottom
          variant="body"
          component="div"
          sx={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2, // Show 2 lines of title
            WebkitBoxOrient: "vertical",
          }}
        >
          {article.author} 
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3, // Show 3 lines of description
          }}
        >
          {article.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: "auto" }}>
        <Button size="small" color="primary" href={article.url} target="_blank">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
