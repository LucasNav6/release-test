module.exports = {
    branches: ["main"], // Rama principal del repositorio
    plugins: [
      "@semantic-release/commit-analyzer", // Plugin para analizar los mensajes de commit
      "@semantic-release/release-notes-generator", // Plugin para generar las notas de liberación
      "@semantic-release/changelog", // Plugin para actualizar el archivo CHANGELOG.md
      "@semantic-release/npm", // Plugin para publicar el paquete en npm
      "@semantic-release/github", // Plugin para crear un release en GitHub
      "@semantic-release/git", // Plugin para realizar cambios en el repositorio Git
    ],
  };
  