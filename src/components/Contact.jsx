import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { useLanguage } from '@/components/LanguageContext';
import { useTheme } from '@/components/ThemeContext';

export default function Contact() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [state, handleSubmit] = useForm("movklago");
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const colorsByTheme = {
    light: {
      bgSection: 'bg-gradient-to-b from-gray-50 to-white',
      textMain: '#000000',
      textSecondary: '#374151',
      cardBg: 'bg-white',
      cardBorder: 'border-gray-200',
      accent: '#FACC15',
      accentText: '#FACC15', 
      accentBg: 'bg-yellow-500/10',
      inputBg: 'bg-white',
      inputBorder: 'border-gray-300',
      inputText: '#000000',
      labelColor: 'text-gray-700',
      placeholder: 'placeholder:text-gray-400',
      glow: 'bg-yellow-400/10 blur-3xl',
      shadow: 'shadow-yellow-400/20'
    },
    dark: {
      bgSection: 'bg-black',
      textMain: '#FFFFFF',
      textSecondary: '#D1D5DB',
      cardBg: 'bg-zinc-900',
      cardBorder: 'border-zinc-800',
      accent: '#FACC15',
      accentText: '#FDE047',
      accentBg: 'bg-yellow-400/20',
      inputBg: 'bg-black',
      inputBorder: 'border-zinc-700',
      inputText: '#FFFFFF',
      labelColor: 'text-zinc-300',
      placeholder: 'placeholder:text-gray-500',
      glow: 'bg-yellow-500/10 blur-3xl',
      shadow: 'shadow-yellow-500/20'
    }
  };

  const colors = colorsByTheme[theme] || colorsByTheme.light;

  const contactInfo = [
    { icon: Phone, title: t.contact.info.phone, value: '(15) 3552-2325' },
    { icon: Mail, title: t.contact.info.email, value: 'engenharia@dibitech.com.br' },
    { icon: MapPin, title: t.contact.info.location, value: 'Apiaí - SP, Brasil' }
  ];

  return (
    <section id="contato" className={`py-24 relative overflow-hidden transition-colors duration-500 ${colors.bgSection}`}>
      {/* === BACKGROUND PATTERN === */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 48%, ${colors.accent} 49%, ${colors.accent} 51%, transparent 52%)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* === HEADER === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className={`px-6 py-2 border-2 rounded-full ${colors.accentBg} border-yellow-400/50`}>
              <span className="font-bold text-sm tracking-wider" style={{ color: colors.accentText }}>
                {t.contact.badge}
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span style={{ color: colors.textMain }}>{t.contact.title} </span>
            <span style={{ color: colors.accent }}>{t.contact.titleHighlight}</span>
          </h2>
          <div className="h-1.5 w-48 mx-auto bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-6 rounded-full" />
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed`} style={{ color: colors.textSecondary }}>
            {t.contact.description}
          </p>
        </motion.div>

        {/* === CONTACT INFO CARDS === */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className={`border-2 h-full group transition-all duration-300 ${colors.cardBg} ${colors.cardBorder}`}>
                <CardContent className="p-8 text-center relative">
                  <div className={`absolute inset-0 -z-10 ${colors.glow} rounded-3xl scale-95 opacity-0 group-hover:opacity-100 transition-opacity`} />

                  <div className="relative inline-block mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg relative z-10 transition-transform group-hover:scale-110`}
                         style={{ backgroundColor: colors.accent, color: '#000000' }}>
                      <info.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: colors.textMain }}>{info.title}</h3>
                  <p className="font-medium" style={{ color: colors.textSecondary }}>{info.value}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* === CONTACT FORM === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className={`absolute inset-0 -z-10 ${colors.glow} rounded-3xl scale-95`} />

            <Card className={`border-2 overflow-hidden ${colors.cardBg} ${colors.cardBorder} shadow-2xl`}>
              <div className="h-2 w-full" style={{ backgroundColor: colors.accent }} />

              <CardHeader className="pt-8 px-8">
                <CardTitle className="text-3xl font-extrabold" style={{ color: colors.textMain }}>
                  {t.contact.form.title} <span style={{ color: colors.accent }}>{t.contact.form.titleHighlight}</span>
                </CardTitle>
                <p className="font-medium" style={{ color: colors.textSecondary }}>{t.contact.form.subtitle}</p>
              </CardHeader>
              
              <CardContent className="p-8">
                {state.succeeded ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`p-8 border-2 rounded-xl text-center ${colors.accentBg}`}
                    style={{ borderColor: colors.accent }}
                  >
                    <p className="text-xl font-bold" style={{ color: colors.textMain }}>{t.contact.form.success}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {['name', 'email'].map((field) => (
                        <div key={field} className="space-y-2">
                          <Label htmlFor={field} className={`font-bold uppercase text-xs tracking-widest ${colors.labelColor}`}>
                            {t.contact.form[field]}
                          </Label>
                          <Input
                            id={field}
                            type={field === 'email' ? 'email' : 'text'}
                            name={field}
                            placeholder={t.contact.form[`${field}Placeholder`]}
                            value={formData[field]}
                            onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                            required
                            className={`h-12 border-2 transition-all focus:ring-2 focus:ring-yellow-400/20 ${colors.inputBg} ${colors.inputBorder} ${colors.placeholder}`}
                            style={{ color: colors.inputText, borderColor: theme === 'dark' ? '#27272a' : '#e4e4e7' }}
                          />
                          {field === 'email' && <ValidationError prefix="Email" field="email" errors={state.errors} />}
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className={`font-bold uppercase text-xs tracking-widest ${colors.labelColor}`}>
                        {t.contact.form.subject}
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder={t.contact.form.subjectPlaceholder}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className={`h-12 border-2 transition-all focus:ring-2 focus:ring-yellow-400/20 ${colors.inputBg} ${colors.inputBorder} ${colors.placeholder}`}
                        style={{ color: colors.inputText, borderColor: theme === 'dark' ? '#27272a' : '#e4e4e7' }}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className={`font-bold uppercase text-xs tracking-widest ${colors.labelColor}`}>
                        {t.contact.form.message}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={t.contact.form.messagePlaceholder}
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className={`border-2 transition-all focus:ring-2 focus:ring-yellow-400/20 resize-none ${colors.inputBg} ${colors.inputBorder} ${colors.placeholder}`}
                        style={{ color: colors.inputText, borderColor: theme === 'dark' ? '#27272a' : '#e4e4e7' }}
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    <Button
                      type="submit"
                      disabled={state.submitting}
                      style={{ backgroundColor: colors.accent, color: '#000000' }}
                      className={`w-full font-black text-lg py-7 shadow-xl transition-all duration-300 hover:brightness-110 active:scale-[0.98] uppercase tracking-widest ${colors.shadow}`}
                    >
                      {state.submitting ? t.contact.form.submitting : t.contact.form.submit}
                      <Send className="ml-3 w-5 h-5" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}