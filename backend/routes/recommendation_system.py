# recommendation_system.py

import pandas as pd
import difflib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def load_data(file_path):
    return pd.read_csv(file_path)

def preprocess_data(data):     #data is panda data frame.
    selected_features = ['genres', 'keywords', 'tagline', 'cast', 'director']

    for feature in selected_features:
        data[feature] = data[feature].fillna('')

    combined_features = data['genres'] + ' ' + data['keywords'] + ' ' + data['tagline'] + ' ' + data['cast'] + ' ' + data['director']     #index corr. to features
    return combined_features

def get_similarity_matrix(combined_features):
    vectorizer = TfidfVectorizer()
    feature_vectors = vectorizer.fit_transform(combined_features)
    similarity = cosine_similarity(feature_vectors)
    return similarity

def get_close_matches(movie_name, list_of_all_titles):
    return difflib.get_close_matches(movie_name, list_of_all_titles)   #return a list of movie names

def recommend_movies(movie_name, movies_data, similarity):
    list_of_all_titles = movies_data['title'].tolist()
    find_close_match = get_close_matches(movie_name, list_of_all_titles)   #function calling

    if not find_close_match:
        print('No close matches found. Please try another movie name.')
        return

    close_match = find_close_match[0]
    index_of_the_movie = movies_data[movies_data.title == close_match]['index'].values[0]
    similarity_score = list(enumerate(similarity[index_of_the_movie]))
    sorted_similar_movies = sorted(similarity_score, key=lambda x: x[1], reverse=True)

    print('Movies suggested for you: \n')
#Displays the titles of the top 30 movies suggested for the user, based on similarity scores.
    movies_array=[]
    i = 1
    for movie in sorted_similar_movies:
        index = movie[0]
        title_from_index = movies_data[movies_data.index == index]['title'].values[0]
        if i < 30:
            movies_array.append(title_from_index)
            # print(i, '.', title_from_index)
            i += 1

    print("movies array :",movies_array)
    return movies_array

def similar_movies(name:str):
    # Load data
    movies_data = load_data("C:\\Users\\Kaushal Pandey\\Desktop\\Movie Recommender\\movies-recommendation-app\\backend\\movies.csv")
    print('we are in similar moves ',name)
    # Preprocess data
    combined_features = preprocess_data(movies_data)

    # Get similarity matrix
    similarity_matrix = get_similarity_matrix(combined_features)

    # Get movie name from the user
    movie_name = name
    # Recommend movies
    result_array=recommend_movies(movie_name, movies_data, similarity_matrix)
    return result_array
