FROM python:3.10-slim-buster

COPY requirements.txt /temp/requirements.txt
COPY . /IMO
WORKDIR /IMO
EXPOSE 8000

RUN pip install -r /temp/requirements.txt

RUN adduser --disabled-password service-user

USER service-user