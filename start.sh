# Build Images
docker build apps/chat-engine -t chat-engine
docker build apps/chat-web -t chat-web

# Kafka
kubectl create -f kubernetes/services/kafka-service.yaml
kubectl create -f kubernetes/deployments/kafka.yaml

# Chat Engine
kubectl create -f kubernetes/deployments/chat-engine.yaml

# MySQL
kubectl create -f kubernetes/services/mysql-service.yaml
kubectl create -f kubernetes/deployments/mysql.yaml

# Chat Web
kubectl create -f kubernetes/services/chat-web-service.yaml
kubectl create -f kubernetes/deployments/chat-web.yaml
