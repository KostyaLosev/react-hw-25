export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
},
    moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|svg|gif|webp)$': '<rootDir>/__mocks__/fileMock.cjs'
},
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/', '/build/'],
};