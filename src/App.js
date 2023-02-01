import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Skills from './components/Skills';
import Works from './components/Works';
import skillsData from './skills-data';
import workData from './work-data';

function App() {
  return (
    <div className="min-h-screen bg-stone-300 dark:bg-black dark:text-white">
      <Header />
      <main className="max-w-[97%] lg:max-w-[85%] mx-auto">
        <About />
        <hr className="mx-auto bg-black dark:bg-white max-w-[97%]" />
        <section id="skills" className="p-6 my-12 scroll-mt-40">
        <h2 className="text-4xl font-bold text-center sm:text-5xl sm:text-left mb-6 mx-6 text-slate-900 dark:text-white">
            Skills
        </h2>
        <div className='grid overflow-hidden items-center w-full'>
          <ul className='list-none mx-auto flex items-center min-w-full marquee-group'>
            {skillsData.map(skill => {
              return <Skills key={skill.id} image={skill.img} />
            })}
          </ul>
        </div>
        </section>
        <hr className="mx-auto bg-black dark:bg-white max-w-[97%]" />
        <section id="work" className="p-6 mt-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height">
        <h2 className="text-4xl font-bold text-center sm:text-5xl sm:text-left mb-6 mx-6 text-slate-900 dark:text-white">
            Works
        </h2>
        <ul className='className="list-none cursor-default mx-auto my-12 flex flex-col sm:flex-row sm:flex-wrap items-center gap-8"'>
          {workData.map(work => {
            return <Works key={work.id} {...work} />
          })}
        </ul>
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
