import React from 'react';
import { Page, Text, Image, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({});

const ToPDF = () => {
  return (
    <Document>
      <Page>
        <Text>Haii</Text>
      </Page>
    </Document>
  );
};

export default ToPDF;
