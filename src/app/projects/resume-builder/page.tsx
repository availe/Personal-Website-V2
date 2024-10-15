"use client";

import { useState, useEffect, useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import debounce from 'lodash/debounce';

import defaultResume from "../../../data/json/sampleResume.json";

const ResumeBuilder: React.FC = () => {
  const [jsonInput, setJsonInput] = useState<string>(JSON.stringify(defaultResume, null, 2));
  const [pdfUrl, setPdfUrl] = useState<string>('/Sample_Resume.pdf');

  const fetchPDF = useCallback(async (jsonPayload: string) => {
    const response = await fetch('https://pytex-resume-builder-api.vercel.app/api/index', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonPayload
    });
    const blob = await response.blob();
    setPdfUrl(URL.createObjectURL(blob));
  }, []);

  // Send default JSON immediately to wake up server
  useEffect(() => {
    fetchPDF(JSON.stringify(defaultResume, null, 2));
  }, [fetchPDF]);

  const handleEditorChange = debounce((value: string) => {
    fetchPDF(value);
  }, 1000);

  return (
    <>
    <p>This early-stage application is currently unstable on Safari. Please open this with Chrome for an optimal experience. Future improvements are planned.</p>
    <div className="flex h-screen w-screen">
      <div className="w-1/2">
        <CodeMirror
          value={jsonInput}
          extensions={[json()]}
          onChange={(value: string) => {
            setJsonInput(value);
            handleEditorChange(value);
          }}
        />
      </div>
      <div className="w-1/2">
        <iframe src={`${pdfUrl}#toolbar=0&navpanes=0`} className="flex-1 h-full w-full" title="Resume PDF Preview"></iframe>
      </div>
    </div>
    </>
  );
};

export default ResumeBuilder;
