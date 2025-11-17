🚘 Vehicle Insurance Prediction – End-to-End MLOps Project

A complete production-grade MLOps pipeline built using modern DevOps,
Cloud, and Machine Learning engineering principles.
This project showcases industry-level architecture, CI/CD automation,
experiment tracking, cloud deployment, scalable data pipelines, and a
real-time prediction web application.

------------------------------------------------------------------------

⭐ Project Highlights

-   End-to-end automated ML lifecycle
-   Modular, production-ready pipeline design
-   Cloud-native deployment using AWS EC2, S3, ECR
-   Seamless CI/CD with GitHub Actions + Self-Hosted Runner
-   Fully containerized system using Docker
-   Dynamic data ingestion from MongoDB Atlas
-   Real-time prediction web app
-   Automated model evaluation & versioning

------------------------------------------------------------------------

📁 Project Setup Summary

1. Project & Environment Setup

-   Generate template using template.py
-   Setup setup.py & pyproject.toml for local package import
-   Create and activate conda environment
-   Install dependencies from requirements.txt
-   Verify installation with pip list

------------------------------------------------------------------------

📦 MongoDB Integration

1.  Create MongoDB Atlas project & free M0 cluster
2.  Allow all IPs (0.0.0.0/0)
3.  Obtain connection URI
4.  Upload dataset from Jupyter notebook
5.  Verify ingested documents from MongoDB dashboard

------------------------------------------------------------------------

📝 Logging, Exception Handling & EDA

-   Implement logger module
-   Implement custom exception handling
-   Perform EDA & feature engineering notebooks

------------------------------------------------------------------------

📥 Data Ingestion Pipeline

-   Define variables in constants/__init__.py
-   Implement MongoDB connection in
    configuration/mongo_db_connections.py
-   Build ingestion class in components/data_ingestion.py
-   Create artifact and config entities
-   Run ingestion via training pipeline

------------------------------------------------------------------------

🧪 Data Validation, Transformation & Model Training

-   Implement schema validation (config.schema.yaml)
-   Validate dataset structure and schema
-   Build transformation pipeline with scalers, encoders, etc.
-   Add training logic with evaluation metrics
-   Save preprocessor + model artifacts

------------------------------------------------------------------------

☁ AWS Setup for Model Registry & CI/CD

Configure AWS:

-   IAM user with AdministratorAccess
-   Create Access Keys and store as environment variables
-   Add AWS credentials to project constants
-   Build S3 connection utilities

Create S3 Bucket:

    samacker-mlopsproj

Implement:

-   aws_connection.py
-   aws_storage utilities
-   Model registry inside S3
-   s3_estimator.py for push/pull logic

------------------------------------------------------------------------

🧮 Model Evaluation & Model Pusher

-   Compare current model with latest registry version
-   Push updated model to S3 if improved
-   Prepare artifacts for deployment

------------------------------------------------------------------------

🔮 Prediction Pipeline + Flask App

-   Build an end-to-end prediction pipeline
-   Integrate with app.py Flask API
-   Add templates and static for UI

------------------------------------------------------------------------

🐳 Docker Deployment

-   Create Dockerfile and .dockerignore
-   Build container locally
-   Push image to AWS ECR

------------------------------------------------------------------------

⚙️ CI/CD Pipeline (GitHub Actions)

-   Add aws.yaml workflow
-   Configure:
    -   Build → Test → Dockerize → Push to ECR → Deploy to EC2
-   Setup GitHub Secrets:
    -   AWS keys
    -   Region
    -   ECR repo

------------------------------------------------------------------------

🖥️ AWS EC2 Deployment

-   Create Ubuntu instance
-   Install Docker
-   Connect GitHub self-hosted runner
-   Deployment triggered on every commit

------------------------------------------------------------------------

🌍 Production App Hosting

-   Open EC2 security group port 5000
-   Access the live app at:

    http://<public-ip>:5000

------------------------------------------------------------------------

✔ Additional Feature

Train model anytime using:

    /training

------------------------------------------------------------------------

🎯 Final Takeaway

This project demonstrates true end-to-end MLOps engineering, covering
every step needed to run ML systems in production:

-   Data pipelines
-   Automation
-   Versioning
-   Cloud deployment
-   Monitoring-ready architecture

------------------------------------------------------------------------
