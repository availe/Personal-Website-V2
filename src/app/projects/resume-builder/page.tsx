"use client";

import { useState } from "react";
import { json } from "@codemirror/lang-json";
import CodeMirror from "@uiw/react-codemirror";
import useSWR from 'swr';
import debounce from 'lodash/debounce';
import defaultResume from "../../../data/json/sampleResume.json";

const fetchPDF = async (jsonData: any): Promise<string> => {
  const response = await fetch("https://pytex-resume-builder-3cuw0744i-availes-projects.vercel.app/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(jsonData),
  });

  if (!response.ok) throw new Error("Failed to fetch PDF");

  const blob = await response.blob();
  return URL.createObjectURL(blob);
};

const ResumeBuilder = () => {
  const [jsonInput, setJsonInput] = useState(JSON.stringify(defaultResume, null, 2));
  const [triggerFetch, setTriggerFetch] = useState(false);

  const { data: pdfUrl } = useSWR(triggerFetch ? ['pdf', JSON.parse(jsonInput)] : null, (_: string, jsonData: any) => fetchPDF(jsonData), { revalidateOnFocus: false });

  const handleEditorChange = debounce((value: string) => {
    setJsonInput(value);
    setTriggerFetch(true);
  }, 1000);

  return (
    <div className="flex h-screen w-screen">
      <CodeMirror
        value={jsonInput}
        height="100%"
        extensions={[json()]}
        onChange={handleEditorChange}
      />
      <iframe src={pdfUrl || "/Sample_Resume.pdf"} className="flex-1 h-full" />
    </div>
  );
};

export default ResumeBuilder;
