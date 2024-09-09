import './App.css'
//PascalCase para nombres de componentes
//camelCase para funciones
//kebab-case para archivos
//snake_case para variables
//CONSTANT_CASE para constantes

function Header(){
  return <header>Header</header>
}
function Footer(){
  return <footer>Footer</footer>
}

function App() {
  return (
    <div>
      <Header />
      <main>Main</main>
      <Footer />
    </div>
  )
}

export default App
