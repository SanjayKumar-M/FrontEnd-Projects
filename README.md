# Resonance

Resonance is a video to audio converter application built using Python, Flask, MySQL, and MongoDB. It follows the microservices architecture pattern, with services including authentication, converter, gateway, and notification services. Each service is Dockerized and deployed using Kubernetes. RabbitMQ is utilized for message queuing to enable communication between services.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [System Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)



## Overview

Resonance aims to provide users with a simple yet powerful tool to convert video files to audio files. Leveraging microservices architecture allows for scalability, resilience, and ease of maintenance. Each service handles a specific aspect of the application, promoting modularity and flexibility.

## Technologies Used

- Python
- Flask
- MySQL
- MongoDB
- Docker
- Kubernetes
- RabbitMQ

## architecture

![Resonance Logo](https://github.com/SanjayKumar-M/resonance/blob/main/resonance_architecture.png)


## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/resonance.git
   cd resonance 
   ```

2. **Set Up Environment Variables:**

   Modify the .env file in each service directory to include necessary environment variables such as database credentials, RabbitMQ configuration, and any other sensitive information.
   

3. **Build and Run Docker Containers:**
   ```bash
   cd authentication-service
   docker build -t authentication-service .

   ```
4. **Deploy Using Kubernetes:**

  Create Kubernetes deployment files for each service and apply them using kubectl apply -f deployment.yaml.


## Usage

### Start Services

1. **Ensure Docker and Kubernetes are Running:**
   - Make sure Docker and Kubernetes are installed and running on your system.

2. **Start Each Service Using Docker:**
   - Navigate to the directory of each service.
   - Run the following command to start each service:
     ```bash
     docker run -d -p 5000:5000 authentication-service
     ```
   - Repeat this process for each service, replacing `authentication-service` with the appropriate service name.

### Access the Gateway Service

1. **Once All Services are Running:**
   - Ensure that all services are up and running.

2. **Access the Gateway Service:**
   - Open a web browser and navigate to http://localhost:5000.
   - This will access the gateway service, which serves as the entry point to the application.

`Important: Repeat the steps for all the services and configure the rabbitmq in your localhost `

Feel free to customize this template to fit the specifics of your project and add more detailed instructions or information as needed!
