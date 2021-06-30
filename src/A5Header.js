import { AlignmentType, Header, TextRun, Paragraph, ImageRun } from "docx";
import { logo } from './Logo';

export const A5Header = {
        default: new Header({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                indent: {
                  start: 200
                },
                children: [
                  new TextRun({
                  text: 'Rue Francillon 17',
                  size: 20,
                })]
              }),
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({
                  text: '2610 Saint-Imier',
                  size: 20,
                })]
              }),
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({
                  text: 'Tél : 032 913 13 38',
                  size: 20,
                })]
              }),
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({
                  text: 'info@astria.ch | www.astria.ch',
                  size: 20,
                })]
              }),
              new Paragraph({
                children: [
                  new ImageRun({
                    data: logo,
                    transformation: {
                      width: 150,
                      height: 90,
                    },
                    floating: {
                      horizontalPosition: {
                          offset: 202880,
                      },
                      verticalPosition: {
                          offset: 202880,
                      },
                  },
                  }),
                ],
              }),
            ],
        }),
      };