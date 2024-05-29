import FAQ from "../components/FAQ";

function App() {
  return (
    <div className="w-full h-screen bg-black">
        <h1 className="text-white text-center font-nunito md:text-[40px] text-[20px] not-italic font-bold">Frequently Asked Questions</h1>

      <div className="p-4">
        <FAQ />
      </div>
    </div>
  );
}

export default App;