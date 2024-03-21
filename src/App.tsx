import Form from "./components/Form"
import Header from "./components/Header"

const App = () => {

  return (
    <>
      <Header />

      <section className="bg-lime-500 py-20 px-5 md:px-0">
        <div className="max-w-4xl mx-auto">
          <Form />
        </div>
      </section>
    </>
  )
}

export default App
