from django.http import HttpResponse
from django.shortcuts import render
from itsdangerous import serializer
from rest_framework import generics
from .serializers import RoomSerializer
from .models import Room

# RoomView is the top level View that queries all rooms in DB and pass through RoomSerializer which converts it into JSON and then pass it on to front end


class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
