# Resonance

Resonance is a video to audio converter application built using Python, Flask, MySQL, and MongoDB. It follows the microservices architecture pattern, with services including authentication, converter, gateway, and notification services. Each service is Dockerized and deployed using Kubernetes. RabbitMQ is utilized for message queuing to enable communication between services.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

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

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/resonance.git
   cd resonance 
   ```