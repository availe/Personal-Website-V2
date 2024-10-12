"use client";

import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import defaultResume from "../../../data/json/sampleResume.json"

const ResumeBuilder = () => {
    const [jsonInput, setJsonInput] = useState(JSON.stringify(defaultResume, null, 2));

    return (
      <div className="h-80 w-full border p-2">
        <CodeMirror
          value={jsonInput}
          height="100%"
          extensions={[json()]}
          onChange={(value) => setJsonInput(value)}
          placeholder="Type your JSON here..."
        />
      </div>
    );
}

export default ResumeBuilder;
