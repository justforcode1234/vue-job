import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Get __dirname in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Path to your images folder
// const folder = path.join(__dirname, 'src/assets/images')
const folder = path.join(__dirname, 'src/components')

const files = fs.readdirSync(folder)

const imports = []
const exports = []

files.forEach(file => {
  if (file === 'index.js') return
  const name = path.parse(file).name
  imports.push(`import ${name} from './${file}'`)
  exports.push(name)
})

const content = `${imports.join('\n')}\n\nexport { ${exports.join(', ')} }\n`

fs.writeFileSync(path.join(folder, 'index.js'), content)

console.log('✅ Image index generated successfully!')