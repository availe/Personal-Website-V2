"use client";

import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import useSWR from 'swr';
import debounce from 'lodash/debounce';

import defaultResume from "../../../data/json/sampleResume.json";

const fetchPDF = async (jsonData: any): Promise<string> => {
  const response = await fetch("https://pytex-resume-builder-api.vercel.app/api/index", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(jsonData),
  });

  if (!response.ok) throw new Error("Failed to fetch PDF");

  const blob: Blob = await response.blob();
  return URL.createObjectURL(blob);
};

const ResumeBuilder: React.FC = () => {
  const [jsonInput, setJsonInput] = useState<string>(JSON.stringify(defaultResume, null, 2));
  const [triggerFetch, setTriggerFetch] = useState<boolean>(false);

  const validateAndSetJsonInput = (value: string) => {
    try {
      JSON.parse(value);
      setJsonInput(value);
      setTriggerFetch(true);
    } catch (error) {
      console.error("Invalid JSON:", error);
      setTriggerFetch(false);
    }
  };

  const handleEditorChange = debounce(validateAndSetJsonInput, 1000);

  const { data: pdfUrl } = useSWR(triggerFetch ? ['pdf', JSON.parse(jsonInput)] : null, 
    (_: string, jsonData: any) => fetchPDF(jsonData), { revalidateOnFocus: false });

  return (
    <div className="flex h-screen w-screen">
      <CodeMirror
        value={jsonInput}
        height="100%"
        extensions={[json()]}
        onChange={(value: string) => handleEditorChange(value)}
      />
      <iframe src={pdfUrl || "/Sample_Resume.pdf"} className="flex-1 h-full" />
    </div>
  );
};

export default ResumeBuilder;
