import { patientImages } from "../../data/patient/images";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col w-screen bg-bgHomeGreenSecond justify-center md:flex-row">
        <div className="w-full font-sans p-4 sm:p-8 md:p-16 mt-20 md:mt-32 md:w-2/4">
          <h1
            className="text-xl sm:text-xl uppercase font-rubik text-textGreenFirst "
            style={{ letterSpacing: "3px" }}
          >
            Welcome to Oxyzen
          </h1>
          <h1 className="text-3xl sm:text-4xl w-full mt-6 font-rubik ">
            We Are Here to Hear
          </h1>
          <h1 className="text-3xl sm:text-4xl w-full font-rubik ">
            and Heal Your
          </h1>
          <h1 className="text-3xl sm:text-4xl w-full font-rubik ">
            Health Problems
          </h1>

          <div className="mt-4 sm:mt-8 ml-0 sm:ml-0 flex flex-wrap gap-3">
            <button className="border-2 border-bgFooterButton hover:bg-bgNormalButtonGreen text-xs sm:text-sm sm:w-44 p-2 pl-3 pr-3 rounded-full ">
              Get Started
            </button>
            <button className="border-bgFooterButton hover:bg-bgNormalButtonGreen text-xs sm:text-sm font-semibold border-2 text-textNormalBlack p-2 pl-3 pr-3 sm:w-44 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 transition-delay-150">
              Contact Us
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:items-end md:justify-end">
          <img
            className="w-full sm:max-w-xs md:max-w-full transition-transform duration-500 ease-in-out transform hover:scale-105"
            src={patientImages.home_happy_standing_doctor}
            alt="happy-doctor-image"
            style={{ maxWidth: "300px" }}
          />
        </div>
      </div>

      <div className="flex flex-col items-center w-screen justify-center  gap-9 h-96 sm:h-fit bg-bgFooterGreen sm:flex-row">
        <div className="flex h-52 items-center gap-3 w-full sm:w-80">
          <div className="bg-white p-3 rounded-full">
            <img
              className="h-10 w-24"
              src={patientImages.home_doctor_icon}
              alt="doctor-icon"
            />
          </div>
          <div className="flex flex-col justify-between text-white h-20">
            <h1 className="text-2xl ">Expert Doctors</h1>
            <p className="text-sm">
              They are always answerable to consultant. This is the lowest level
              of doctor in the hierarchy
            </p>
          </div>
        </div>

        <div className="flex h-52 items-center justify-between gap-3 w-full sm:w-80">
          <div className="bg-white p-3 rounded-full">
            <img
              className="h-10 w-24"
              src={patientImages.home_hospital_icon}
              alt="hospital-icon"
            />
          </div>
          <div className="flex flex-col justify-between text-white h-20">
            <h1 className="text-2xl ">Emergency Care</h1>
            <p className="text-sm">
              Emergency Care is the backbone of healthcare, providing crucial
              medical
            </p>
          </div>
        </div>

        <div className="flex h-52 items-center gap-3 w-full sm:w-80">
          <div className="bg-white p-3 rounded-full">
            <img
              className="h-10 w-24"
              src={patientImages.home_call_icon}
              alt="call-icon"
            />
          </div>
          <div className="flex flex-col justify-between text-white h-20">
            <h1 className="text-2xl ">24/7 Full Support</h1>
            <p className="text-sm">
              Helplines are often available 24/7 so you can contact them at any
              time of the day or night.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center w-screen items-center sm:flex-row gap-4 p-6 border-bgBorder border-b-2 mb-3">
        <div className="flex flex-col justify-around p-7 gap-4 sm:flex-row">
          <img
            className="h-[350px] sm:w-[200px]"
            src={patientImages.home_young_women_doctor}
            alt="young-women-doctor"
          />
          <img
            className="h-[350px] mt-0 sm:mt-6 sm:w-[200px]"
            src={patientImages.home_doctor_discussion}
            alt="doctors-discussion"
          />
        </div>
        <div className="p-7 max-w-lg flex flex-col justify-between gap-6">
          <h1
            className="text-xl uppercase text-textGreenFirst"
            style={{ letterSpacing: "3px" }}
          >
            About Oxyzen
          </h1>
          <h1 className="text-3xl font-semibold">
            We Collaborate for Better Healthcare
          </h1>
          <p className="text-sm  text-gray-500">
            I apologize for any confusion. It seems there was a
            misunderstanding. The code I provided is the same as the one you
            shared. It looks correct, and it should work as intended.
          </p>

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="w-full sm:w-56">
              <h1 className="font-semibold">Our Vision</h1>
              <p className="text-sm  text-gray-500">
                The code I provided is the same as the one you shared. It looks
                correct, and it should work as intended.
              </p>
            </div>
            <div className="w-full sm:w-56">
              <h1 className="font-semibold">Our Mission</h1>
              <p className="text-sm  text-gray-500">
                The code I provided is the same as the one you shared. It looks
                correct, and it should work as intended.
              </p>
            </div>
          </div>
          <button className="bg-bgNormalButtonGreen text-sm font-semibold text-white p-2 pl-4 pr-4 w-full sm:w-32 rounded-full mt-4 sm:mt-0 transition-transform duration-300 ease-in-out transform hover:scale-105 transition-delay-150 hover:bg-bgNormalButtonGreen">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex flex-col p-10 mb-3 w-screen  border-b-bgBorder border-b-2 justify-center">
        <h1
          className="text-xl uppercase text-textGreenFirst"
          style={{ letterSpacing: "3px" }}
        >
          Our Services
        </h1>
        <h1 className="text-3xl font-semibold">
          Amazing Medical Facilities Just for You
        </h1>

        <div className="flex flex-wrap mt-6 gap-7 justify-center">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-bgCardLightGreen p-8 flex flex-col justify-around w-[350px] transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="bg-white w-16 h-14 p-2 rounded-full flex items-center justify-center">
                <img
                  className="h-8"
                  src={patientImages.home_medicine_icon}
                  alt="medicine-icon"
                />
              </div>

              <h1 className="font-semibold">Service {item}</h1>
              <p className="text-sm text-gray-500">
                I apologize for any confusion. It seems there was a
                misunderstanding. The code I provided is the same as the one you
                shared. It looks correct, and it should work as intended.
              </p>
              <p className="text-bgNormalButtonGreen font-semibold text-xs hover:underline">
                Learn More &rarr;
              </p>
            </div>
          ))}
        </div>

        <div
          className="flex justify-end p-12 mt-24 bg-cover bg-center "
          style={{
            backgroundImage: `url(${patientImages.home_doctor_bg_image})`,
          }}
        >
          <div className="bg-bgFooterGreen flex flex-col justify-center text-white h-full w-screen md:w-[400px] rounded-md p-10 gap-4 ">
            <h1 className="uppercase" style={{ letterSpacing: "3px" }}>
              Working Hours
            </h1>
            <h1 className="font-semibold text-xl">Healthcare at its Finest</h1>
            <p className="text-sm text-gray-100">
              I apologize for any confusion. It seems there was a
              misunderstanding. The code I provided is the same as the one you
              shared. It looks correct, and it should work as intended.
            </p>

            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex flex-wrap items-center gap-3 border-b-2 pb-2 border-bgBorder"
              >
                <p className="text-lg"> Mon - Wed</p>
                <p className="text-lg"> 7Am - 11Pm</p>
                <button className="bg-bgFooterButton p-1 pl-3 pr-3 text-sm rounded-full border-2 border-bgBorder transition-transform duration-300 ease-in-out transform hover:scale-105 transition-delay-150 hover:bg-bgNormalButtonGreen">
                  Book Now
                </button>
              </div>
            ))}

            <button className="bg-bgFooterButton p-1 pl-4 pr-4 text-sm rounded-full border-2 border-bgBorder transition-transform duration-300 ease-in-out transform hover:scale-105 transition-delay-150 hover:bg-bgNormalButtonGreen">
              Make an Appointment
            </button>
          </div>
        </div>
      </div>

      <div className="p-5 md:p-10 border-b-2 border-b-bgBorder">
        <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-10 items-center">
          <img
            className="h-[300px] md:h-[600px] rounded-lg"
            src={patientImages.home_calling_doctor_image}
            alt="calling-doctor-image"
          />

          <div className="w-full md:w-[500px] flex flex-col items-start justify-between">
            <h1
              className="text-lg uppercase text-textGreenFirst"
              style={{ letterSpacing: "3px" }}
            >
              Appointment
            </h1>
            <h1 className="text-2xl md:text-4xl">
              Amazing Medical Facilities Just for You
            </h1>
            <p className="text-xs text-textNormalGray md:w-80">
              I apologize for any confusion. It seems there was a
              misunderstanding. The code I provided is the same as the one you
              shared. It looks correct, and it should work as intended.
            </p>

            <form className="flex flex-col w-full md:w-[350px] mt-2 gap-2">
              <div className="flex justify-between items-center">
                <div className="flex flex-col w-full md:w-[150px]">
                  <div className="flex items-center">
                    <span className="text-sm">Your Name</span>
                    <span className="text-bgNormalButtonGreen">*</span>
                  </div>
                  <input
                    className="outline-none border-2 p-2 pl-5 pr-5 mt-2 rounded-lg border-gray-300 placeholder:text-gray-300 text-sm w-full"
                    type="text"
                    name=""
                    placeholder="Your Name"
                    id=""
                  />
                </div>

                <div className="flex flex-col w-full md:w-[150px] mt-2 md:mt-0">
                  <div className="flex items-center">
                    <span className="text-sm">Phone</span>
                    <span className="text-bgNormalButtonGreen">*</span>
                  </div>
                  <input
                    className="outline-none border-2 p-2 pl-5 pr-5 mt-2 rounded-lg w-full border-gray-300 placeholder:text-gray-300 text-sm"
                    type="text"
                    name=""
                    placeholder="+91 7518078980"
                    id=""
                  />
                </div>
              </div>

              <div className="flex justify-between items-center">
                {/* Date Input */}
                <div className="flex flex-col w-full md:w-[150px]">
                  <div className="flex items-center">
                    <span className="text-sm">Date</span>
                    <span className="text-bgNormalButtonGreen">*</span>
                  </div>
                  <input
                    className="outline-none border-2 p-2 pl-5 pr-5 mt-2 rounded-lg w-full border-gray-300 placeholder:text-gray-300 text-sm"
                    type="text"
                    name=""
                    placeholder="Select Date"
                    id=""
                  />
                </div>

                {/* Time Input */}
                <div className="flex flex-col w-full md:w-[150px] mt-2 md:mt-0">
                  <div className="flex items-center">
                    <span className="text-sm">Time</span>
                    <span className="text-bgNormalButtonGreen">*</span>
                  </div>
                  <input
                    className="outline-none border-2 p-2 pl-5 pr-5 mt-2 rounded-lg w-full border-gray-300 placeholder:text-gray-300 text-sm"
                    type="text"
                    name=""
                    placeholder="Select Time"
                    id=""
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div>
                  <span className="text-sm">Message</span>
                </div>
                <input
                  className="outline-none border-2 p-2 pl-5 pr-5 mt-2 rounded-lg border-gray-300 placeholder:text-gray-300 text-sm w-full"
                  type="text"
                  name=""
                  placeholder="Hello There!"
                  id=""
                />
              </div>
            </form>
            <button className="bg-bgNormalButtonGreen p-2 pl-4 pr-4 text-sm rounded-full border-2 border-bgBorder text-white mt-2">
              Make an Appointment
            </button>
          </div>
        </div>
      </div>

      <div className="p-10 flex flex-col justify-between items-center gap-11 w-screen">
        <h1
          className="text-lg uppercase text-textGreenFirst"
          style={{ letterSpacing: "3px" }}
        >
          Appointment
        </h1>

        <h1 className="text-4xl w-full md:w-[500px] text-center mb-6">
          Amazing Medical Facilities Just for You
        </h1>

        <div className="flex flex-col md:flex-row gap-5 w-full overflow-x-auto justify-center">
          {Array.from({ length: 4 }, (_, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full md:w-auto"
            >
              <img
                className="h-[300px] w-[250px] mb-3"
                src={patientImages.home_card_doctor_image}
                alt=""
              />
              <h1 className="mt-3">James Samuels</h1>
              <p className="text-sm text-textNormalGray">Pediatrics</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex bg-bgFooterGreen mt-6 justify-center w-screen mb-4 md:mb-0 h-auto md:h-[300px]">
        <div className="p-6 md:w-[500px] flex flex-col justify-center items-center md:items-start">
          <h1
            className="text-lg uppercase font-rubik text-white"
            style={{ letterSpacing: "3px" }}
          >
            Welcome to Oxyzen
          </h1>
          <h1 className="text-2xl md:text-3xl text-white font-rubik w-full md:w-[400px] text-center md:text-left">
            We Are Here to Hear and Heal Your Health Problems
          </h1>

          <p className="text-sm text-white w-full md:w-[320px] text-center md:text-left mt-4">
            I apologize for any confusion. It seems there was a
            misunderstanding. The code I provided is the same as the one you
            shared.
          </p>
          <div className="mt-6 flex flex-col items-center md:flex-row gap-5">
            <button className="bg-white text-sm text-black p-2 pl-4 pr-4 rounded-full">
              Get Started
            </button>
            <button className="border-bgBorder text-sm border-2 text-white p-2 pl-4 pr-4 rounded-full">
              Contact Us
            </button>
          </div>
        </div>
        <div className="hidden md:flex items-end">
          <img
            className="h-[200px] md:h-[330px]"
            src={patientImages.home_happy_standing_doctor}
            alt="happy-doctor-image"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 w-full overflow-x-auto justify-center mt-5">
        <div className="flex flex-col items-center w-full md:w-auto">
          <img
            className="h-[300px] w-[250px] "
            src={patientImages.home_card_doctor_image}
            alt=""
          />
          <div className="p-3 flex flex-col">
            <p
              className="text-xs text-textGreenFirst uppercase"
              style={{ letterSpacing: "1px" }}
            >
              September 20, 2023
            </p>
            <h1 className="font-semibold text-sm mt-2">
              Can creatine supplements help people
            </h1>
            <p className="text-xs text-gray-400 mt-2">
              I apologize for any confusion. It seems there was a...
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center w-full md:w-auto">
          <img
            className="h-[300px] w-[250px] mb-3"
            src={patientImages.home_card_doctor_image}
            alt=""
          />
          <div className="p-3 flex flex-col">
            <p
              className="text-xs text-textGreenFirst uppercase"
              style={{ letterSpacing: "1px" }}
            >
              September 20, 2023
            </p>
            <h1 className="font-semibold text-sm mt-2">
              Can creatine supplements help people
            </h1>
            <p className="text-xs text-gray-400 mt-2">
              I apologize for any confusion. It seems there was a...
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center w-full md:w-auto">
          <img
            className="h-[300px] w-[250px] mb-3"
            src={patientImages.home_card_doctor_image}
            alt=""
          />
          <div className="p-3 flex flex-col">
            <p
              className="text-xs text-textGreenFirst uppercase"
              style={{ letterSpacing: "1px" }}
            >
              September 20, 2023
            </p>
            <h1 className="font-semibold text-sm mt-2">
              Can creatine supplements help people
            </h1>
            <p className="text-xs text-gray-400 mt-2">
              I apologize for any confusion. It seems there was a...
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center w-full md:w-auto">
          <img
            className="h-[300px] w-[250px] mb-3"
            src={patientImages.home_card_doctor_image}
            alt=""
          />
          <div className="p-3 flex flex-col">
            <p
              className="text-xs text-textGreenFirst uppercase"
              style={{ letterSpacing: "1px" }}
            >
              September 20, 2023
            </p>
            <h1 className="font-semibold text-sm mt-2">
              Can creatine supplements help people
            </h1>
            <p className="text-xs text-gray-400 mt-2">
              I apologize for any confusion. It seems there was a...
            </p>
          </div>
        </div>

        {/* Repeat similar structure for other cards */}

        {/* Repeat similar structure for other cards */}
      </div>
    </>
  );
};

export default Home;
