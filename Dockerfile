FROM python:3.10-alpine

COPY requirements.txt /temp/requirements.txt
COPY . /IMO
WORKDIR /IMO
ENV PYTHONTWRITEBYTECODE=1\
    PYTHONUNBUFFERED=1
EXPOSE 8000
RUN apk update && apk add --no-cache gcc postgresql-client build-base postgresql-dev freetype-dev
RUN pip install -r /temp/requirements.txt

RUN adduser --disabled-password service-user

USER root