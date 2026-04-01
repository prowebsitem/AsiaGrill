/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Utensils, 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  Users, 
  Calendar, 
  ChevronRight, 
  CheckCircle2,
  Menu as MenuIcon,
  X,
  Instagram,
  Facebook
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="bg-brand-600 p-2.5 rounded-2xl shadow-xl shadow-brand-200/50 animate-float">
              <Utensils className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900 font-display">
              AsiaGrill <span className="text-brand-600">168</span>
            </span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-10">
            {['Menu', 'Experience', 'Avis', 'Contact'].map((item, idx) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-sm font-bold text-slate-600 hover:text-brand-600 transition-colors relative group"
              >
                {item === 'Experience' ? "L'Expérience" : item === 'Contact' ? 'Accès' : `Le ${item}`}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a 
              href="tel:0139788179" 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-600 text-white px-8 py-3.5 rounded-2xl text-sm font-black hover:bg-brand-700 transition-all shadow-2xl shadow-brand-200/50"
            >
              Réserver ma table
            </motion.a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-900 bg-slate-100 rounded-xl">
              {isOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full glass border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-8 space-y-6">
              {['Menu', 'Experience', 'Avis', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)} 
                  className="block text-xl font-black text-slate-900"
                >
                  {item === 'Experience' ? "L'Expérience" : item === 'Contact' ? 'Accès' : `Le ${item}`}
                </a>
              ))}
              <a 
                href="tel:0139788179" 
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-brand-600 text-white px-6 py-5 rounded-2xl font-black shadow-xl shadow-brand-200/50"
              >
                Réserver ma table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-48 overflow-hidden bg-mesh">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white z-10" />
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1920" 
            alt="Buffet Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-5 py-2 mb-10 text-[10px] font-black tracking-[0.3em] text-brand-600 uppercase glass rounded-full"
            >
              <MapPin className="w-3 h-3" /> Herblay-sur-Seine
            </motion.div>
            
            <h1 className="text-7xl lg:text-[120px] font-black text-slate-900 leading-[0.85] mb-10 tracking-tighter font-display">
              Le buffet <br />
              <span className="text-gradient">asiatique</span> <br />
              réinventé
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-500 mb-14 leading-relaxed max-w-2xl font-medium">
              Une immersion sensorielle unique. Plus de 100 créations artisanales préparées chaque jour pour les passionnés de gastronomie asiatique.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-20">
              <motion.a 
                href="tel:0139788179" 
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-12 py-6 bg-brand-600 text-white text-xl font-black rounded-[2rem] transition-all shadow-[0_20px_50px_-10px_rgba(37,99,235,0.4)] group"
              >
                Réserver ma table
                <ChevronRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.a>
              
              <div className="flex items-center gap-5 px-8 py-4 glass rounded-[2rem]">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-lg">
                      <img src={`https://i.pravatar.cc/100?img=${i+25}`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-brand-500 mb-1">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">1 380+ avis gourmands</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { label: "Produits Frais", icon: "🌱" },
                { label: "Wok & Grill", icon: "🔥" },
                { label: "Espace VIP", icon: "✨" },
                { label: "Parking Privé", icon: "🚗" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-2xl shadow-lg">
                    {item.icon}
                  </div>
                  <span className="text-xs font-black text-slate-900 uppercase tracking-widest">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const VisualSection = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800", title: "Sushi Frais", tag: "Artisanat" },
    { url: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=800", title: "Grillades Minute", tag: "Savoir-faire" },
    { url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800", title: "Cadre Convivial", tag: "Ambiance" },
    { url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800", title: "Desserts Maison", tag: "Douceur" }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-brand-600 font-black uppercase tracking-[0.4em] text-xs mb-6 block">Galerie</span>
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter font-display">L'art du <span className="text-gradient">bien-manger</span></h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Une sélection rigoureuse de produits d'exception pour une expérience inoubliable.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              whileHover={{ y: -20 }}
              className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-900/20 to-transparent flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-brand-300 text-[10px] font-black uppercase tracking-[0.3em] mb-3">{img.tag}</span>
                <span className="text-white font-black text-3xl mb-4 leading-tight font-display">{img.title}</span>
                <div className="w-16 h-1.5 bg-brand-500 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
              </div>
              <div className="absolute top-8 right-8 w-12 h-12 glass rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <ChevronRight className="text-brand-600 w-6 h-6" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const reviews = [
    { name: "Thomas R.", text: "Une expérience incroyable. Le buffet est d'une fraîcheur rare pour un restaurant à volonté. Les sushis sont préparés minute.", rating: 5 },
    { name: "Claire D.", text: "Le cadre est magnifique, très moderne et propre. Idéal pour un dîner en famille. Le service est rapide et souriant.", rating: 5 },
    { name: "Marc L.", text: "Le meilleur wok du coin. Les produits sont de qualité et la cuisson est parfaitement maîtrisée. Je recommande vivement !", rating: 5 }
  ];

  return (
    <section id="avis" className="py-32 bg-brand-50/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-600 font-black uppercase tracking-[0.4em] text-xs mb-8 block">Témoignages</span>
            <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-12 tracking-tighter leading-[0.85] font-display">
              Adopté par les <br />
              <span className="text-gradient">passionnés</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center gap-12 mb-12">
              <div className="glass p-10 rounded-[3rem] text-center sm:text-left">
                <div className="text-7xl font-black text-brand-600 mb-3 font-display">4.1<span className="text-2xl text-slate-300 font-sans">/5</span></div>
                <div className="flex justify-center sm:justify-start gap-1.5 mb-4">
                  {[1,2,3,4].map(i => <Star key={i} className="w-6 h-6 fill-brand-500 text-brand-500" />)}
                  <Star className="w-6 h-6 text-brand-200" />
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Basé sur 1 380+ avis Google</p>
              </div>
              
              <div className="space-y-6 flex-1 w-full">
                {['Cuisine', 'Service', 'Ambiance'].map((label, i) => (
                  <div key={label} className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                      <span>{label}</span>
                      <span className="text-brand-600">{i === 0 ? '94%' : i === 1 ? '91%' : '88%'}</span>
                    </div>
                    <div className="w-full h-2.5 bg-white rounded-full overflow-hidden border border-brand-100 shadow-inner">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: i === 0 ? '94%' : i === 1 ? '91%' : '88%' }}
                        transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-gradient-to-r from-brand-500 to-brand-600 rounded-full" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="space-y-10">
            {reviews.map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass p-12 rounded-[3rem] relative group"
              >
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-brand-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-brand-200 rotate-12 group-hover:rotate-0 transition-all duration-500">
                  <Star className="text-white w-8 h-8 fill-current" />
                </div>
                <p className="text-slate-600 text-xl font-medium italic leading-relaxed mb-8 pt-4">"{review.text}"</p>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center font-black text-brand-600 text-xl font-display">
                    {review.name[0]}
                  </div>
                  <span className="font-black text-slate-900 uppercase tracking-[0.2em] text-xs">{review.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const MenuSection = () => {
  const categories = [
    { title: "Sushi & Sashimi", items: "Saumon Label Rouge, California rolls, Sashimi Thon, Crevettes Tempura...", icon: "🍣" },
    { title: "Wok & Grillades", items: "Gambas Grillées, Brochettes Bœuf Fromage, Nouilles Sautées, Poulet Croustillant...", icon: "🔥" },
    { title: "Spécialités Vapeur", items: "Ha Kao, Siu Mai, Bouchées de Crevettes, Raviolis Grillés...", icon: "🥟" },
    { title: "Desserts & Glaces", items: "Mochi Glacé, Perles de Coco, Tiramisu Maison, Fruits Frais de Saison...", icon: "🍰" }
  ];

  return (
    <section id="menu" className="py-32 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-600/10 blur-[180px] rounded-full -mr-96 -mt-96" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/10 blur-[180px] rounded-full -ml-96 -mb-96" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <span className="text-brand-400 font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">La Carte</span>
          <h2 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter font-display">Un voyage <span className="text-brand-500">infini</span></h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Explorez une palette infinie de saveurs authentiques, du Japon à la Chine, préparées avec passion sous vos yeux.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -15 }}
              className="glass-dark p-12 rounded-[3.5rem] transition-all duration-500 group"
            >
              <div className="text-6xl mb-10 group-hover:scale-125 transition-transform duration-500 inline-block drop-shadow-2xl">{cat.icon}</div>
              <h3 className="text-2xl font-black mb-6 tracking-tight font-display">{cat.title}</h3>
              <p className="text-slate-400 leading-relaxed text-lg font-medium">{cat.items}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <a 
            href="tel:0139788179" 
            className="w-full bg-brand-600 rounded-[3.5rem] p-12 flex flex-col md:flex-row items-center justify-between gap-10 group hover:bg-brand-700 transition-all duration-500 shadow-2xl shadow-brand-900/50"
          >
            <div className="flex items-center gap-8">
              <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Phone className="text-white w-10 h-10" />
              </div>
              <div className="text-left">
                <h3 className="text-4xl font-black tracking-tighter font-display mb-2">Prêt pour le festin ?</h3>
                <p className="text-white/70 text-xl font-medium">Réservez votre table en un clic</p>
              </div>
            </div>
            <div className="bg-white text-brand-600 px-12 py-6 rounded-2xl font-black text-xl shadow-2xl group-hover:translate-x-4 transition-transform duration-500">
              Appeler maintenant
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10">
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200" 
                alt="Restaurant Interior" 
                className="rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(37,99,235,0.3)] border-8 border-white"
                referrerPolicy="no-referrer"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-16 -right-16 glass p-12 rounded-[3.5rem] hidden md:block"
              >
                <div className="flex items-center gap-8">
                  <div className="bg-brand-600 p-5 rounded-3xl shadow-2xl shadow-brand-200">
                    <Users className="text-white w-10 h-10" />
                  </div>
                  <div>
                    <div className="font-black text-3xl text-slate-900 tracking-tighter font-display">Espace Groupes</div>
                    <div className="text-brand-600 font-black text-xs uppercase tracking-[0.2em] mt-1">Jusqu'à 150 convives</div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-100 rounded-full blur-[100px] opacity-40 animate-pulse" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2"
          >
            <span className="text-brand-600 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">L'Atmosphère</span>
            <h2 className="text-6xl md:text-[84px] font-black text-slate-900 mb-12 leading-[0.85] tracking-tighter font-display">
              Un cadre <span className="text-gradient">majestueux</span>
            </h2>
            <p className="text-xl text-slate-500 mb-16 leading-relaxed font-medium">
              Plongez dans une atmosphère sereine où le design contemporain rencontre l'hospitalité traditionnelle. Chaque détail est pensé pour sublimer votre dégustation.
            </p>
            
            <div className="grid gap-10">
              {[
                { title: "Espaces Privatisables", desc: "Des zones dédiées pour vos événements familiaux ou professionnels.", icon: "💎" },
                { title: "Service d'Excellence", desc: "Une équipe attentionnée pour une expérience fluide et mémorable.", icon: "✨" },
                { title: "Design Épuré", desc: "Un intérieur moderne alliant matériaux nobles et éclairages tamisés.", icon: "🏛️" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex gap-8 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 glass rounded-3xl flex items-center justify-center text-2xl group-hover:bg-brand-600 transition-all duration-500 group-hover:scale-110">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-2xl mb-2 tracking-tight font-display">{item.title}</h4>
                    <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-brand-600 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Localisation</span>
          <h2 className="text-6xl md:text-[84px] font-black text-slate-900 mb-8 tracking-tighter font-display">Nous <span className="text-gradient">rejoindre</span></h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Au cœur d'Herblay-sur-Seine, un accès privilégié pour une escale gourmande.</p>
        </motion.div>

        <div className="bg-slate-950 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.3)] relative">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 p-12 lg:p-24 space-y-16 text-white relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <h3 className="text-[10px] font-black text-brand-400 uppercase tracking-[0.4em] mb-8 flex items-center gap-4">
                  <MapPin className="w-5 h-5" /> Adresse
                </h3>
                <p className="text-3xl font-black leading-tight group-hover:text-brand-400 transition-colors font-display">
                  17 Rue René Cassin<br />
                  95220 Herblay-sur-Seine
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-[10px] font-black text-brand-400 uppercase tracking-[0.4em] mb-8 flex items-center gap-4">
                  <Clock className="w-5 h-5" /> Horaires
                </h3>
                <div className="space-y-6 text-slate-400">
                  {[
                    { day: "Lun - Ven", time: "12:00–14:15 | 19:00–22:15" },
                    { day: "Samedi", time: "12:00–14:30 | 19:00–22:30" },
                    { day: "Dimanche", time: "12:00–14:15 | 19:00–22:00" }
                  ].map((h) => (
                    <div key={h.day} className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span className="font-black text-white text-sm uppercase tracking-widest">{h.day}</span>
                      <span className="text-lg font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-[10px] font-black text-brand-400 uppercase tracking-[0.4em] mb-8 flex items-center gap-4">
                  <Phone className="w-5 h-5" /> Contact
                </h3>
                <a href="tel:0139788179" className="text-5xl font-black text-white hover:text-brand-400 transition-colors tracking-tighter font-display">
                  01 39 78 81 79
                </a>
              </motion.div>
            </div>
            <div className="lg:w-3/5 h-[600px] lg:h-auto min-h-[600px] grayscale hover:grayscale-0 transition-all duration-1000 relative">
              <iframe 
                src="https://maps.google.com/maps?q=17%20Rue%20Ren%C3%A9%20Cassin%2C%2095220%20Herblay-sur-Seine&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Google Maps AsiaGrill 168"
                className="opacity-80 hover:opacity-100 transition-opacity duration-1000"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-20 mb-32">
          <div className="flex items-center gap-4">
            <div className="bg-brand-600 p-4 rounded-[1.5rem] shadow-2xl shadow-brand-900 animate-float">
              <Utensils className="text-white w-10 h-10" />
            </div>
            <span className="text-4xl font-black tracking-tighter font-display">AsiaGrill <span className="text-brand-600">168</span></span>
          </div>
          
          <div className="flex gap-12">
            <motion.a whileHover={{ y: -8, color: '#3b82f6' }} href="#" className="text-slate-400 transition-all duration-300"><Instagram className="w-10 h-10" /></motion.a>
            <motion.a whileHover={{ y: -8, color: '#3b82f6' }} href="#" className="text-slate-400 transition-all duration-300"><Facebook className="w-10 h-10" /></motion.a>
          </div>

          <motion.a 
            href="tel:0139788179" 
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-slate-950 px-12 py-5 rounded-[2rem] font-black text-xl hover:bg-brand-50 transition-all shadow-2xl"
          >
            Réserver ma table
          </motion.a>
        </div>
        
        <div className="h-px bg-white/5 mb-16" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
          <p>© 2026 AsiaGrill 168. L'excellence au service du goût.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-brand-400 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-brand-400 transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-100 selection:text-brand-600 bg-mesh">
      <Navbar />
      <main>
        <Hero />
        <VisualSection />
        <SocialProof />
        <MenuSection />
        <Experience />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
