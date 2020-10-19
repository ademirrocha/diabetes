from django.shortcuts import render
from django.http import HttpResponse

from .models import Greeting


#Importando as bibliotecas
import pandas as pd
import matplotlib.pyplot as plt

import numpy as np

#Importar o dataset csv
df = pd.read_csv("data/diabetes_data_upload.csv")

countPositive = len(df.loc[df['class'] == 'Positive'])
countNegative = len(df.loc[df['class'] == 'Negative'])
print('Positives: ', countPositive)
print('Negatives: ', countNegative)
plt.bar(['Negativos', 'Positivos'], [countNegative, countPositive], color=['blue', 'red'])
plt.xticks(['Negativos', 'Positivos'])
plt.ylabel('Quantidade')
plt.xlabel('Resultados')
plt.title('Resuldos de casos com diabetes')
plt.savefig("static/img/image1.jpg")


#Transformação de dados
#converter os valores do dataset de Yes e No para 1 e 0 respectivamente

diabetes_map = {'Yes': 1, 'No': 0}
df['Polyuria'] = df['Polyuria'].map(diabetes_map)
df['Polydipsia'] = df['Polydipsia'].map(diabetes_map)
df['sudden weight loss'] = df['sudden weight loss'].map(diabetes_map)
df['weakness'] = df['weakness'].map(diabetes_map)
df['Polyphagia'] = df['Polyphagia'].map(diabetes_map)
df['Genital thrush'] = df['Genital thrush'].map(diabetes_map)
df['visual blurring'] = df['visual blurring'].map(diabetes_map)
df['Irritability'] = df['Irritability'].map(diabetes_map)
df['Itching'] = df['Itching'].map(diabetes_map)
df['delayed healing'] = df['delayed healing'].map(diabetes_map)
df['partial paresis'] = df['partial paresis'].map(diabetes_map)
df['muscle stiffness'] = df['muscle stiffness'].map(diabetes_map)
df['Alopecia'] = df['Alopecia'].map(diabetes_map)
df['Obesity'] = df['Obesity'].map(diabetes_map)


#Transformar os valores da classe de Positivo e Negativo para 1 e 0

class_map = {'Positive': 1, 'Negative': 0}
df['class'] = df['class'].map(class_map)
df.head(5)

#Transformar tambem os valores do atributo gênero para 1 e 0
gender_map = {'Male': 1, 'Female': 0}
df['Gender'] = df['Gender'].map(gender_map)
df.head(5)


#Amostragem de correlação gráfica
#print('\n\nAmostragem de correlação gráfica')
#print('')

def plot_corr(df, size=18):

    corr = df.corr()    # data frame correlation function
    fig, ax = plt.subplots(figsize=(size, size))
    ax.matshow(corr)   # color code the rectangles by correlation value
    plt.xticks(range(len(corr.columns)), corr.columns)  # draw x tick marks
    plt.yticks(range(len(corr.columns)), corr.columns)  # draw y tick marks
    plt.savefig("static/img/image2.jpg")

plot_corr(df)





# Create your views here.
def index(request):
    # return HttpResponse('Hello from Python!')
    return render(request, "index.html")


def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, "db.html", {"greetings": greetings})
