import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-slate-800">
                Медицинская Диагностика
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Button
                variant="ghost"
                className="text-slate-600 hover:text-primary"
              >
                Главная
              </Button>
              <Button
                variant="ghost"
                className="text-slate-600 hover:text-primary"
              >
                Виды исследований
              </Button>
              <Button
                variant="ghost"
                className="text-slate-600 hover:text-primary"
              >
                Прейскурант
              </Button>
              <Button
                variant="ghost"
                className="text-slate-600 hover:text-primary"
              >
                Контакты
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-slate-800 mb-6">
            Кабинет Ультразвуковой и<br />
            Функциональной Диагностики
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Современное медицинское оборудование и высококвалифицированные
            специалисты для точной диагностики вашего здоровья
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Записаться на прием
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Виды исследований
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mb-4">
                  <img
                    src="/img/50f5de9c-3505-47da-bdae-7b5a1b3d2b49.jpg"
                    alt="Холтер монитор Schiller"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-xl mb-2">
                  Функциональная диагностика
                </CardTitle>
                <CardDescription>
                  Комплексная оценка работы органов и систем организма
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-slate-600 mb-2">
                    Используемое оборудование:
                  </p>
                  <p className="font-semibold text-slate-800">
                    Холтер монитор Schiller
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mb-4">
                  <img
                    src="/img/fde11d04-9d7c-4228-b0df-9b0a611b5aeb.jpg"
                    alt="Электрокардиограф 3-канальный Fukuda Denshi"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-xl mb-2">ЭКГ</CardTitle>
                <CardDescription>
                  Электрокардиография для диагностики сердечных заболеваний
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-slate-600 mb-2">
                    Используемое оборудование:
                  </p>
                  <p className="font-semibold text-slate-800">
                    Электрокардиограф 3-канальный Fukuda Denshi
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mb-4">
                  <img
                    src="/img/db698b3c-c8f1-4e51-858f-8fd8eb939a77.jpg"
                    alt="Ультразвуковая система Affinity 70"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-xl mb-2">
                  Ультразвуковая диагностика
                </CardTitle>
                <CardDescription>
                  Современная УЗИ диагностика органов и тканей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-slate-600 mb-2">
                    Используемое оборудование:
                  </p>
                  <p className="font-semibold text-slate-800">
                    Ультразвуковая система Affinity 70
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Свяжитесь с нами
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="MapPin"
                      className="mr-2 text-primary"
                      size={20}
                    />
                    Адрес
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    г. Москва, ул. Медицинская, д. 15
                    <br />
                    Поликлиника №1, кабинет 205
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="Phone"
                      className="mr-2 text-primary"
                      size={20}
                    />
                    Контакты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Телефон: +7 (495) 123-45-67
                    <br />
                    Email: info@meddiagnostic.ru
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на прием
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Heart" className="text-primary" size={24} />
              <span className="text-lg font-semibold">
                Медицинская Диагностика
              </span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-400">
                © 2024 Кабинет УЗИ и функциональной диагностики
              </p>
              <p className="text-slate-400">Все права защищены</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
