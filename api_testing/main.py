from dotenv import load_dotenv
import os
import requests
import json

load_dotenv()

news_api_key = os.getenv('NEWS_API_KEY')


# get news on layoffs in tech industry
def get_news():
    url = f'https://newsapi.org/v2/everything?q=layoffs+tech&apiKey={news_api_key}'
    response = requests.get(url)
    data = response.json()
    articles = data['articles']
    for article in articles:
        print(article['title'])
        print(article['url'])
        print(article['description'])
        print(article['urlToImage'])
        print('---')

    with open('news.json', 'w') as f:
        json.dump(articles, f, indent=4, ensure_ascii=False)
        

    
x = get_news()

print(x)


