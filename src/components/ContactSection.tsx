import React, { useState } from 'react';

interface ContactSectionProps {
  isDark: boolean;
  activeColor: string;
}

export function ContactSection({ isDark, activeColor }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '5511985077273';
    const text = name.trim() || message.trim()
      ? `ola, venho do site copacabana\n\nNome: ${name}\nEmail: ${email}\nMensagem: ${message}`
      : 'ola, venho do site copacabana';
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contato" className={`w-full py-24 px-6 sm:px-12 md:px-16 border-t transition-colors duration-300 ${isDark ? 'border-white/10 bg-[#0a0b0e]' : 'border-neutral-200 bg-[#fbfbfb]'}`}>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="font-mono-data text-xs uppercase tracking-[0.2em] font-bold block mb-4" style={{ color: activeColor }}>
          Contato
        </span>
        <h2 className={`font-heading text-4xl sm:text-5xl font-black mb-6 tracking-tight ${isDark ? 'text-white' : 'text-neutral-900'}`}>
          Vamos tomar um café?
        </h2>
        <p className={`font-sans text-sm sm:text-base max-w-xl mx-auto leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
          Tem um projeto em mente? Entre em contato e vamos conversar sobre como a copacabanabrasil pode acelerar a sua marca.
        </p>
      </div>
      <div className="max-w-2xl mx-auto relative z-10">
        <div className={`p-8 sm:p-10 rounded-3xl border shadow-2xl backdrop-blur-md ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-neutral-200'}`}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <label className={`block text-[11px] font-mono-data uppercase tracking-wider mb-2 ml-1 ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>Nome</label>
                <input 
                  type="text" 
                  placeholder="Seu Nome" 
                  value={name} 
                  onChange={e => setName(e.target.value)} 
                  required 
                  className={`w-full px-5 py-3.5 rounded-xl border font-sans text-sm outline-none transition-colors ${isDark ? 'bg-black/40 border-white/10 text-white focus:border-amber-500 focus:bg-black/60' : 'bg-neutral-50 border-neutral-200 text-neutral-900 focus:border-amber-500 focus:bg-white'}`}
                />
              </div>
              <div className="flex-1">
                <label className={`block text-[11px] font-mono-data uppercase tracking-wider mb-2 ml-1 ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>Email</label>
                <input 
                  type="email" 
                  placeholder="Seu Email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  required 
                  className={`w-full px-5 py-3.5 rounded-xl border font-sans text-sm outline-none transition-colors ${isDark ? 'bg-black/40 border-white/10 text-white focus:border-amber-500 focus:bg-black/60' : 'bg-neutral-50 border-neutral-200 text-neutral-900 focus:border-amber-500 focus:bg-white'}`}
                />
              </div>
            </div>
            <div>
              <label className={`block text-[11px] font-mono-data uppercase tracking-wider mb-2 ml-1 ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>Mensagem</label>
              <textarea 
                placeholder="Conte-nos sobre o seu projeto..." 
                value={message} 
                onChange={e => setMessage(e.target.value)} 
                required 
                rows={4}
                className={`w-full px-5 py-4 rounded-xl border font-sans text-sm outline-none transition-colors resize-y ${isDark ? 'bg-black/40 border-white/10 text-white focus:border-amber-500 focus:bg-black/60' : 'bg-neutral-50 border-neutral-200 text-neutral-900 focus:border-amber-500 focus:bg-white'}`}
              />
            </div>
            <button 
              type="submit" 
              className="mt-2 w-full sm:w-auto self-center px-10 py-4 rounded-full font-bold text-white text-sm tracking-wide transition-all hover:scale-105 shadow-[0_4px_20px_rgba(0,0,0,0.2)] flex items-center justify-center gap-2.5"
              style={{ backgroundColor: activeColor }}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
