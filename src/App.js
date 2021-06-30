import './App.css';
import React from 'react';
import * as docx from "docx";
import { excel } from './Office/Excel';
import { word } from './Office/Word';
import { office } from './Office/Office';
import { publisher } from './Office/Publisher';
import { powerpoint } from './Office/Powerpoint';
import { outlook } from './Office/Outlook';
import { saveAs } from 'file-saver';
import { A5Footer } from './A5Footer';
import { A5Header } from './A5Header';
import { AlignmentType, Header, TextRun } from "docx";
import {ImageRun, PageOrientation, convertMillimetersToTwip, Paragraph } from "docx";

class App extends React.Component {
  generate() {

    // Documents contain sections, you can have multiple sections per document, go here to learn more about sections
    // This simple example will only contain one section
    const doc = new docx.Document({
        sections: [
            {
              properties: {
                page: {
                  margin: {
                    top: 0,
                    right: 300,
                    bottom: 0,
                    left: 300,
                },
                    size: {
                        orientation: PageOrientation.PORTRAIT,
                        height: convertMillimetersToTwip(210),
                        width: convertMillimetersToTwip(148),
                    },
                },
              },
              headers: A5Header,
              footers: A5Footer,
                children: [

                  new Paragraph({
                    children: [
                        new ImageRun({
                            data: excel,
                            transformation: {
                                width: 45,
                                height: 45,
                            },
                        }),
                    ],
                }),
                new Paragraph({
                  children: [
                      new ImageRun({
                          data: word,
                          transformation: {
                              width: 45,
                              height: 45,
                          },
                      }),
                  ],
              }),
              new Paragraph({
                children: [
                    new ImageRun({
                        data: outlook,
                        transformation: {
                            width: 45,
                            height: 45,
                        },
                    }),
                ],
            }),
            new Paragraph({
              children: [
                  new ImageRun({
                      data: publisher,
                      transformation: {
                          width: 45,
                          height: 45,
                      },
                  }),
              ],
          }),
          new Paragraph({
            children: [
                new ImageRun({
                    data: office,
                    transformation: {
                        width: 200,
                        height: 50,
                    },
                }),
            ],
        }),
          new Paragraph({
            children: [
                new ImageRun({
                    data: powerpoint,
                    transformation: {
                        width: 45,
                        height: 45,
                    },
                }),
            ],
        }),
                    
                          // new Paragraph({
                          //   children: [
                          //     new docx.ImageRun({
                          //       data: excel,
                          //       transformation: {
                          //         width: 30,
                          //         height: 30,
                          //       },
                          //       floating: {
                          //         horizontalPosition: {
                          //             offset: 202880,
                          //         },
                          //         verticalPosition: {
                          //             offset: 202880,
                          //         },
                          //     },
                          //     }),
                          //   ],
                          // }),
                        
                    
                ],
            },
        ],
    });

    docx.Packer.toBlob(doc).then((blob) => {
        console.log(blob);
        saveAs(blob, "example.docx");
        console.log("Document created successfully");
    });
}
 render() {

   return (
     <div className="min-h-screen bg-white">
      <button onClick={this.generate}>Generate</button>
        <div className="py-10">
        <header>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Feuilles A5 pour comptes Office / Acronis
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
            <fieldset className="mt-5">
              <div className="grid grid-cols-3 gap-2">
                <label className="relative bg-blue-400 text-white block rounded-lg border border-gray-300 shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <input type="radio" name="server_size" value="Hobby" className="sr-only" aria-labelledby="server-size-0-label" aria-describedby="server-size-0-description-0 server-size-0-description-1" />
                  <div className="flex items-center">
                    <div className="text-sm">
                      <p id="server-size-0-label" className="font-medium text-white">
                        Office
                      </p>
                    </div>
                  </div>
                  <div className="border-transparent absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"></div>
                </label>

                <label className="relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <input type="radio" name="server_size" value="Business" className="sr-only" aria-labelledby="server-size-2-label" aria-describedby="server-size-2-description-0 server-size-2-description-1" />
                  <div className="flex items-center">
                    <div className="text-sm">
                      <p id="server-size-2-label" className="font-medium text-gray-900">
                        Office 365
                      </p>
                    </div>
                  </div>
                  <div className="border-transparent absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"></div>
                </label>

                <label className="relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <input type="radio" name="server_size" value="Enterprise" className="sr-only" aria-labelledby="server-size-3-label" aria-describedby="server-size-3-description-0 server-size-3-description-1" />
                  <div className="flex items-center">
                    <div className="text-sm">
                      <p id="server-size-3-label" className="font-medium text-gray-900">
                        Acronis True Image
                      </p>
                    </div>
                  </div>
                  <div className="border-transparent absolute -inset-px rounded-lg border-2 pointer-events-none" aria-hidden="true"></div>
                </label>
              </div>
            </fieldset>

            <div className="px-4 py-8 sm:px-0">
              <div>
                <label htmlFor="email" className="sr-only">Compte Microsoft</label>
                <input type="text" name="email" id="email" className="p-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Compte Microsoft" />
              </div>
              <div className="mt-2">
                <label htmlFor="password" className="sr-only">Mot de passe</label>
                <input type="text" name="passsword" id="passsword" className="p-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Mot de passe" />
              </div>
              <div className="mt-2">
                <label htmlFor="activation_code" className="sr-only">Code d'activation</label>
                <input type="text" name="activation_code" id="activation_code" className="p-4 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Code d'activation" />
              </div>
              <div className="mt-2">
                <label htmlFor="print_pdf" className="sr-only">Print pdf</label>
                <button id="print_pdf" className="p-4 shadow-sm bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                  Télécharger
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
  }
}

export default App;
