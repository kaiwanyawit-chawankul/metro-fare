module.exports = {
    ci: {
      collect: {
        url: [
          "http://127.0.0.1:3000"
        ],
        startServerCommand: "yarn start",
        startServerReadyPattern: "Available on",
        numberOfRuns: 1
      },
      upload: {
        target: "temporary-public-storage"
      },
      assert: {
        preset: "lighthouse:recommended",
      }
    },
  };