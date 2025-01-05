# Build Images
docker build apps/chat-engine -t chat-engine
docker build apps/chat-web -t chat-web

if [ "$1" = "--development" ]; then
  docker build apps/chat-ui -f apps/chat-ui/Dockerfile.dev -t chat-ui
else
  docker build apps/chat-ui -f apps/chat-ui/Dockerfile.prod -t chat-ui
fi

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

# Chat UI
kubectl create -f kubernetes/services/chat-ui-service.yaml
kubectl create -f kubernetes/deployments/chat-ui.yaml
