import React from 'react';
import { Page, Text, Document, View } from '@react-pdf/renderer';
import { Font } from '@react-pdf/renderer';

import { TPersonalInfo } from '../components/Fragments/Preview/Index.js';

import { StyleSheet } from '@react-pdf/renderer';

import tinosBold from '../fonts/Tinos/Tinos-Bold.ttf';
import tinosRegular from '../fonts/Tinos/Tinos-Regular.ttf';
interface ToPDFProps {
  personalInfo: TPersonalInfo | null;
}

Font.register({ family: 'Tinos-Bold', src: tinosBold });
Font.register({ family: 'Tinos', src: tinosRegular });

const styles = StyleSheet.create({
  headerNameStyle: {
    fontFamily: 'Tinos-Bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 18,
    marginBottom: 3,
  },
  headerAdress: {
    fontFamily: 'Tinos',
    fontSize: 12,
    marginBottom: 2,
    textAlign: 'center',
  },
  headerInformation: {
    fontFamily: 'Tinos',
    fontSize: 11,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
    marginHorizontal: 'auto',
  },
  headerSummary: {
    fontFamily: 'Tinos-Bold',
    fontSize: 13,
    borderBottomColor: 'black',
    borderBottomWidth: 1.5,
    borderBottomStyle: 'solid',
    width: '90%',
    textAlign: 'center',
    marginHorizontal: 'auto',
    marginBottom: 2,
    marginTop: 18,
  },
  Summary: {
    fontFamily: 'Tinos',
    fontSize: 11,
    textAlign: 'center',
    marginHorizontal: 'auto',
    paddingHorizontal: 45,
    lineHeight: 1.3,
    marginTop: 3,
  },
});

const ToPDF: React.FC<ToPDFProps> = ({ personalInfo }) => {
  return (
    <Document>
      <Page size={'LETTER'}>
        <Text style={styles.headerNameStyle}>
          {personalInfo?.fullName ?? ''}
        </Text>
        <Text style={styles.headerAdress}>{personalInfo?.address ?? ''}</Text>
        <View style={styles.headerInformation}>
          <Text>Telp: {personalInfo?.phoneNumber ?? ''} |</Text>
          <Text>Email: {personalInfo?.email ?? ''} |</Text>
          <Text>LinkedIn : {personalInfo?.linkedIn ?? ''}</Text>
        </View>

        <View>
          <Text style={styles.headerSummary}>SUMMARY</Text>
          <Text style={styles.Summary}>{personalInfo?.summary ?? ''}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default ToPDF;
