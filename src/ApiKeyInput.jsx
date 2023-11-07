import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ApiKeyInput = ({ onApiKeySubmit }) => {
  const [apiKey, setApiKey] = useState("");

  const handleApiKeySubmit = () => {
    onApiKeySubmit(apiKey);
  };

  return (
    <div>
      <label htmlFor="apiKey">OpenAI API Key:</label>
      <input
        type="text"
        id="apiKey"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />
      <button onClick={handleApiKeySubmit}>Submit API Key</button>
    </div>
  );
};

export default ApiKeyInput;
