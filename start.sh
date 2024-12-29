# Build Images
docker build apps/chat-engine -t chat-engine

# Kafka
kubectl create -f kubernetes/services/kafka-service.yaml
kubectl create -f kubernetes/deployments/kafka.yaml

# Chat Engine
kubectl create -f kubernetes/deployments/chat-engine.yaml
