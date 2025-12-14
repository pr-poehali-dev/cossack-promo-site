import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const sections = [
  {
    id: 1,
    title: 'Чем мы занимаемся',
    icon: 'Target',
    content: 'Казачий стан — это место, где традиции встречаются с современностью. Мы обучаем боевым искусствам, верховой езде, стрельбе и тактической подготовке. Наши программы разработаны для всей семьи — от детей до взрослых.',
    features: ['Боевые искусства', 'Верховая езда', 'Стрельба из лука и арбалета', 'Историческое фехтование']
  },
  {
    id: 2,
    title: 'Фотогалерея',
    icon: 'Camera',
    content: 'Моменты, которые остаются с нами навсегда. Смотрите, как проходят наши занятия, тренировки и семейные мероприятия.',
    features: ['Тренировочные лагеря', 'Семейные выходные', 'Соревнования', 'Походы и выезды']
  },
  {
    id: 3,
    title: 'Наши услуги',
    icon: 'Briefcase',
    content: 'Мы предлагаем широкий спектр услуг для укрепления духа и тела. Индивидуальные и групповые занятия, семейные программы и корпоративные мероприятия.',
    features: ['Индивидуальные тренировки', 'Групповые занятия', 'Семейные программы', 'Корпоративный тимбилдинг']
  },
  {
    id: 4,
    title: 'Тактическая подготовка',
    icon: 'Shield',
    content: 'Профессиональная тактическая подготовка от опытных инструкторов. Изучение основ выживания, ориентирования на местности и тактики действий в команде.',
    features: ['Основы выживания', 'Ориентирование', 'Командная работа', 'Полевая медицина']
  },
  {
    id: 5,
    title: 'Военно-полевые выходы',
    icon: 'Tent',
    content: 'Регулярные выезды на природу с полным погружением в атмосферу казачьего быта. Палаточные лагеря, полевая кухня, вечера у костра.',
    features: ['Палаточный лагерь', 'Полевая кухня', 'Ночные дежурства', 'Марш-броски']
  },
  {
    id: 6,
    title: 'Программа 10 дней',
    icon: 'Calendar',
    content: 'Интенсивная программа полного погружения. 10 дней в полевых условиях с изучением всех аспектов казачьей жизни и боевой подготовки.',
    features: ['Полное погружение', 'Ежедневные тренировки', 'Теория и практика', 'Испытание характера']
  },
  {
    id: 7,
    title: 'Семейный отдых',
    icon: 'Users',
    content: 'Программы для всей семьи с учетом разных возрастных групп. Детские мастер-классы, семейные квесты, совместные тренировки и незабываемые выходные на природе.',
    features: ['Детские программы (5-12 лет)', 'Подростковые группы (13-17 лет)', 'Семейные активности', 'Выездные мероприятия']
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState(1);
  const currentSection = sections.find(s => s.id === activeSection) || sections[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 font-open-sans">
      <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-montserrat font-bold flex items-center gap-3">
              <Icon name="Shield" size={32} />
              Казачий Стан
            </h1>
            <Button variant="secondary" size="lg" className="font-semibold">
              Связаться с нами
            </Button>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-montserrat font-extrabold mb-6 animate-fade-in">
            Традиции казачества для всей семьи
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90 animate-fade-in">
            Программы военно-полевой подготовки, семейного отдыха и духовного развития. 
            Присоединяйтесь к нашему сообществу и откройте для себя богатство казачьих традиций.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
              <Icon name="Phone" size={20} className="mr-2" />
              Записаться
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              <Icon name="MapPin" size={20} className="mr-2" />
              Где мы находимся
            </Button>
          </div>
        </div>
      </section>

      <nav className="bg-white shadow-md sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
            {sections.map(section => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? 'default' : 'ghost'}
                onClick={() => setActiveSection(section.id)}
                className="whitespace-nowrap flex items-center gap-2 transition-all"
              >
                <Icon name={section.icon} size={18} />
                <span className="font-semibold">{section.title}</span>
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <Card className="overflow-hidden shadow-2xl animate-slide-in">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-orange-400 to-orange-600 p-8 md:p-12 text-white flex items-center justify-center">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-6 inline-block">
                  <Icon name={currentSection.icon} size={80} className="mx-auto" />
                </div>
                <h3 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
                  {currentSection.title}
                </h3>
                <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8 md:p-12 bg-white">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {currentSection.content}
              </p>
              
              <div className="space-y-4">
                <h4 className="text-xl font-montserrat font-bold text-primary flex items-center gap-2">
                  <Icon name="CheckCircle" size={24} />
                  Что входит:
                </h4>
                <ul className="space-y-3">
                  {currentSection.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-foreground">
                      <div className="bg-secondary/20 rounded-full p-1 mt-1">
                        <Icon name="Check" size={16} className="text-secondary" />
                      </div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 flex gap-4">
                <Button size="lg" className="flex-1">
                  <Icon name="UserPlus" size={20} className="mr-2" />
                  Записаться
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Задать вопрос
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6 text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" size={32} />
            </div>
            <h4 className="font-montserrat font-bold text-xl mb-2">Опытные инструкторы</h4>
            <p className="text-muted-foreground">Профессионалы с многолетним стажем</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-orange-50 to-orange-100">
            <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Heart" size={32} />
            </div>
            <h4 className="font-montserrat font-bold text-xl mb-2">Для всей семьи</h4>
            <p className="text-muted-foreground">Программы для всех возрастов</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Mountain" size={32} />
            </div>
            <h4 className="font-montserrat font-bold text-xl mb-2">Природа</h4>
            <p className="text-muted-foreground">Живописные места для выездов</p>
          </Card>
        </div>
      </main>

      <footer className="bg-primary text-primary-foreground mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-montserrat font-bold text-xl mb-4 flex items-center gap-2">
                <Icon name="Shield" size={24} />
                Казачий Стан
              </h3>
              <p className="opacity-90">
                Традиции казачества, передающиеся из поколения в поколение
              </p>
            </div>
            
            <div>
              <h4 className="font-montserrat font-bold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 opacity-90">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (XXX) XXX-XX-XX
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@cossack-camp.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  Москва, Россия
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-montserrat font-bold text-lg mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center opacity-75">
            <p>&copy; 2024 Казачий Стан. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
