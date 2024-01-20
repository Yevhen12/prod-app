import { Project } from 'ts-morph'
import path from 'path'

const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.tsx')
project.addSourceFilesAtPaths('src/**/*.ts')

const files = project.getSourceFiles()
const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui')
const shredUiDirectory = project.getDirectory(uiPath)
const componentsDirs = shredUiDirectory?.getDirectories()

const isAbsolute = (value: string) => {
  const layers = ['app', 'shared', 'features', 'enteties', 'widgets', 'pages']

  if (layers.some((layer) => value.startsWith(layer))) {
    return true
  }

  return false
}

componentsDirs?.forEach((directory) => {
  const indexFilePath = `${directory.getPath()}/index.ts`
  const indexFile = directory.getSourceFile(indexFilePath)

  if (!indexFile) {
    const sourceCode = `export * from './${directory.getBaseName()}'`
    const file = directory.createSourceFile(indexFilePath, sourceCode, { overwrite: true })

    file.save()
  }
})

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations()

  importDeclarations.forEach((importItem) => {
    const value = importItem.getModuleSpecifierValue()
    const valueWithoutAllias = value.replace('@/', '')

    const segments = valueWithoutAllias.split('/')

    const isShared = segments[0] === 'shared'
    const isUiSlice = segments[1] === 'ui'

    if(isAbsolute(valueWithoutAllias) && isShared && isUiSlice) {
      const result = valueWithoutAllias.split('/').slice(0, 3).join('/')
      importItem.setModuleSpecifier(`@/${result}`)
    }
  })
})

project.save()
