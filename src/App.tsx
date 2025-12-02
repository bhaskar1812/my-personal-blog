import './App.css'
import { Layout } from './components/Layout'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ImageCards } from './components/ImageCards'
import { Articles } from './components/Articles'
import { Work } from './components/Work'

function App() {

  return (
    <>
      <Layout>
      <Header />
      <Hero />
      <ImageCards />
      <section className="max-w-5xl mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <Articles />
        </div>
        <Work />
      </section>
    </Layout>
    </>
  )
}

export default App
