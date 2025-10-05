// import { useEffect, useRef } from "react";

// const AnimatedBackground = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const resizeCanvas = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };

//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);

//     // NLP & Data Science themed particles
//     const particles: { x: number; y: number; speed: number; char: string; opacity: number; size: number; type: 'code' | 'word' | 'symbol' }[] = [];
    
//     // More diverse character set for NLP/Data Science
//     const codeChars = "01{}[]()<>/\\|";
//     const dataWords = ["AI", "ML", "NLP", "RNN", "CNN", "GPT", "BERT", "LLM", "RAG", "API"];
//     const symbols = "αβγδθλμσΣπΦΨΩ∑∫∂∇";
    
//     const particleCount = 40; // Increased count

//     for (let i = 0; i < particleCount; i++) {
//       const type = Math.random() < 0.4 ? 'word' : (Math.random() < 0.7 ? 'code' : 'symbol');
//       let char = "";
      
//       if (type === 'word') {
//         char = dataWords[Math.floor(Math.random() * dataWords.length)];
//       } else if (type === 'code') {
//         char = codeChars[Math.floor(Math.random() * codeChars.length)];
//       } else {
//         char = symbols[Math.floor(Math.random() * symbols.length)];
//       }

//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         speed: 0.2 + Math.random() * 0.3,
//         char,
//         opacity: 0.2 + Math.random() * 0.25, // Increased opacity
//         size: type === 'word' ? 14 + Math.random() * 6 : 12 + Math.random() * 8,
//         type
//       });
//     }

//     let time = 0;

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       time += 0.005;

//       const isDark = document.documentElement.classList.contains('dark');

//       particles.forEach((particle) => {
//         // Gentle vertical flow with subtle horizontal wave
//         particle.y -= particle.speed;
//         particle.x += Math.sin(time + particle.y * 0.01) * 0.4;

//         // Reset particle when it goes off screen
//         if (particle.y < -30) {
//           particle.y = canvas.height + 30;
//           particle.x = Math.random() * canvas.width;
          
//           const type = Math.random() < 0.4 ? 'word' : (Math.random() < 0.7 ? 'code' : 'symbol');
//           if (type === 'word') {
//             particle.char = dataWords[Math.floor(Math.random() * dataWords.length)];
//           } else if (type === 'code') {
//             particle.char = codeChars[Math.floor(Math.random() * codeChars.length)];
//           } else {
//             particle.char = symbols[Math.floor(Math.random() * symbols.length)];
//           }
//         }

//         // Draw character with enhanced visibility
//         ctx.save();
//         ctx.globalAlpha = particle.opacity;
//         ctx.font = `${particle.type === 'word' ? '600' : '400'} ${particle.size}px "JetBrains Mono", monospace`;
//         ctx.fillStyle = isDark ? "rgba(135, 175, 205, 0.65)" : "rgba(34, 70, 94, 0.55)";
//         ctx.fillText(particle.char, particle.x, particle.y);
        
//         // Subtle glow effect for better visibility
//         ctx.globalAlpha = particle.opacity * 0.4;
//         ctx.shadowBlur = 10;
//         ctx.shadowColor = isDark ? "rgba(135, 175, 205, 0.5)" : "rgba(34, 70, 94, 0.4)";
//         ctx.fillText(particle.char, particle.x, particle.y);
//         ctx.restore();
//       });

//       requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 w-full h-full pointer-events-none opacity-75 dark:opacity-70"
//     />
//   );
// };

// export default AnimatedBackground;


import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // --- MODIFIED: More specific and personal keywords & symbols ---
    const codeChars = "{}[]()<>/\\|->\"\"\"";
    const dataWords = [
      "RAG", "SAS", "AutoGen", "LangChain", "Agents", "ModernBERT", "PyTorch", 
      "LoRA", "Fine-tuning", "Hugging Face", "Generative", "Adversarial Systems", 
      "NeoBERT", "FinNLP", "Synthesis", "PEFT", "Risk"
    ];
    const symbols = "αβΣΩ∂∇→⊕⊗∀∃🧠";
    // --- END OF MODIFICATIONS ---

    const particles: { x: number; y: number; speed: number; char: string; opacity: number; size: number; type: 'code' | 'word' | 'symbol' }[] = [];
    
    const particleCount = 45; // Slightly increased for more variety

    for (let i = 0; i < particleCount; i++) {
      // Adjusted probability: 50% words, 30% symbols, 20% code
      const type = Math.random() < 0.5 ? 'word' : (Math.random() < 0.7 ? 'symbol' : 'code');
      let char = "";
      
      if (type === 'word') {
        char = dataWords[Math.floor(Math.random() * dataWords.length)];
      } else if (type === 'code') {
        char = codeChars[Math.floor(Math.random() * codeChars.length)];
      } else {
        char = symbols[Math.floor(Math.random() * symbols.length)];
      }

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.2 + Math.random() * 0.3,
        char,
        opacity: 0.2 + Math.random() * 0.25,
        size: type === 'word' ? 14 + Math.random() * 6 : 12 + Math.random() * 8,
        type
      });
    }

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      const isDark = document.documentElement.classList.contains('dark');

      particles.forEach((particle) => {
        particle.y -= particle.speed;
        particle.x += Math.sin(time + particle.y * 0.01) * 0.4;

        if (particle.y < -30) {
          particle.y = canvas.height + 30;
          particle.x = Math.random() * canvas.width;
          
          const type = Math.random() < 0.5 ? 'word' : (Math.random() < 0.7 ? 'symbol' : 'code');
          if (type === 'word') {
            particle.char = dataWords[Math.floor(Math.random() * dataWords.length)];
          } else if (type === 'code') {
            particle.char = codeChars[Math.floor(Math.random() * codeChars.length)];
          } else {
            particle.char = symbols[Math.floor(Math.random() * symbols.length)];
          }
        }

        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.font = `${particle.type === 'word' ? '600' : '400'} ${particle.size}px "JetBrains Mono", monospace`;
        ctx.fillStyle = isDark ? "rgba(135, 175, 205, 0.65)" : "rgba(34, 70, 94, 0.55)";
        ctx.fillText(particle.char, particle.x, particle.y);
        
        ctx.globalAlpha = particle.opacity * 0.4;
        ctx.shadowBlur = 10;
        ctx.shadowColor = isDark ? "rgba(135, 175, 205, 0.5)" : "rgba(34, 70, 94, 0.4)";
        ctx.fillText(particle.char, particle.x, particle.y);
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-75 dark:opacity-70"
    />
  );
};

export default AnimatedBackground;
