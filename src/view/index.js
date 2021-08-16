import './styles.css';

export default function Curriculum() {
    return (
    <div className="bg-gray-100 h-full p-40">
      <div className="container mx-auto shadow-2xl h-full">
          <div className="bg-gray-200 text-center">
              <div className="grid grid-cols-4">
                <div className="bg-indigo-900 h-screen p-2">
                    <div className="flex justify-center">
                        <div class="bg-gray-200 rounded-full h-56 w-56 flex items-center justify-center mt-10"></div>
                    </div>
                    <div className="mt-10">
                        <div className="text-3xl text-white">Arturo Carrillo Solorzano</div>
                        <div className="text-xl text-white">Web Developer</div>
                    </div>
                </div>
                <div className="col-span-3"></div>
              </div>
          </div>
      </div>
    </div>
    );
  }