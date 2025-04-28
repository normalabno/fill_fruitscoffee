const Hero = () => {
  return (
    <section className="relative h-screen bg-blue-500 text-white flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center z-10">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-8">I am a Frontend Developer specializing in Web Design & Development</p>
        <a
          href="#projects"
          className="bg-white text-blue-500 py-2 px-6 rounded-lg text-xl font-semibold hover:bg-blue-100 transition-all"
        >
          Explore My Work
        </a>
      </div>
    </section>
  )
}

export default Hero