import card1 from "../Images/ManualForm.jpg";
import card2 from "../Images/urlsearch.jpg";
import card3 from "../Images/ImageForm.jpg";
export const cards = [
    {
      img: card1,
      title:  "Manual Check",
      sub: "Enter product claims and ingredients manually to verify authenticity.",
      bgColor: "pink",
      id:1,
      width:"100%",
      link:"/manualcheck"
    },
    {
      img: card2,
      title: "URL Check",
      sub: "Paste the product link to analyze claims and ingredient details directly.",
      bgColor: "#a2c2fc ",
      id:2,
      width:"100%",
       link:"/urlcheck"
    },
    {
      img: card3,
      title: "Image Check",
      sub: "Upload a photo of the product label to validate its claims and contents.",
      bgColor: "#a2fca8",
      id:3,
      width:"100%",
      link:"/imagecheck"
    },
   
  ];