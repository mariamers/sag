import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import LebronStretch from "@/Components/photos/ufpb.png";
import {Font} from '@react-pdf/renderer';



const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
   

  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
    
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
   
  },
});

const PDFFile = () => {

  const pageColors = ['#f6d186', '#f67280', '#c06c84'];

  const pages = [
    {text: 'First page content goes here...', image: LebronStretch },
    {text: 'Second page content goes here...', image: 'https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTcwMzExMzEwNTc0MTAxODM5/lebron-dunk.jpg' },
    {text: 'Third page content goes here...', image: 'https://s.yimg.com/ny/api/res/1.2/Aj5UoHHKnNOpdwE6Zz9GIQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2023-01/b02a71d0-a774-11ed-bf7f-08714e8ad300' },
  ]

  return (
    <Document>
      {pages.map((page, index) => {
        return (
          <Page key={index} style={{...styles.body, backgroundColor: pageColors[index]}}>
          <Text style={styles.header} fixed></Text>
          <Image style={styles.image} src={page.image} />
          <Text style={styles.text}>
          {page.text}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus sed magna ut pretium. Praesent vestibulum est nibh, id fringilla felis laoreet quis. Curabitur ultricies lectus elit, accumsan consectetur nisi auctor sit amet. Nullam vitae maximus lacus, non mollis ipsum. Quisque eget pretium sapien, nec lacinia elit. Nulla euismod urna quis tempus venenatis. Vivamus eu quam tristique, mattis dolor eu, porta orci. Sed imperdiet, arcu id sodales laoreet, tortor leo rutrum felis, ac porttitor erat urna sed turpis. Cras lacinia velit eget diam luctus, vulputate pellentesque leo facilisis. Praesent maximus tellus a ligula iaculis lobortis. Donec dapibus dolor ullamcorper turpis cursus, in scelerisque risus pellentesque. Fusce eget enim quis leo cursus euismod scelerisque quis odio. Aliquam sodales felis dictum, molestie ipsum quis, interdum urna. Proin a mauris condimentum enim pulvinar ullamcorper. Proin vitae tempus est.

Vestibulum sodales tortor eu fermentum sodales. Vivamus ornare imperdiet lacus, eget vestibulum diam pretium vel. Nulla ut tempor augue. Cras scelerisque orci quis dignissim consectetur. Sed in sollicitu
          </Text>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />
        </Page>
        )
      })}

    </Document>
  );
};

export default PDFFile;