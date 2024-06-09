import React from 'react';
import { Page, Text, Image, Document, StyleSheet } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   body: {
//     paddingTop: 35,
//     paddingBottom: 65,
//     paddingHorizontal: 35,
//   },
//   title: {
//     fontSize: 24,
//     textAlign: 'center',
//   },
//   text: {
//     margin: 12,
//     fontSize: 14,
//     textAlign: 'justify',
//   },
//   image: {
//     marginVertical: 15,
//     marginHorizontal: 100,
//   },
//   header: {
//     fontSize: 12,
//     marginBottom: 20,
//     textAlign: 'center',
//     color: 'grey',
//   },
//   pageNumber: {
//     position: 'absolute',
//     fontSize: 12,
//     bottom: 30,
//     left: 0,
//     right: 0,
//     textAlign: 'center',
//     color: 'grey',
//   },
// });

const toPDF = () => {
  const pageColors = ['#f6d186', '#f67280', '#c06c84'];

  const pages = [
    { text: 'First page content goes here...' },
    {
      text: 'Second page content goes here...',
    },
    {
      text: 'Third page content goes here...',
    },
  ];

  return (
    <Document>
      {pages.map((page, index) => {
        return (
          <Page
            key={index}
            // style={{ ...styles.body, backgroundColor: pageColors[index] }}
          >
            <h1>hai</h1>
            {/* <Text style={styles.header} fixed></Text>
            <Text style={styles.text}>{page.text}</Text>
            <Text
              style={styles.pageNumber}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
            /> */}
          </Page>
        );
      })}
    </Document>
  );
};

export default toPDF;
