import { Project } from 'ts-morph'

const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.tsx')
project.addSourceFilesAtPaths('src/**/*.ts')

const files = project.getSourceFiles()

const isAbsolute = (value: string) => {
  const layers = ['app', 'shared', 'features', 'enteties', 'widgets', 'pages']

  if(layers.some((layer) => value.startsWith(layer))) {
    return true
  }

  return false
}

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations()

  importDeclarations.forEach((importItem) => {
    const value = importItem.getModuleSpecifierValue()

    if(isAbsolute(value)) {
      importItem.setModuleSpecifier('@/' + value)
    }
  })
})

project.save()
