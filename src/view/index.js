import './styles.css';
import Phone from '../svg/phone';
import Twitter from '../svg/twitter';
import Mail from '../svg/mail';
import ProgressBar from '../components/progressBar';

export default function Curriculum() {
    return (
    <div className="bg-gray-100 h-full p-40">
      <div className="container mx-auto shadow-2xl h-full">
          <div className="bg-gray-200 text-center">
              <div className="grid grid-cols-4">
                <div className="bg-indigo-900 h-full p-2">
                    <div className="flex justify-center">
                        <div class="bg-gray-200 rounded-full h-56 w-56 flex items-center justify-center mt-10"></div>
                    </div>
                    <div className="mt-10">
                        <div className="text-3xl text-white">Arturo Carrillo Solorzano</div>
                        <div className="text-xl text-white">Web Developer</div>
                    </div>
                    <div className="mt-20">
                        <div className="text-3xl text-white">Contact</div>
                        <div className="mt-2">
                            <hr/>
                        </div>
                        <div className="text-left">
                            <div className="flex pl-5 mt-5">
                                <Phone/>
                                <div className="text-gray-300 text-lg ml-5">+52 33 3723 7391</div>
                            </div>
                            <div className="flex pl-5 mt-5">
                                <Twitter/>
                                <div className="text-gray-300 text-lg ml-5">@kumbia_kim</div>
                            </div>
                            <div className="flex pl-5 mt-5">
                                <Mail/>
                                <div className="text-gray-300 text-lg ml-5">arturo.carrillo.solorzano@gmail.com</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20">
                        <div className="text-3xl text-white">Skills</div>
                        <div className="mt-2">
                            <hr/>
                        </div>
                        <div className="text-left">
                            <div className="mt-5 mx-5 justify-center items-center">
                                <div className="text-gray-300 text-center text-lg ml-5 pr-2">Creativity</div>
                                <ProgressBar progressPercentage={90}/>
                            </div>
                            <div className="mt-5 mx-5 justify-center items-center">
                                <div className="text-gray-300 text-center text-lg ml-5 pr-2">Communication</div>
                                <ProgressBar progressPercentage={80}/>
                            </div>
                            <div className="mt-5 mx-5 justify-center items-center">
                                <div className="text-gray-300 text-center text-lg ml-5 pr-2">Teamplayer</div>
                                <ProgressBar progressPercentage={75}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 p-10">
                    <div>
                        <div className="mt-20"/>
                        <div className="text-4xl">About me</div>
                        <div className="mt-2">
                            <hr  style={{
                                color: '#312e81',
                                backgroundColor: '#312e81',
                                height: 2,
                                borderColor : '#312e81'
                            }}/>
                        </div>
                        <div className="mt-5 text-lg text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                    </div>

                    <div>
                        <div className="mt-20"/>
                        <div className="text-4xl">Work Experience</div>
                        <div className="mt-2">
                            <hr  style={{
                                color: '#312e81',
                                backgroundColor: '#312e81',
                                height: 2,
                                borderColor : '#312e81'
                            }}/>
                        </div>
                        <div className="mt-5 text-lg text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                    </div>

                    <div>
                        <div className="mt-20"/>
                        <div className="text-4xl">Education</div>
                        <div className="mt-2">
                            <hr  style={{
                                color: '#312e81',
                                backgroundColor: '#312e81',
                                height: 2,
                                borderColor : '#312e81'
                            }}/>
                        </div>
                        <div className="mt-5 text-lg text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                    </div>

                    <div>
                        <div className="mt-20"/>
                        <div className="text-4xl">Reference</div>
                        <div className="mt-2">
                            <hr  style={{
                                color: '#312e81',
                                backgroundColor: '#312e81',
                                height: 2,
                                borderColor : '#312e81'
                            }}/>
                        </div>
                        <div className="mt-5 text-lg text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
    </div>
    );
  }