'use client';

import { useEffect } from 'react';
import Script from 'next/script';

interface ElevenLabsAgentProps {
  agentId: string;
}

// Extend JSX elements to allow the custom web component
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { 'agent-id': string },
        HTMLElement
      >;
    }
  }
}

const ElevenLabsAgent: React.FC<ElevenLabsAgentProps> = ({ agentId }) => {
  
  useEffect(() => {
    // Periodically check for the widget's shadow DOM to inject custom styles
    const intervalId = setInterval(() => {
      const widget = document.querySelector('elevenlabs-convai');
      if (widget && widget.shadowRoot) {
        const styleId = 'elevenlabs-branding-hidden';
        // Prevent duplicate injection
        if (!widget.shadowRoot.getElementById(styleId)) {
          const style = document.createElement('style');
          style.id = styleId;
          // Hide elements linking to elevenlabs.io (the branding)
          style.textContent = `a[href*="elevenlabs.io"] { display: none !important; opacity: 0 !important; }`;
          widget.shadowRoot.appendChild(style);
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Optional: Error handling if Agent ID is missing
  if (!agentId) {
    console.warn('ElevenLabs Agent ID is missing.');
    return null;
  }

  return (
    <>
      {/* 
        Load the ElevenLabs widget script. 
        strategy="afterInteractive" ensures it doesn't block the initial page load.
      */}
      <Script 
        src="https://elevenlabs.io/convai-widget/index.js" 
        strategy="afterInteractive" 
      />

      {/* Render the custom element provided by the script */}
      <div className="fixed bottom-5 right-5 z-50">
        <elevenlabs-convai agent-id={agentId}></elevenlabs-convai>
      </div>
    </>
  );
};

export default ElevenLabsAgent;
