import { AlignmentType, Footer, TextRun, Paragraph } from "docx";

export const A5Footer = {
        default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                  text: 'Votre partenaire informatique de la région',
                  font: 'Bitter',
                  bold: true,
                  size: 24,
                  color: '111827'
                })]
              }),
              new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [new TextRun({
                text: 'Astria Informatique Sàrl',
                font: 'Bitter',
                bold: true,
                size: 24,
                color: "dc2626",
              })]
            })],
        }),
    };