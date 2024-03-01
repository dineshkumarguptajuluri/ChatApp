// import React from "react";
// import Carousel from "./Carousel";
import "../Styles/Carousel.css";


function Slides(){
    const slidesdata = [
		{
		  url: "https://picsum.photos/800/400?random=1",
		  title: "Slide 1 Title",
		  subtitle: "Slide 1 Subtitle",
		},
		{
		  url: "https://picsum.photos/800/400?random=2",
		  title: "Slide 2 Title",
		  subtitle: "Slide 2 Subtitle",
		},
		{
			url: "https://picsum.photos/800/400?random=3",
			title: "Slide 3 Title",
			subtitle: "Slide 3 Subtitle",
		  },
		  {
			url: "https://picsum.photos/800/400?random=4",
			title: "Slide 4 Title",
			subtitle: "Slide 4 Subtitle",
		  },
		  {
			url: "https://picsum.photos/800/400?random=5",
			title: "Slide 5 Title",
			subtitle: "Slide 5 Subtitle",
		  },
		  {
			url: "https://picsum.photos/800/400?random=6",
			title: "Slide 6 Title",
			subtitle: "Slide 6 Subtitle",
		  },

	  ];
	//   return <Carousel slides={slidesdata} />;

	  console.log(slidesdata.length);
	  return (
		// <div>
		//   <h1>Your Image Slider Page</h1>
		//   <div className="page-container">

		// 	<Carousel slides={slidesdata} />
		//   </div>
		// </div>
		slidesdata
	  );

	}




export default Slides;

