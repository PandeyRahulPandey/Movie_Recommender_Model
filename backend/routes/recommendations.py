from fastapi import  APIRouter
from routes.recommendation_system import similar_movies
route = APIRouter(prefix='/recommend')

#defining my route.
@route.get(path='/movies',status_code=200)
def  function(input:str):
    print('the movie you are searching is: ',input)
    suggestion_array=similar_movies(input)             # function calling

    # return list to the user
    return suggestion_array
