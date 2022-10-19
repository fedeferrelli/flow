
function Loading ({ citiToShow }) {
  return (
        <main className="m-auto font-light top-0 bottom-0 left-0 right-0 flex absolute text-text_main">
          <section className="m-auto flex flex-col gap-4">
            <div className="m-auto text-xl">Cargando clima para</div>
            <div className = "m-auto bg-gradient-to-r from-main to-secondary w-12 h-12 rounded-full flex animate-spin "><div className = "w-8 h-8 rounded-full m-auto bg-main" /></div>
            <div className="m-auto text-3xl">{citiToShow}</div>
          </section>
        </main>
  );
}

export default Loading;
