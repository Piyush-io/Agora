const NotebookScribble = ({ children, color, className = "" }) => (
  <div
    className={`absolute pointer-events-none ${className}`}
    style={{
      color,
      fontFamily: "pinkendregular, cursive",
      transform: `rotate(${Math.random() * 10 - 5}deg)`,
      fontSize: "1.5rem",
      lineHeight: "1.2",
      whiteSpace: "pre-line",
    }}
  >
    {children}
  </div>
);

const DiagramElement = ({ className, children }) => (
  <div className={`absolute pointer-events-none ${className}`}>{children}</div>
);

export default function DevicePreview() {
  return (
    <section className="py-12 px-6 overflow-hidden">
      {/* Study-related Scribbles */}
      <NotebookScribble
        color="#FF6B6B"
        className="absolute top-4 right-[25%] text-2xl font-pinkend"
      >
        {"Remember:\nPhotosynthesis = \nLight + CO₂ + H₂O"}
      </NotebookScribble>

      <NotebookScribble color="#4EA8DE" className="top-[20%] -left-12 text-xl">
        {"E = mc²\nEnergy-mass\nequivalence"}
      </NotebookScribble>

      <NotebookScribble color="#000000" className="top-[40%] left-40 text-xl">
        {"Schrödinger Equation\n" + "iℏ ∂Ψ/∂t = HΨ"}
      </NotebookScribble>
      
      <NotebookScribble
        color="#FF9671"
        className="top-[40%] right-[15%] text-xl"
      >
        {"∫ f(x) dx\nIntegration"}
      </NotebookScribble>

      <NotebookScribble
        color="#4EA8DE"
        className="bottom-[20%] left-[20%] text-xl"
      >
        {"ΔG = ΔH - TΔS\nGibbs Free Energy"}
      </NotebookScribble>

      <NotebookScribble
        color="#845EC2"
        className="bottom-20 right-[20%] text-2xl"
      >
        {"DNA Structure:\nDouble Helix\nBase Pairs A-T, G-C"}
      </NotebookScribble>

      {/* Math Diagram */}
      <DiagramElement className="top-[30%] right-4">
        <svg width="120" height="120" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#FF9671"
            strokeWidth="2"
          />
          <line
            x1="50"
            y1="10"
            x2="50"
            y2="90"
            stroke="#FF9671"
            strokeWidth="2"
          />
          <line
            x1="10"
            y1="50"
            x2="90"
            y2="50"
            stroke="#FF9671"
            strokeWidth="2"
          />
          <text x="23" y="40" fill="#FF9671" fontSize="8">
            sin θ
          </text>
          <text x="57" y="65" fill="#FF9671" fontSize="8">
            cos θ
          </text>
        </svg>
      </DiagramElement>

      {/* Molecule Diagram */}
      <DiagramElement className="bottom-[30%] -left-8">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="30" r="10" fill="#4EA8DE" />
          <circle cx="30" cy="60" r="10" fill="#4EA8DE" />
          <circle cx="70" cy="60" r="10" fill="#4EA8DE" />
          <line
            x1="50"
            y1="30"
            x2="30"
            y2="60"
            stroke="#4EA8DE"
            strokeWidth="2"
          />
          <line
            x1="50"
            y1="30"
            x2="70"
            y2="60"
            stroke="#4EA8DE"
            strokeWidth="2"
          />
        </svg>
      </DiagramElement>

      {/* Chemical Structure */}
      <DiagramElement className="absolute right-20 top-100">
        <svg width="120" height="120" viewBox="0 0 100 100">
          <path
            d="M20,50 L40,30 L60,30 L80,50 L60,70 L40,70 Z"
            stroke="#845EC2"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="40" cy="30" r="3" fill="#845EC2" />
          <circle cx="60" cy="30" r="3" fill="#845EC2" />
          <circle cx="80" cy="50" r="3" fill="#845EC2" />
          <circle cx="60" cy="70" r="3" fill="#845EC2" />
          <circle cx="40" cy="70" r="3" fill="#845EC2" />
          <circle cx="20" cy="50" r="3" fill="#845EC2" />
        </svg>
      </DiagramElement>

      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* iPad Frame */}
          <div className="relative rounded-[3rem] bg-[#1a1a1a] p-3 shadow-xl">
        {/* Screen bezel */}
        <div className="relative rounded-[2.5rem] bg-black p-2">
          {/* Screen content */}
          <div className="relative rounded-[2.25rem] overflow-hidden w-full h-[600px]">
            {/* Screen Image */}
            <img
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200"
              alt="iPad notes app showing study notes"
              className="w-full h-full object-cover"
            />
            
            {/* Status Bar */}
            <div className="absolute top-3 left-6 right-6 flex justify-between items-center text-white text-sm">
              <span className="font-medium">9:41</span>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0013 3.06V1h-2v2.06A8.994 8.994 0 003.06 11H1v2h2.06A8.994 8.994 0 0011 20.94V23h2v-2.06A8.994 8.994 0 0020.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
                </svg>
                <span className="font-medium">100%</span>
                <div className="w-6 h-3 border-2 border-white rounded-sm relative">
                  <div className="absolute inset-0 bg-white -mr-1"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-white translate-x-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </section>
  );
}
