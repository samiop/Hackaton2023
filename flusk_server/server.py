
from flask import Flask
import pandas as pd 
import numpy as np
import re 
from nltk.tokenize import sent_tokenize
from nltk.tokenize import word_tokenize
import string
import matplotlib.pyplot as plt
from nltk.stem import SnowballStemmer
from nltk.corpus import stopwords
import nltk
from nltk.stem.porter import *
#nltk.download('wordnet')
#nltk.download('omw-1.4')
#pip install git+https://github.com/ClaudeCoulombe/FrenchLefffLemmatizer.git
from wordcloud import WordCloud 
import demoji
import langid
import datetime
from datetime import datetime
from matplotlib.dates import drange 
from unidecode import unidecode
import gensim
import gensim.downloader as api
from gensim.models import keyedvectors
from gensim.models import Word2Vec
from gensim.utils import simple_preprocess
from gensim.parsing.preprocessing import STOPWORDS
from gensim.models import CoherenceModel
from gensim import models
import os
from nltk.stem import WordNetLemmatizer
from french_lefff_lemmatizer.french_lefff_lemmatizer import FrenchLefffLemmatizer    #Bibliothéque FR pour la lemmatisation 
from sklearn.manifold import TSNE
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfVectorizer 
from sklearn.decomposition import PCA
from sklearn.decomposition import LatentDirichletAllocation
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
get_ipython().run_line_magic('matplotlib', 'inline')
pd.options.mode.chained_assignment = None
pd.set_option('display.max_colwidth', None)
import tweepy
import pyLDAvis.gensim_models


# ## Twitter Auth
app = Flask(__name__)
# In[4]:
@app.route("/members")
def members():

    get_ipython().run_line_magic('run', './Keys.ipynb')


# In[5]:


auth= tweepy.OAuth1UserHandler(consumer_key,consumer_secret)
auth.set_access_token(access_token,access_token_secret)
api = tweepy.API(auth, wait_on_rate_limit=True)


# ## Scrap

# In[6]:


number_of_tweets = 1100
tweets = []
dates = []
usernames = []
hashtags = []

screen_name = "@Skipper_btc"  


for i in tweepy.Cursor(api.user_timeline, screen_name=screen_name, tweet_mode='extended').items(number_of_tweets):
    tweets.append(i.full_text)
    dates.append(i.created_at)
    usernames.append(i.user.screen_name)
    hashtags.append([hashtag['text'] for hashtag in i.entities['hashtags']])

df = pd.DataFrame({'Date': dates, 'Username': usernames, 'tweets': tweets, 'Hashtags': hashtags})

df.head(10)


# In[7]:


df=df.dropna(subset=['tweets']) # Supprimer les tweets vides 
df['id']= range(1,len(df) +1)  #Ajouter un index 
df.set_index("id", inplace=True) 
df


# In[8]:


def clean(text):
    
    text=re.sub(r'@[A-Za-z0-9]+','', text)  #Enlever les @
    text=re.sub(r'https?:\/\/\S+', '',text)  #Enlever les https
    text=re.sub(r'\n', ' ', text)  #Enlever les \n
    text=re.sub(r'\d+', " ", text)  #Enlever les numéros
    text=re.sub(r'https?:\/\/.*[\r\n]*', '', text, flags=re.MULTILINE)  #Enlever les sites
     
    return text

df['tweets']=df['tweets'].apply(clean)

df['tweets'] = [unidecode(doc) for doc in df['tweets']] # enlever les accents 

#df['tweets']= df['tweets'].apply(lambda x: demoji.replace(x,''))  #Enlever Emoji   

df['tweets']=df['tweets'].apply(lambda x: x.lower())  #Mettre en minuscule


def Hashtag(text):
    text=re.findall(r'\#\w+', text)    #Trouver touts les #Hashtag
    return text
df['Hashtag']=df['tweets'].apply(Hashtag)  

def kleenex(text):
    text=re.sub(r'\#',' ', text)      #Retirer le signe #
    return text 
df['tweets']=df['tweets'].apply(kleenex)


def clean2(text):
    text=re.sub(r'[^\w\s]+',' ',text)   #Fonction enlever ponctuation
    return text
df['tweets']=df['tweets'].apply(clean2)

corpus2= df['tweets'].tolist()

df.head(10)


# In[9]:


df['Date'] = pd.to_datetime(df['Date']).dt.date
plt.figure()
ax = plt.gca()
df['Date'].value_counts().sort_index().plot(x='Date',kind='bar',figsize=(40,10),title='Nombre de tweets par date')
for label in ax.get_xaxis().get_ticklabels()[::1000]:
    label.set_visible(False)
plt.show


# In[10]:


df['Hashtag']=[','.join(i) if isinstance(i,list) else i for i in df['Hashtag']]
allWords=''.join([twts for twts in df['Hashtag']])
wordCloud = WordCloud(width=500, height=300, random_state=21, max_font_size = 199,collocations=False).generate(allWords)

plt.imshow(wordCloud, interpolation = 'bilinear')
plt.axis('off')
plt.show()


# In[11]:



# Extraction des fréquences des mots
word_freq = wordCloud.words_

# Création du DataFrame à partir des fréquences des mots
words_df = pd.DataFrame(list(word_freq.items()), columns=['Word', 'Frequency'])

# Tri du DataFrame par fréquence
words_df = words_df.sort_values(by='Frequency', ascending=False)

words_df= words_df.drop(columns='Frequency')

# Vérification du DataFrame
words_df


# In[12]:


# Ajouter la nouvelle colonne
words_df['user'] =screen_name

# Vérifier le DataFrame
print(words_df)


# In[13]:


# Conversion du DataFrame en JSON
json_data = words_df.to_json(orient='records')


# Affichage du JSON
print(json_data)


# In[ ]:




