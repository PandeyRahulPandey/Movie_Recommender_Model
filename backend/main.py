# this code sets up a FastAPI application, includes a test route, includes a router for recommendations
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.recommendations import route as route1



app=FastAPI()



#add
#This list specifies the domains that are permitted to make cross-origin requests to our FastAPI backend.

origins =[        # frontend is hosted on these origins.
    "http://localhost",
    "http://localhost:3000",
    "*"
]

@app.get('/')       #defining a simple test route.
def test():
    return 'route is working fine'
app.include_router(route1,tags=['recommend'])   #This means that the routes defined in route1 will be part of the main application.Router manages all the routes
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,       #(cookies, HTTP authentication)
    allow_methods=["*"],          #allowing all HTTP methods ("*")
    allow_headers=["*"]

)