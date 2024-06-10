import React from 'react';
import { Page, Text, Document, PDFViewer } from '@react-pdf/renderer';

import { TPersonalInfo } from '../components/Fragments/Preview/Index.js';

interface ToPDFProps {
  personalInfo: TPersonalInfo | null;
}

const ToPDF: React.FC<ToPDFProps> = ({ personalInfo }) => {
  return (
    <Document>
      <Page>
        <Text>{personalInfo?.fullName ?? 'hai'}</Text>
        <Text>{personalInfo?.email ?? 'hai'}</Text>
        <Text>{personalInfo?.phoneNumber ?? 'hai'}</Text>
        <Text>{personalInfo?.address ?? 'hai'}</Text>
      </Page>
    </Document>
  );
};

export default ToPDF;
