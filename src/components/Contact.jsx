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

export default function Contact() {
  const { t } = useLanguage();
  const [state, handleSubmit] = useForm("movklago"); // 👈 substitua pelo seu ID do Formspree
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    { icon: Phone, title: t.contact.info.phone, value: '(15) 98100-9064' },
    { icon: Mail, title: t.contact.info.email, value: 'engenharia@dibitech.com.br' },
    { icon: MapPin, title: t.contact.info.location, value: 'Apiaí - SP, Brasil' }
  ];

  return (
    <section id="contato" className="py-24 bg-black relative overflow-hidden">
      {/* Circuit pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FFC700_1px,transparent_1px),linear-gradient(to_bottom,#FFC700_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="px-6 py-2 bg-yellow-400/20 border-2 border-yellow-400 rounded-full">
              <span className="text-yellow-400 font-bold text-sm tracking-wider">{t.contact.badge}</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">{t.contact.title} </span>
            <span className="text-yellow-400">{t.contact.titleHighlight}</span>
          </h2>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        {/* Cards de contato */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-zinc-900 border-2 border-zinc-800 hover:border-yellow-400 transition-all duration-300 h-full group">
                <CardContent className="p-6 text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/30 relative z-10">
                      <info.icon className="w-8 h-8 text-black" />
                    </div>
                    <div className="absolute inset-0 bg-yellow-400 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                  <p className="text-gray-300">{info.value}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Formulário */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-zinc-900 border-2 border-zinc-800">
            <div className="h-2 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400" />
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white">
                {t.contact.form.title} <span className="text-yellow-400">{t.contact.form.titleHighlight}</span>
              </CardTitle>
              <p className="text-gray-300">{t.contact.form.subtitle}</p>
            </CardHeader>
            <CardContent>
              {state.succeeded ? (
                <div className="p-4 bg-yellow-400/20 border-2 border-yellow-400 rounded-lg text-center">
                  <p className="text-yellow-400 font-medium">{t.contact.form.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">{t.contact.form.name}</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder={t.contact.form.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-black border-2 border-zinc-700 text-white placeholder:text-gray-500 focus:border-yellow-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">{t.contact.form.email}</Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder={t.contact.form.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-black border-2 border-zinc-700 text-white placeholder:text-gray-500 focus:border-yellow-400"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">{t.contact.form.subject}</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder={t.contact.form.subjectPlaceholder}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="bg-black border-2 border-zinc-700 text-white placeholder:text-gray-500 focus:border-yellow-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">{t.contact.form.message}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t.contact.form.messagePlaceholder}
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-black border-2 border-zinc-700 text-white placeholder:text-gray-500 focus:border-yellow-400"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  {state.errors?.length > 0 && (
                    <div className="p-4 bg-red-500/20 border-2 border-red-500 rounded-lg">
                      <p className="text-red-400 font-medium">{t.contact.form.error}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg py-6 shadow-lg shadow-yellow-500/30"
                  >
                    {state.submitting ? t.contact.form.submitting : t.contact.form.submit}
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
