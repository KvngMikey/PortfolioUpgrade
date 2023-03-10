import { useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';
import Skills from './components/Skills';
import Works from './components/Works';
import skillsData from './skills-data';
import workData from './work-data';


function App() {

  //Loading effect
  const [isLoading, setIsLoading] = useState(true);

  //Toggle Dark/Light Mode
  const [darkMode, setDarkMode] = useState(true);

  function toggleMode() {
    setDarkMode(!darkMode);
  }

  function doneLoading() {
    setIsLoading(false);
  }

  // useEffect(() => {
  //   // Simulate an async operation that takes some time to complete
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);
  // }, []);

  return (
    <div className={darkMode ? "dark" : ''}>

      {isLoading ? (
        <Loading handleClick={doneLoading} />
      ) : (
        <div className="min-h-screen bg-stone-300 dark:bg-black dark:text-white">
          <Header handleClick={toggleMode} data={darkMode} />
          <main className="max-w-[97%] lg:max-w-[85%] mx-auto">
            <About />
            <hr className="mx-auto bg-black dark:bg-white max-w-[97%]" />
            <section id="skills" className="mt-8 mr-4 sm:mr-8 lg:mr-12 mb-20 scroll-mt-40">
              <h2 className="text-4xl font-medium text-left sm:text-5xl mb-8 ml-1 sm:ml-2 xl:ml-4 text-slate-900 dark:text-white">
                Skills
              </h2>
              <div className='grid overflow-hidden items-center w-full ml-2 sm:ml-6'>
                <div className='flex'>
                  <div className='flex'>
                    <ul className='list-none flex-shrink-0 mx-auto flex items-center min-w-full marquee-group'>
                      {skillsData.map(skill => {
                        return <Skills key={skill.id} {...skill} />
                      })}
                    </ul>
                  </div>
                  <div className='flex'>
                    <ul className='list-none flex-shrink-0 mx-auto flex items-center min-w-full marquee-group'>
                      {skillsData.map(skill => {
                        return <Skills key={skill.id} {...skill} />
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <hr className="mx-auto bg-black dark:bg-white max-w-[97%]" />
            <section id="work" className="mt-8 mr-3 sm:mr-0 mb-12 scroll-mt-40">
              {/* <section id="work" className="p-6 mt-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height"> */}
              <h2 className="text-4xl font-medium text-left sm:text-5xl mb-8 ml-2 sm:ml-4 xl:ml-5 text-slate-900 dark:text-white">
                {/* <h2 className="text-4xl font-bold text-center sm:text-5xl sm:text-left mb-6 mx-6 text-slate-900 dark:text-white"> */}
                Works
              </h2>
              <ul className='className="list-none cursor-default ml-4 flex flex-col sm:flex-row sm:flex-wrap items-center gap-8"'>
                {workData.map(work => {
                  return <Works key={work.id} {...work} />
                })}
              </ul>
            </section>
            <Footer />
          </main>
        </div>
      )}


    </div>
  );
}

export default App;
