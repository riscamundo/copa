const fs = require('fs');

let content = fs.readFileSync('src/components/CopalogiaView.tsx', 'utf8');

// Add isModalOpen state and X (Close) icon import
if (!content.includes('isModalOpen')) {
  content = content.replace(/const \[selectedStepIndex, setSelectedStepIndex\] = useState<number>\(0\);/, 
    `const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);`);
}

if (!content.includes('X,')) {
  content = content.replace(/ShieldCheck\n\} from 'lucide-react';/, `ShieldCheck,\n  X\n} from 'lucide-react';`);
}

// Remove the inline In-Depth Detail Card and replace with Modal
const detailCardRegex = /\{\/\* In-Depth Step Detail Showcase Card \*\/\}.*?\{\/\* Bottom Quote & Link \*\/\}/s;

const modalCode = `{/* Modal for Individual Step Expansion */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
          <div 
            className="relative w-full max-w-5xl max-h-full overflow-y-auto rounded-3xl border border-white/10 bg-gradient-to-br from-[#13161c] via-[#0f1116] to-[#15120c] shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left side: Large Image */}
            <div className="w-full md:w-2/5 aspect-square md:aspect-auto md:h-auto relative bg-neutral-900 flex-shrink-0">
              <img 
                src={selectedStep.image} 
                alt={selectedStep.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                 <div className="w-16 h-16 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg">
                    {stepIcons[selectedStepIndex]}
                 </div>
              </div>
            </div>

            {/* Right side: Content */}
            <div className="w-full md:w-3/5 p-8 sm:p-12 flex flex-col justify-center">
              <div className="flex flex-col gap-2 mb-8 border-b border-white/10 pb-6">
                <span className="font-mono-data text-xs uppercase tracking-widest text-amber-500 font-bold">
                  Passo {selectedStep.step} de .07
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                  {selectedStep.name}
                </h2>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-mono-data text-xs uppercase tracking-widest text-neutral-400 mb-3">
                    Objetivo da Etapa:
                  </h3>
                  <p className="font-sans text-base sm:text-lg text-neutral-200 leading-relaxed font-light mb-6">
                    {selectedStep.desc}
                  </p>
                  <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5">
                    <span className="font-mono-data text-xs uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                      Ação Executiva:
                    </span>
                    <p className="font-sans text-sm text-neutral-300">
                      {selectedStep.action}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-mono-data text-xs uppercase tracking-widest text-neutral-400 mb-3">
                    Por que esta etapa é inegociável:
                  </h3>
                  <div className="space-y-3 font-sans text-xs sm:text-sm text-neutral-300">
                    <div className="p-3.5 rounded-xl border border-white/10 bg-white/5 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white font-medium block">Alinhamento Rigoroso de Expectativas</strong>
                        Elimina retrabalhos e garante que estratégia e estética caminhem juntas desde o início.
                      </div>
                    </div>
                    <div className="p-3.5 rounded-xl border border-white/10 bg-white/5 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white font-medium block">Segurança de Prazos & Entregas</strong>
                        Marcos bem delimitados para que a diretoria e as áreas de negócio acompanhem o progresso com previsibilidade.
                      </div>
                    </div>
                    <div className="p-3.5 rounded-xl border border-white/10 bg-white/5 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white font-medium block">Excelência de Padrão Gráfico</strong>
                        Revisão minuciosa em 4K, ajuste de kerning, contraste e proporção para materiais executivos.
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Navigation inside modal */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    onClick={() => setSelectedStepIndex((selectedStepIndex - 1 + 7) % 7)}
                    className="px-4 py-2 rounded-full border border-white/20 hover:border-white/40 text-xs font-mono-data text-neutral-300 transition-colors cursor-pointer"
                  >
                    ← Anterior
                  </button>
                  <button
                    onClick={() => setSelectedStepIndex((selectedStepIndex + 1) % 7)}
                    className="px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs font-mono-data transition-colors cursor-pointer"
                  >
                    Próximo →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Quote & Link */}`;

content = content.replace(detailCardRegex, modalCode);

// Modify grid onClick to open modal
content = content.replace(/onClick=\{\(\) => setSelectedStepIndex\(idx\)\}/g, `onClick={() => { setSelectedStepIndex(idx); setIsModalOpen(true); }}`);

fs.writeFileSync('src/components/CopalogiaView.tsx', content);

