Все файлы из это директории будут отображены на главной как превью новостей.
Каждый файл может иметь тип JSON или YAML.
Название файла не важно, главное чтобы было понятно самому контент-менеджеру.

Файл должен иметь следующие поля:
- title: Название новости
- description: Описание новости
- createdAt: Дата в формате YYYY-MM-DD, можно не указывать, тогда будет использована дата создания файла в системе
- category: Категория новости - влияет на иконку
- url: Ссылка на новость

Доступные категории новости:
- analysis
- announce
- app
- exchange
- presentation
- report
- video

Пример .yaml файла

title: Minter Blockchain Token BIP on CoinMarketCap
description: Today, CoinMarketCap — the world’s leading crypto market data provider — has started displaying full information about the Minter network and its native digital coin BIP.
createdAt: 2020-07-14
url: https://medium.com/@MinterTeam/minter-blockchain-cryptocurrency-bip-on-coinmarketcap-c28123d51a46


