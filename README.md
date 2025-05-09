# 🚀 DevOps Portfolio Project

![GitHub Actions CI](https://github.com/playlikesam/devops-portfolio-project/actions/workflows/ci.yml/badge.svg)
[📄 Live Documentation](https://playlikesam.github.io/devops-portfolio-project/)

---

## 📘 Project Overview

This is a beginner-friendly DevOps project created using **GitHub Codespaces**, **Docker**, and **GitHub Actions**. It demonstrates how to set up a containerized Node.js app with automated CI testing and deploy documentation using GitHub Pages.

---

## 🛠️ Tech Stack & Tools Used

- 🐙 GitHub + GitHub Codespaces (Cloud Dev Environment)
- 🐳 Docker (for containerizing the app)
- 🤖 GitHub Actions (for CI/CD)
- 🌐 GitHub Pages (for hosting static docs)
- 📝 Node.js (sample backend app)

---

## 🚀 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/playlikesam/devops-portfolio-project.git
cd devops-portfolio-project

# Build the Docker image
docker build -t devops-portfolio .

# Run the container
docker run -p 3000:3000 devops-portfolio
