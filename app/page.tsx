"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Scissors, Palette, Sparkles, MapPin, Phone, Clock, ChevronDown, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function VesnaBeauty() {
  const [isVisible, setIsVisible] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            <div
              className={`w-${2 + Math.floor(Math.random() * 3)} h-${2 + Math.floor(Math.random() * 3)} rounded-full blur-sm`}
              style={{
                background: ["#f4a6b8", "#7fb069", "#ffd89b", "#c9a0dc"][Math.floor(Math.random() * 4)],
                opacity: 0.3,
              }}
            />
          </div>
        ))}
      </div>

      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-green-50 to-purple-100 animate-gradient" />
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-50/50 via-transparent to-rose-100/50" />

        <div
          className={`relative z-10 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light text-foreground mb-6 tracking-tight">
            <span className="block text-balance bg-gradient-to-r from-primary via-accent to-purple-400 bg-clip-text text-transparent animate-shimmer">
              Весна
            </span>
            <span className="block text-balance bg-gradient-to-r from-accent via-primary to-yellow-400 bg-clip-text text-transparent animate-shimmer">
              Бьюти
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Современная парикмахерская в Минске. Мы создаём стильные стрижки, профессиональное окрашивание и укладку
            волос.
          </p>
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-lg hover:scale-105 transition-transform bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-lg"
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
          >
            Записаться онлайн
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-secondary/30 to-purple-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground text-balance">О нас</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Весна Бьюти — это место, где профессионализм встречается с творчеством. Наши мастера создают не просто
                причёски, а настоящие произведения искусства, подчёркивающие вашу индивидуальность.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Мы используем только качественные материалы и современные техники, чтобы каждый визит к нам был
                комфортным и результативным. Ваша красота — наша философия.
              </p>
              <div className="flex items-center gap-2 pt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-muted-foreground">5.0 на основе отзывов клиентов</span>
              </div>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/modern-elegant-hair-salon-interior-with-natural-li.jpg"
                alt="Интерьер салона"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-center mb-16 text-balance">Наши услуги</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Scissors,
                title: "Стрижка",
                description:
                  "Современные стрижки для любого стиля и типа волос. Наши мастера создадут идеальный образ специально для вас.",
                price: "15 BYN",
                gradient: "from-blue-400 to-cyan-300",
                bgGradient: "from-blue-50 to-cyan-50",
              },
              {
                icon: Palette,
                title: "Окрашивание волос",
                description:
                  "Профессиональное окрашивание с использованием премиальных красителей. От классики до смелых экспериментов.",
                price: "100 BYN",
                gradient: "from-purple-400 to-pink-400",
                bgGradient: "from-purple-50 to-pink-50",
              },
              {
                icon: Sparkles,
                title: "Укладка волос",
                description:
                  "Элегантные укладки для особых случаев и повседневной жизни. Ваши волосы будут выглядеть безупречно.",
                price: "10 BYN",
                gradient: "from-yellow-400 to-orange-400",
                bgGradient: "from-yellow-50 to-orange-50",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card overflow-hidden relative group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="relative z-10">
                  <div className={`mb-6 inline-block p-4 rounded-2xl bg-gradient-to-br ${service.gradient}`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  <div
                    className={`text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                  >
                    {service.price}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-br from-pink-50 via-purple-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-center mb-4 text-balance">Наши работы</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Посмотрите примеры наших работ и убедитесь в профессионализме наших мастеров
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                src: "/portfolio-1.jpg",
                title: "Стильная стрижка",
                category: "Стрижка",
              },
              {
                src: "/portfolio-2.jpg",
                title: "Окрашивание балаяж",
                category: "Окрашивание",
              },
              {
                src: "/portfolio-3.jpg",
                title: "Вечерняя укладка",
                category: "Укладка",
              },
              {
                src: "/portfolio-4.jpg",
                title: "Каре с удлинением",
                category: "Стрижка",
              },
              {
                src: "/portfolio-5.jpg",
                title: "Омбре окрашивание",
                category: "Окрашивание",
              },
              {
                src: "/portfolio-6.jpg",
                title: "Пляжные локоны",
                category: "Укладка",
              },
            ].map((work, index) => (
              <Card
                key={index}
                className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={work.src || "/placeholder.svg"}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium mb-1 text-accent">{work.category}</p>
                    <h3 className="text-xl font-light">{work.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-24 px-4 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-center mb-4 text-balance">Запись онлайн</h2>
          <p className="text-center text-muted-foreground mb-12">
            Заполните форму, и мы свяжемся с вами для подтверждения записи
          </p>

          {formSubmitted ? (
            <div className="text-center py-12 animate-in fade-in duration-500">
              <div className="inline-block p-6 rounded-full bg-gradient-to-br from-primary to-accent mb-6">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-light mb-2">Спасибо за заявку!</h3>
              <p className="text-muted-foreground">Мы свяжемся с вами в ближайшее время</p>
            </div>
          ) : (
            <Card className="p-8 border-border/50 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" required className="rounded-xl" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+375 29 123-45-67" required className="rounded-xl" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date">Дата</Label>
                    <Input id="date" type="date" required className="rounded-xl" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Время</Label>
                    <Input id="time" type="time" required className="rounded-xl" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Услуга</Label>
                  <Select required>
                    <SelectTrigger id="service" className="rounded-xl">
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="haircut">Стрижка (15 BYN)</SelectItem>
                      <SelectItem value="coloring">Окрашивание волос (100 BYN)</SelectItem>
                      <SelectItem value="styling">Укладка волос (10 BYN)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-xl py-6 text-lg bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-lg"
                  size="lg"
                >
                  Отправить заявку
                </Button>
              </form>
            </Card>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-center mb-16 text-balance">Контакты</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-primary to-accent shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-foreground">Адрес</h3>
                  <p className="text-muted-foreground leading-relaxed">г. Минск, ул. Ротмистрова 60</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-foreground">Телефон</h3>
                  <a href="tel:+375297774089" className="text-muted-foreground hover:text-primary transition-colors">
                    +375 29 777-40-89
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-400 shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-foreground">Время работы</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Пн–Пт: 9:00–21:00</p>
                    <p>Сб–Вс: 10:00–20:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-96 rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.8!2d27.5!3d53.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDU0JzAwLjAiTiAyN8KwMzAnMDAuMCJF!5e0!3m2!1sru!2sby!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта расположения салона"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-gradient-to-r from-primary/10 via-accent/10 to-purple-100/30 text-center">
        <p className="text-muted-foreground">© 2025 Весна Бьюти. Все права защищены.</p>
      </footer>
    </div>
  )
}
