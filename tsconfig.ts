{
    "compilerOptions": {
      "target": "esnext",
      "allowSyntheticDefaultImports": true,
      "useDefineForClassFields": true,
      "module": "esnext",
      "moduleResolution": "node",
      "strict": false,
      "jsx": "preserve",
      "sourceMap": true,
      "resolveJsonModule": true,
      "isolatedModules": true,
      "esModuleInterop": true,
      "lib": [
        "esnext",
        "dom"
      ],
      "skipLibCheck": true,
      "baseUrl": ".",
      "paths": {
        "@/*": [
          "src/*"
        ]
    },
    "include": [
      "src/**/*.ts",
      "src/**/*.d.ts",
      "src/**/*.tsx",
      "src/**/*.vue",
      "src/**/*.json",
      "manifest.json",
      "package.json"
    ],
    "references": [
      {
        "path": "./tsconfig.node.json"
      }
    ]
  }
  