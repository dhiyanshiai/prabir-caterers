import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Video, Sparkles, Loader2 } from 'lucide-react';

const BrandFilmGenerator: React.FC = () => {
  const [theme, setTheme] = useState('');
  const [script, setScript] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateScript = async () => {
    if (!theme) return;
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `
        Write a 60-second commercial script for "Prabir Caterers and Tent House" in Varanasi (Since 1983).
        
        Core Character: Prabir Da (Founder) - warm, charismatic, 60s, smiling, honest.
        Setting: Varanasi (Ghats, busy wedding venue).
        Theme: ${theme}.
        Vibe: Emotional, "Banaras ki Shaan", trustworthy.
        
        Structure:
        1. Visual descriptions.
        2. Dialogue for Prabir Da (Mix of English and Hindi/Banarasi flavor).
        3. Emotional hook.
        4. Call to action.
        
        Format the output clearly with Scene headings and Dialogue.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setScript(response.text || "Could not generate script at this time.");
    } catch (error) {
      console.error("Error generating script:", error);
      setScript("Error: Please check your API key or try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="brand-film" className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-4">
                <Sparkles size={14} className="mr-1" /> AI Powered Tool
            </span>
            <h2 className="text-3xl font-bold font-serif text-gray-900">Brand Film Script Generator</h2>
            <p className="mt-2 text-gray-600">
                Visualize the "Prabir Da" magic. Enter a wedding theme (e.g., "Monsoon Wedding in Assi" or "Grand Royal Reception") to generate a commercial script concept.
            </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            placeholder="E.g., Emotional Father-Daughter moment..."
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-marigold focus:ring-marigold p-3 border"
          />
          <button
            onClick={generateScript}
            disabled={loading || !theme}
            className="bg-hibiscus text-white px-6 py-3 rounded-md font-medium hover:bg-red-800 disabled:opacity-50 flex items-center justify-center min-w-[160px]"
          >
            {loading ? <Loader2 className="animate-spin mr-2" /> : <Video className="mr-2" />}
            {loading ? "Writing..." : "Generate Script"}
          </button>
        </div>

        {script && (
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-inner h-96 overflow-y-auto whitespace-pre-wrap font-mono text-sm text-gray-800">
            {script}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandFilmGenerator;