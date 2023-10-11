import React from "react";

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import {useState} from "react";
import "./Speech.css";
import { MdCancelPresentation } from "react-icons/md";
import { useNavigate } from "react-router-dom";


export default function Speech() {
  const navigate = useNavigate();
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration:500
    });
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    if (!browserSupportsSpeechRecognition) {
        return null
    }
  return (
    <div className="mainspeechcnt">
    
      <div className="Speechcnt">
      <MdCancelPresentation onClick = {() => {
      navigate('/inbox');
    }} />
        <h2>Speech to text converter</h2>
        <br />
        <p>
          A rect hook that covert speech from the microphone to text and makes
          it available in react js
        </p>

        <div className="main-cnt" onClick={() => setTextToCopy(transcript)}>
                    {transcript}
        </div>
        <div className="btn-style">
          <button className="speechbtn" onClick={setCopied}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}</button>
          <button className="speechbtn" onClick={startListening}>Start Listening</button>
          <button className="speechbtn" onClick={SpeechRecognition.stopListening}>Stop</button>
        </div>
      </div>
    </div>
  );
}
