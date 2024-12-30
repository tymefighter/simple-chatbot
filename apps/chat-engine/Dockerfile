FROM python:3.11-rc-slim

COPY . .

RUN apt-get update

RUN apt-get install -y --no-install-recommends gcc g++

RUN pip3 install --upgrade pip

RUN pip3 install -r requirements.txt

RUN python3 cache_model.py

CMD ["python3", "chat_engine_service.py"]
