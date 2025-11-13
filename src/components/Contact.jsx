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
      textMain: 'text-gray-900',
      textSecondary: 'text-gray-600',
      cardBg: 'bg-white',
      cardBorder: 'border-gray-200',
      accent: '#FACC15',
      accentText: 'text-yellow-600',
      accentBg: 'bg-yellow-500/10',
      inputBg: 'bg-white',
      inputBorder: 'border-gray-300',
      inputText: 'text-gray-900',
      placeholder: 'placeholder:text-gray-400',
      glow: 'bg-yellow-400/20 blur-3xl',
      shadow: 'shadow-yellow-400/30'
    },
    dark: {
      bgSection: 'bg-black',
      textMain: 'text-white',
      textSecondary: 'text-gray-300',
      cardBg: 'bg-zinc-900',
      cardBorder: 'border-zinc-800',
      accent: '#FACC15',
      accentText: 'text-yellow-400',
      accentBg: 'bg-yellow-400/20',
      inputBg: 'bg-black',
      inputBorder: 'border-zinc-700',
      inputText: 'text-white',
      placeholder: 'placeholder:text-gray-500',
      glow: 'bg-yellow-400/20 blur-3xl',
      shadow: 'shadow-yellow-500/30'
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
            <div className={`px-6 py-2 border-2 rounded-full ${colors.accentBg} border-yellow-400`}>
              <span className={`font-bold text-sm tracking-wider ${colors.accentText}`}>
                {t.contact.badge}
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className={colors.textMain}>{t.contact.title} </span>
            <span className={colors.accentText}>{t.contact.titleHighlight}</span>
          </h2>
          <div className={`h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-6`} />
          <p className={`text-xl max-w-3xl mx-auto ${colors.textSecondary}`}>
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
            >
              <Card className={`border-2 h-full group transition-all duration-300 ${colors.cardBg} ${colors.cardBorder}`}>
                <CardContent className="p-6 text-center relative">
                  {/* Glow atrás do ícone */}
                  <div className={`absolute inset-0 -z-10 ${colors.glow} rounded-3xl scale-95`} />

                  <div className="relative inline-block mb-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-lg relative z-10 ${colors.accentBg} ${colors.inputText} ${colors.shadow}`}>
                      <info.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${colors.textMain}`}>{info.title}</h3>
                  <p className={colors.textSecondary}>{info.value}</p>
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
            {/* Glow atrás do card */}
            <div className={`absolute inset-0 -z-10 ${colors.glow} rounded-3xl scale-95`} />

            <Card className={`border-2 ${colors.cardBg} ${colors.cardBorder}`}>
              {/* Barra superior do Card */}
              <div className="h-2" style={{ background: `linear-gradient(to right, ${colors.accent}, ${colors.accent}99, ${colors.accent})` }} />

              <CardHeader>
                <CardTitle className={`text-3xl font-bold ${colors.textMain}`}>
                  {t.contact.form.title} <span className={colors.accentText}>{t.contact.form.titleHighlight}</span>
                </CardTitle>
                <p className={colors.textSecondary}>{t.contact.form.subtitle}</p>
              </CardHeader>
              <CardContent>
                {state.succeeded ? (
                  <div className={`p-4 border-2 rounded-lg text-center ${colors.accentBg} ${colors.accentText}`}>
                    <p className="font-medium">{t.contact.form.success}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {['name', 'email'].map((field, idx) => (
                        <div key={idx} className="space-y-2">
                          <Label htmlFor={field}>{t.contact.form[field]}</Label>
                          <Input
                            id={field}
                            type={field === 'email' ? 'email' : 'text'}
                            name={field}
                            placeholder={t.contact.form[`${field}Placeholder`]}
                            value={formData[field]}
                            onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                            required
                            className={`border-2 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 ${colors.inputBg} ${colors.inputBorder} ${colors.inputText} ${colors.placeholder}`}
                          />
                          {field === 'email' && <ValidationError prefix="Email" field="email" errors={state.errors} />}
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">{t.contact.form.subject}</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder={t.contact.form.subjectPlaceholder}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className={`border-2 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 ${colors.inputBg} ${colors.inputBorder} ${colors.inputText} ${colors.placeholder}`}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t.contact.form.message}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={t.contact.form.messagePlaceholder}
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className={`border-2 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 ${colors.inputBg} ${colors.inputBorder} ${colors.inputText} ${colors.placeholder}`}
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    <Button
                      type="submit"
                      disabled={state.submitting}
                      className={`w-full font-bold text-lg py-6 shadow-lg transition-all duration-300 hover:bg-yellow-400/90 active:scale-95 ${colors.accentBg} ${colors.inputText} ${colors.shadow}`}
                    >
                      {state.submitting ? t.contact.form.submitting : t.contact.form.submit}
                      <Send className="ml-2 w-5 h-5" />
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
