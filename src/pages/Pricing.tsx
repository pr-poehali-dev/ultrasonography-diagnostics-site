import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Pricing() {
  const services = [
    {
      category: "Функциональная диагностика",
      items: [
        {
          name: "Холтер мониторинг ЭКГ (24 часа)",
          price: "3 500",
          duration: "1 день",
          description: "Непрерывная запись ЭКГ в течение суток",
        },
        {
          name: "Холтер мониторинг ЭКГ (48 часов)",
          price: "5 200",
          duration: "2 дня",
          description: "Расширенное мониторирование для сложных случаев",
        },
        {
          name: "Суточное мониторирование АД",
          price: "2 800",
          duration: "1 день",
          description: "Контроль артериального давления в течение суток",
        },
        {
          name: "Спирометрия",
          price: "1 800",
          duration: "30 мин",
          description: "Исследование функции внешнего дыхания",
        },
        {
          name: "Велоэргометрия",
          price: "4 200",
          duration: "45 мин",
          description: "Нагрузочный тест с ЭКГ контролем",
        },
      ],
    },
    {
      category: "Электрокардиография",
      items: [
        {
          name: "ЭКГ в покое",
          price: "800",
          duration: "15 мин",
          description: "Стандартная электрокардиограмма в 12 отведениях",
        },
        {
          name: "ЭКГ с нагрузкой",
          price: "1 500",
          duration: "30 мин",
          description: "ЭКГ с физической нагрузкой",
        },
        {
          name: "ЭКГ с лекарственными пробами",
          price: "2 200",
          duration: "45 мин",
          description:
            "Специализированное исследование с медикаментозной нагрузкой",
        },
        {
          name: "Расшифровка ЭКГ",
          price: "500",
          duration: "10 мин",
          description: "Консультация кардиолога по результатам ЭКГ",
        },
      ],
    },
    {
      category: "Ультразвуковая диагностика",
      items: [
        {
          name: "УЗИ сердца (ЭхоКГ)",
          price: "2 500",
          duration: "30 мин",
          description: "Комплексное исследование сердца и сосудов",
        },
        {
          name: "УЗИ органов брюшной полости",
          price: "2 200",
          duration: "25 мин",
          description:
            "Печень, желчный пузырь, поджелудочная железа, селезенка",
        },
        {
          name: "УЗИ почек и мочевого пузыря",
          price: "1 800",
          duration: "20 мин",
          description: "Исследование мочевыделительной системы",
        },
        {
          name: "УЗИ щитовидной железы",
          price: "1 600",
          duration: "20 мин",
          description: "Детальное исследование щитовидной железы",
        },
        {
          name: "УЗИ молочных желез",
          price: "1 900",
          duration: "25 мин",
          description: "Профилактическое исследование молочных желез",
        },
        {
          name: "УЗИ сосудов шеи",
          price: "2 800",
          duration: "35 мин",
          description: "Дуплексное сканирование брахиоцефальных сосудов",
        },
      ],
    },
    {
      category: "Комплексные программы",
      items: [
        {
          name: "Кардиологическое обследование",
          price: "8 500",
          duration: "2 часа",
          description: "ЭКГ, ЭхоКГ, Холтер мониторинг, консультация кардиолога",
          popular: true,
        },
        {
          name: "Базовый чек-ап",
          price: "12 000",
          duration: "3 часа",
          description: "Комплексное обследование основных систем организма",
          popular: true,
        },
        {
          name: "Женское здоровье",
          price: "9 200",
          duration: "2.5 часа",
          description: "УЗИ органов малого таза, молочных желез, анализы",
        },
        {
          name: "Мужское здоровье",
          price: "8 800",
          duration: "2 часа",
          description:
            "УЗИ предстательной железы, кардиологическое обследование",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Activity" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">
                  МедДиагностик
                </h1>
                <p className="text-sm text-slate-600">
                  Современная диагностика
                </p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="/"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Главная
              </a>
              <a href="/pricing" className="text-blue-600 font-medium">
                Прейскурант
              </a>
              <a
                href="/contacts"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Прейскурант услуг
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Доступные цены на качественную медицинскую диагностику
          </p>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
              >
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-800 flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                      <Icon
                        name="Stethoscope"
                        className="text-white"
                        size={20}
                      />
                    </div>
                    {category.category}
                  </h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-4 px-6 font-semibold text-slate-700">
                          Услуга
                        </th>
                        <th className="text-center py-4 px-6 font-semibold text-slate-700">
                          Время
                        </th>
                        <th className="text-right py-4 px-6 font-semibold text-slate-700">
                          Цена
                        </th>
                        <th className="text-center py-4 px-6 font-semibold text-slate-700">
                          Действие
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.items.map((item, itemIndex) => (
                        <tr
                          key={itemIndex}
                          className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                        >
                          <td className="py-4 px-6">
                            <div className="flex items-start space-x-3">
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <h4 className="font-medium text-slate-800">
                                    {item.name}
                                  </h4>
                                  {item.popular && (
                                    <Badge
                                      variant="secondary"
                                      className="bg-blue-100 text-blue-700"
                                    >
                                      Популярно
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-sm text-slate-600 mt-1">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center">
                            <span className="text-sm text-slate-600">
                              {item.duration}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <div className="text-lg font-bold text-slate-800">
                              {item.price} ₽
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center">
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-blue-600 border-blue-600 hover:bg-blue-50"
                            >
                              Записаться
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="Shield" className="text-green-600" size={24} />
                </div>
                <CardTitle className="text-lg">Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Все исследования проводятся на современном оборудовании
                  квалифицированными специалистами
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name="Clock" className="text-blue-600" size={24} />
                </div>
                <CardTitle className="text-lg">Быстрые результаты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Получите результаты исследований в кратчайшие сроки с
                  подробной расшифровкой
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Icon
                    name="CreditCard"
                    className="text-purple-600"
                    size={24}
                  />
                </div>
                <CardTitle className="text-lg">Удобная оплата</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Принимаем наличные, банковские карты и работаем со страховыми
                  компаниями
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">МедДиагностик</h3>
              <p className="text-slate-400">
                Современная медицинская диагностика с заботой о вашем здоровье
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <p className="text-slate-400 mb-2">📍 ул. Медицинская, 15</p>
              <p className="text-slate-400 mb-2">📞 +7 (495) 123-45-67</p>
              <p className="text-slate-400">📧 info@meddiagnostic.ru</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <p className="text-slate-400 mb-2">Пн-Пт: 8:00 - 20:00</p>
              <p className="text-slate-400 mb-2">Сб: 9:00 - 18:00</p>
              <p className="text-slate-400">Вс: выходной</p>
            </div>
          </div>
          <Separator className="my-6 bg-slate-700" />
          <div className="text-center text-slate-400">
            <p>&copy; 2024 МедДиагностик. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
