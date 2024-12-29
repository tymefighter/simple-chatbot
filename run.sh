# Build Images
docker build apps/chat-engine -t chat-engine

# Kafka
kubectl create -f kubernetes/deployments/kafka.yaml
kubectl create -f kubernetes/services/kafka-service.yaml

# Chat Engine
kubectl create -f kubernetes/deployments/chat-engine.yaml
