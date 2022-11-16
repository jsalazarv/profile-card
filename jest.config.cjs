module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(scss|sass|css)$": "identity-obj-proxy"
    },
    setupFilesAfterEnv: ['jest-extended/all', '<rootDir>/jest.setup.js'],
    resetMocks: false,
    setupFiles: ["jest-localstorage-mock"]
};
