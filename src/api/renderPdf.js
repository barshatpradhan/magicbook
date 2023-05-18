import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
//import LebronStretch from "tale1.jpg";
import { Font } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "AntonFamily",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "AntonFamily",
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
    fontFamily: "AntonFamily",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
    fontFamily: "AntonFamily",
  },
});

const PDFFile = () => {
  const pageColors = ["#f6d186", "#f67280", "#c06c84"];

  return (
    <Document>
      <Page key={1} style={{ ...styles.body }}>
        <Text style={styles.header} fixed></Text>
        <Text style={styles.text}>asdasd</Text>
      </Page>
    </Document>
  );
};

export default PDFFile;
