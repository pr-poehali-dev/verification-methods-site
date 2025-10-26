import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const methods = [
    {
      id: 1,
      title: "1 СПОСОБ",
      date: "May 16, 2025",
      steps: [
        "Поставьте в своём профиле правильную дату рождения, ничего страшного если нету 18 лет",
        "Обновите страницу и пробуйте верифицироваться",
        "Перед началом верификации Faceit напишет что-то в духе *так как вам нету 18 лет, напишите почту родителей для подтверждения того что они разрешают вам верифицироваться*, вы просто пишите туда свою 2 почту (главное не ту на какую регали сам аккаунт Faceit)",
        "Дайте разрешение на верификацию в письме от Faceit",
        "И последнее что вы делаете это верифицируйтесь с вашим лицом и паспортом, если вы старше 13 лет то все получится"
      ]
    },
    {
      id: 2,
      title: "2 СПОСОБ",
      description: "Верификация через верифицированный аккаунт - Winline",
      note: "Просто привязкой к аккаунту Faceit как интеграция"
    },
    {
      id: 3,
      title: "3 СПОСОБ",
      description: "Через паспорт родителей проходя обычную верификацию"
    },
    {
      id: 4,
      title: "4 СПОСОБ",
      description: "Купить уже верифированный аккаунт или верификацию аккаунта 200-300₽"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container max-w-4xl mx-auto px-4 py-12 sm:py-20">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Icon name="Shield" className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Инструкции по верификации
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите подходящий способ верификации аккаунта
          </p>
        </div>

        <div className="space-y-6">
          {methods.map((method, index) => (
            <Card 
              key={method.id} 
              className="hover:shadow-xl transition-all duration-300 animate-fade-in border-l-4 border-l-primary"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-sm font-semibold">
                    Метод {method.id}
                  </Badge>
                  {method.date && (
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Icon name="Calendar" className="w-4 h-4" />
                      {method.date}
                    </span>
                  )}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {method.title}
                </CardTitle>
                {method.description && (
                  <CardDescription className="text-base mt-2">
                    {method.description}
                  </CardDescription>
                )}
              </CardHeader>

              <CardContent>
                {method.steps ? (
                  <ol className="space-y-4">
                    {method.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex gap-4 group">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm group-hover:scale-110 transition-transform">
                          {stepIndex + 1}
                        </div>
                        <p className="text-gray-700 leading-relaxed pt-1">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <div className="flex items-start gap-3 text-gray-700">
                    <Icon name="Info" className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="leading-relaxed">
                      {method.note || method.description}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl animate-fade-in">
          <div className="flex gap-4">
            <Icon name="AlertCircle" className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Важная информация</h3>
              <p className="text-blue-800 leading-relaxed">
                Выбирайте способ верификации в зависимости от вашей ситуации. 
                Первый способ подходит для большинства пользователей старше 13 лет.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
