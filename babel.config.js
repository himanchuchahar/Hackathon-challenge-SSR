/**
 * babel config specifically used for jest
 */
module.exports = {
    env: {
        test: {
          presets: ["@babel/env", "@babel/react"],
          plugins: [
            "@babel/plugin-proposal-class-properties"
          ],
          only: [
            "./**/*.js",
            "node_modules/jest-runtime"
          ]
        }
      }
}