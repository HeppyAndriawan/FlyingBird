"use client";
import React, { Suspense, useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import gsap from "gsap";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const baseurl = isGithubActions? "./":"/";

export default function HomeLanding() {
  return (
    <div className="w-full md:container md:mx-auto sm:mx-0 xl:p-0 md:p-0 2xl:px-[5%] lg:px-[5%] sm:px-[5%]">
      <div className="w-full h-fit flex flex-col justify-center bg-white text-gray-800 lg:px-0 md:px-4 pt-2">
        <Navigation />
      </div>
      <main className="w-full lg:p-0 md:p-8 sm:p-0">
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <Container3D />
        <Footer />
      </main>
    </div>
  );
}

export const Navigation = () => {
  // Detect Mobile
  const [isMobile, setisMobile] = useState<boolean>(false);
  useEffect(() => {
    const mobile = window.innerWidth >= 320 && window.innerWidth < 768;
    setisMobile(mobile);

    window.addEventListener("resize", () => {
      const mobile = window.innerWidth >= 320 && window.innerWidth < 768;
      switch (mobile) {
        case true:
          setisMobile(true);
          break;
        case false:
          setisMobile(false);
          break;

        default:
          break;
      }
    });
  }, []);

  // Contact us Data
  const contact = [
    {
      description: "Tanjung Puting National Park",
    },
    {
      description: "Pangkalan Bun, Kota Waringin Barat",
    },
    {
      description: "Central Borneo - Indonesia",
    },
  ];

  // Data Mobile Navigation
  const mobileNavigation = [
    {
      title: "Visiting",
      href: "#Section03",
    },
    {
      title: "Navigate",
      href: "#Section04",
    },
    {
      title: "Donate",
      href: "#Section02",
    },
  ];

  if (isMobile) {
    return (
      <header className="w-full flex justify-between items-center pt-3 pb-12">
        <div className="flex items-center">
          <h1 className="text-xl font-bold" style={{ color: "#48AFBC" }}>
            Future Project
          </h1>
        </div>
        <MobileNavigation
          dataMenu={mobileNavigation}
          title={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-align-right w-[20px] h-[20px]"
            >
              <path d="M21 12H9" />
              <path d="M21 18H7" />
              <path d="M21 6H3" />
            </svg>
          }
          extraButton={
            <button className="sign-in-button w-full">
              <Dialog
                title="Contact us"
                dataList={contact}
                textBTNcolor="white"
                space={false}
              />
            </button>
          }
        />
      </header>
    );
  }
  return (
    <header className="w-full md:flex sm:hidden justify-between items-center lg:px-0 md:p-4 ">
      <div className="flex items-center">
        <h1 className="text-xl font-bold" style={{ color: "#48AFBC" }}>
          Future Project
        </h1>
      </div>
      <nav className="flex space-x-4 items-center">
        <a href="#Section03" className="nav-button text-gray-600">
          Visiting
        </a>
        <a href="#Section04" className="nav-button text-gray-600">
          Navigate
        </a>
      </nav>
      <div className="flex space-x-4 items-center">
        <a href="#Section02" className="nav-button text-gray-600">
          Donate
        </a>
        <button className="sign-in-button">
          <Dialog
            title="Contact us"
            dataList={contact}
            textBTNcolor="white"
            space={false}
          />
        </button>
      </div>
    </header>
  );
};

export const Section01 = () => {
  return (
    <section
      id="Section01"
      className="section w-full lg:h-fit lgp:h-[40vh] md:h-[40vh] sm:h-fit flex md:flex-row sm:flex-col justify-between md:items-center mb-16"
    >
      <div className="md:w-1/2 sm:w-full flex flex-col justify-between">
        <div>
          <h2 className="text-5xl font-bold mb-4">
            {`Let's Saving The Future Our Forest`}
          </h2>
          <p className="text-gray-600">
            Welcome to <span style={{ color: "#48AFBC" }}>Borneo</span>{" "}
          </p>
          <div className="flex items-center mb-4">
            <p className="text-gray-600">The heart of the wolrd</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-3">
          <Suspense>
            <Image
              src={`${baseurl}asset/play_video.jpg`}
              width={100}
              height={100}
              alt="Person smiling"
              className="w-16 h-16 rounded-full"
            />
          </Suspense>
          <div>
            <p className="text-gray-600">National Park Of Tanjung Puting</p>
            <a
              href="https://www.youtube.com/watch?v=luLe8AwSkFY"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#48AFBC" }}
            >
              See Video
            </a>
          </div>
        </div>
      </div>
      <div className="relative md:w-1/2 sm:w-full">
        <div className="absolute top-0 left-0 w-full h-full"></div>
        <Suspense>
          <Image
            src={`${baseurl}asset/Artboard_3.png`}
            width={300}
            height={600}
            alt="Mobile application screenshot"
            className="w-full h-auto relative z-10"
          />
        </Suspense>
      </div>
    </section>
  );
};

export const Section02 = () => {
  return (
    <section
      id="Section02"
      className="section flex md:flex-row sm:flex-col-reverse justify-between items-center mb-16 sm:pt-8 h-fit"
    >
      <div className="md:w-1/2 sm:w-full">
        <Suspense>
          <Image
            src={`${baseurl}asset/Artboard_2.png`}
            width={300}
            height={600}
            alt="Mobile application screenshot"
            className="w-full h-auto relative z-10"
          />
        </Suspense>
      </div>
      <div className="md:w-1/2 sm:w-full flex flex-col">
        <h2 className="text-5xl font-bold mr-0  mb-4">
          {`We can't do this alone!`}
        </h2>
        <p className="text-gray-600 mr-0 mb-4">
          Forests are vanishing fast wildlife loss, climate impact, pollution,
          deforestation. Together, we can protect our planet. Everyone can
          participate in the project, join us in saving our forests today!
        </p>
        <div className="flexitems-center mb-4">
          <p className="text-gray-600">
            Support us by <span style={{ color: "#48AFBC" }}>Donating</span> or{" "}
            <span style={{ color: "#48AFBC" }}>Volunteering</span>
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="lg:w-1/2 lgp:w-full md:w-full sm:w-full bg-gray-100 p-4 rounded">
            <Suspense>
              <Image
                src={`${baseurl}asset/donating.jpg`}
                width={2121}
                height={1408}
                alt="Interest rate comparison"
                className="w-full h-32 object-cover items-center rounded mb-4"
              />
            </Suspense>
            <h3 className="text-xl font-bold mb-2">
              Orangutan Foundation International
            </h3>
            <a
              href="https://orangutan.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#48AFBC" }}
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Section03 = () => {
  // Carousel Auto Play Function
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  // Carousel Data
  const carouselData = [
    {
      image: `${baseurl}asset/carousel/captcha-01.jpg`,
      altText: "Image 01",
    },
    {
      image: `${baseurl}asset/carousel/captcha-02.jpg`,
      altText: "Image 02",
    },
    {
      image: `${baseurl}asset/carousel/captcha-03.jpg`,
      altText: "Image 03",
    },
    {
      image: `${baseurl}asset/carousel/captcha-04.jpg`,
      altText: "Image 04",
    },
    {
      image: `${baseurl}asset/carousel/captcha-05.jpg`,
      altText: "Image 05",
    },
  ];

  return (
    <section
      id="Section03"
      className="section flex md:flex-row sm:flex-col justify-between items-center mb-16 sm:pt-8 h-fit"
    >
      <div className="md:w-1/2 sm:w-full flex flex-col">
        <h2 className="text-5xl font-bold mr-0  mb-4">
          Visit and Explore Our National Park
        </h2>
        <p className="text-gray-600 mr-0 mb-4">
          {`Immerse yourself in Indonesia’s wild beauty from our National Park, a vibrant sanctuary for unique flora and fauna. Nature awaits!`}
        </p>

        <div className="flex flex-row justify-between">
          <div className="lg:w-1/2 lgp:w-fit md:w-full sm:w-fit bg-gray-100 p-4 rounded">
            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-xs"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {carouselData.map((list, index) => (
                  <CarouselItem key={index}>
                    <div className="pb-4">
                      <Suspense>
                        <Image
                          src={list.image}
                          width={2121}
                          height={1408}
                          alt={list.altText}
                          className="w-full h-auto object-cover items-center rounded-lg"
                        />
                      </Suspense>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <h3 className="text-xl font-bold mb-2">Camp Leakey</h3>
            <a
              href="https://orangutan.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#48AFBC" }}
            >
              View Details
            </a>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 sm:w-full">
        <Suspense>
          <Image
            src={`${baseurl}asset/Artboard_1.png`}
            width={300}
            height={600}
            alt="Mobile application screenshot"
            className="w-full h-auto relative z-10"
          />
        </Suspense>
      </div>
    </section>
  );
};

export const Section04 = () => {
  return (
    <section
      id="Section04"
      className="section lg:h-[80vh] lgp:h-[45vh] md:h-[45vh] sm:h-fit mb-16 sm:pt-8 relative overflow-hidden"
    >
      <div className="w-full h-fit absolute lg:bottom-[6%] lgp:bottom-[-10%] md:bottom-[-10%] left-[-1rem] right-0 z-0 md:block sm:hidden">
        <Suspense>
          <Image
            src={`${baseurl}asset/Artboard_4.png`}
            width={1280}
            height={500}
            sizes="100%"
            alt="Mobile application screenshot"
            className="w-full h-auto relative rotate-12"
          />
        </Suspense>
      </div>
      <div className="w-full h-fit relative z-1">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-5xl font-bold">
            Navigating to our{" "}
            <span style={{ color: "#48AFBC" }}>National Park</span>
          </h2>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-full flex md:flex-row sm:flex-col flex-wrap justify-between mb-8">
            <div className="md:w-[33%] sm:full flex flex-row justify-between mb-4">
              <div className="w-full bg-gray-100 p-4 rounded-lg">
                <Suspense>
                  <Image
                    src={`${baseurl}asset/p_bun.jpeg`}
                    width={200}
                    height={200}
                    alt="Interest rate comparison"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                </Suspense>
                <h3 className="text-xl font-bold mb-2 flex flex-row items-center">
                  Pangkalan Bun{" "}
                  <span className="ml-[5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right w-[20px] h-[20px]"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </h3>
                <a
                  href="https://maps.app.goo.gl/aTgVxYbXaiZvCTq96"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#48AFBC" }}
                >
                  Navigate
                </a>
              </div>
            </div>
            <div className="md:w-[33%] sm:full flex flex-row justify-between mb-4">
              <div className="w-full bg-gray-100 p-4 rounded-lg">
                <Suspense>
                  <Image
                    src={`${baseurl}asset/kumai.jpg`}
                    width={200}
                    height={200}
                    alt="Interest rate comparison"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                </Suspense>
                <h3 className="text-xl font-bold mb-2 flex flex-row items-center">
                  Kumai
                  <span className="ml-[5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right w-[20px] h-[20px]"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </h3>
                <a
                  href="https://maps.app.goo.gl/tkiVjQS9Sh4imGCv5"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#48AFBC" }}
                >
                  Navigate
                </a>
              </div>
            </div>
            <div className="md:w-[33%] sm:full flex flex-row justify-between mb-4">
              <div className="w-full bg-gray-100 p-4 rounded-lg">
                <Suspense>
                  <Image
                    src={`${baseurl}asset/camp_leakey.jpg`}
                    width={200}
                    height={200}
                    alt="Interest rate comparison"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                </Suspense>
                <h3 className="text-xl font-bold mb-2 flex flex-row items-center">
                  Camp Leakey
                  <span className="ml-[5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin w-[20px] h-[20px]"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                </h3>
                <a
                  href="https://maps.app.goo.gl/VFY5q7mwuyXuNEgU8"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#48AFBC" }}
                >
                  Navigate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Section05 = () => {
  return (
    <section
      id="Section05"
      className="section h-fit flex flex-col md:items-center mb-16 sm:pt-8"
    >
      <div className="lg:h-[50vh] md:h-[55vh] sm:h-fit flex justify-between items-center w-full md:px-8">
        <div className="md:w-1/2 sm:w-full">
          <h2 className="text-5xl font-bold mb-4">
            This project needs you to succeed!
          </h2>
          <p className="text-gray-600 mb-4">
            Together, our actions can create real change. Let’s unite, work with
            purpose, and make a difference. Join us in saving the world—your
            impact starts now!
          </p>
        </div>
        <div className="relative md:w-1/2 sm:w-full"></div>
      </div>
    </section>
  );
};

export const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  // Copyright Data
  const copyright = [
    {
      description:
        "1. LowPoly humming-bird animated (https://skfb.ly/o9YBx) by alexi.smnd is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).",
    },
  ];

  // Policy Data
  const policy = [
    {
      description: "-- Data not available --",
    },
  ];

  return (
    <footer className="w-full p-4 border-t border-gray-200">
      <div className="flex md:flex-row sm:flex-col md:justify-between  md:items-center">
        <p className="text-gray-600 sm:text-center sm:mb-2">
          &copy; {year} Future Project
        </p>
        <div className="flex flex-row flex-wrap sm:justify-between items-center text-gray-600 sm:text-[14px]">
          <Dialog title="Copyright" dataList={copyright} space={true} />
          <span className="mx-6 md:block sm:hidden">|</span>
          <Dialog title="Privacy Policy" dataList={policy} />
          <span className="mx-6 md:block sm:hidden">|</span>
          <div className="w-fit flex flex-row items-center">
            <a href="#" className="text-gray-600">
              <i className="facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[18px] h-[18px]"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.29h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.098 2.796.143v3.24h-1.92c-1.507 0-1.8.717-1.8 1.767v2.314h3.59l-.467 3.417h-3.122V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </i>
            </a>

            <a href="#" className="text-gray-600 ml-4">
              <i className="youtube ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[24px] h-[24px]"
                >
                  <path d="M23.498 6.186a2.958 2.958 0 0 0-2.081-2.087C19.734 3.5 12 3.5 12 3.5s-7.736 0-9.417.599a2.958 2.958 0 0 0-2.081 2.087C0 7.889 0 12 0 12s0 4.111.502 5.814a2.958 2.958 0 0 0 2.081 2.087C4.264 20.5 12 20.5 12 20.5s7.736 0 9.417-.599a2.958 2.958 0 0 0 2.081-2.087C24 16.111 24 12 24 12s0-4.111-.502-5.814zM9.75 15.568V8.432L15.568 12 9.75 15.568z" />
                </svg>
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Container3D = () => {
  // render Model
  const [isready, setisready] = useState<boolean>(false);
  const birdRef = useRef<THREE.Object3D | null>(null); // Ref with a type for bird
  const mixerRef = useRef<THREE.AnimationMixer | null>(null); // Ref with a type for mixer

  // 3D Model Function
  const loadModel = async () => {
    const scene = new THREE.Scene();
    const loader = new GLTFLoader();
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    const topLight = new THREE.DirectionalLight(0xffffff, 1.3);
    let camera: THREE.PerspectiveCamera | undefined;
    let desktop: boolean;
    let desktop_portrait: boolean;
    let tablet: boolean;
    let mobile: boolean;

    // Positions Object
    const positionObject = [
      {
        id: "Section01",
        position: { x: 2.5, y: 0.2, z: 0 },
        rotation: { x: 0, y: -1, z: 0 },
      },
      {
        id: "Section02",
        position: { x: -3, y: 0, z: 0 },
        rotation: { x: 1, y: -0.5, z: 0 },
      },
      {
        id: "Section03",
        position: { x: 2.7, y: 0, z: 0 },
        rotation: { x: 0, y: 1, z: 0 },
      },
      {
        id: "Section04",
        position: { x: 1, y: -1, z: 0 },
        rotation: { x: 0, y: -1, z: 0 },
      },
      {
        id: "Section05",
        position: { x: 2.5, y: 0.5, z: 0 },
        rotation: { x: 0, y: -1, z: 0 },
      },
    ];
    const positionObject_MD_Portrait = [
      {
        id: "Section01",
        position: { x: 1.5, y: 3, z: 0 },
        rotation: { x: 0, y: -1, z: 0 },
      },
      {
        id: "Section02",
        position: { x: -2, y: 0.5, z: 0 },
        rotation: { x: 1, y: -0.5, z: 0 },
      },
      {
        id: "Section03",
        position: { x: 1.7, y: 1, z: 0 },
        rotation: { x: 0, y: 1, z: 0 },
      },
      {
        id: "Section04",
        position: { x: 1, y: -0.5, z: 0 },
        rotation: { x: 0, y: -1, z: 0 },
      },
      {
        id: "Section05",
        position: { x: 1.5, y: 1, z: 0 },
        rotation: { x: 0, y: -1, z: 0 },
      },
    ];
    const positionObject_MD = [
      {
        id: "Section01",
        position: { x: 1.5, y: 3, z: 0 },
        rotation: { x: 0, y: -1, z: 0 },
      },
      {
        id: "Section02",
        position: { x: -2, y: 0.5, z: 0 },
        rotation: { x: 1, y: -0.5, z: 0 },
      },
      {
        id: "Section03",
        position: { x: 1.7, y: 1, z: 0 },
        rotation: { x: 0, y: 1, z: 0 },
      },
      {
        id: "Section04",
        position: { x: 1, y: -0.5, z: 0 },
        rotation: { x: 0, y: -1, z: 0 },
      },
      {
        id: "Section05",
        position: { x: 1.5, y: 1, z: 0 },
        rotation: { x: 0, y: -1, z: 0 },
      },
    ];
    const positionObject_SM = [
      {
        id: "Section01",
        position: { x: 0, y: -2, z: 0 },
        rotation: { x: 0, y: -1, z: 0 },
      },
      {
        id: "Section02",
        position: { x: 0, y: -4, z: 0 },
        rotation: { x: -1, y: 3, z: 1 },
      },
      {
        id: "Section03",
        position: { x: 0, y: -3, z: 0 },
        rotation: { x: 0, y: 1.5, z: 0 },
      },
      {
        id: "Section04",
        position: { x: 1.5, y: -1, z: 0 },
        rotation: { x: 0, y: -1, z: 0 },
      },
      {
        id: "Section05",
        position: { x: 1.5, y: 0.5, z: 0 },
        rotation: { x: 0, y: -1, z: 0 },
      },
    ];

    const setCamera = async () => {
      desktop = window.matchMedia("(min-width: 1024px)").matches;
      desktop_portrait = window.matchMedia(
        "(min-width: 1024px) and (orientation:portrait)"
      ).matches;
      tablet = window.matchMedia(
        "(min-width: 768px) and (max-width: 1024px)"
      ).matches;
      mobile = window.matchMedia(
        "(min-width: 320px) and (max-width: 768px)"
      ).matches;

      // console.log(screenSize);
      // console.log(screenSize >= 320);
      // console.log(screenSize < 768);

      // console.log("mobile", mobile);
      // console.log("tablet", tablet);
      // console.log("desktop", desktop);

      // Set Camera
      if (mobile) {
        camera = new THREE.PerspectiveCamera(
          40,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        setisready(true);
        return;
      }
      if (tablet) {
        camera = new THREE.PerspectiveCamera(
          39,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        setisready(true);
        return;
      }
      if (desktop_portrait) {
        camera = new THREE.PerspectiveCamera(
          40,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        setisready(true);
        return;
      }
      if (desktop) {
        camera = new THREE.PerspectiveCamera(
          25,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        setisready(true);
      }
    };

    await setCamera();

    if (!camera) return;
    camera.position.z = 15;
    const element = document.getElementById("container3D");
    loader.load(`${baseurl}asset/lowpoly_humming-bird_animated.glb`, (gltf) => {
      birdRef.current = gltf.scene;
      scene.add(birdRef.current);

      mixerRef.current = new THREE.AnimationMixer(birdRef.current);
      mixerRef.current.clipAction(gltf.animations[0]).play();
      modelMove();
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    element?.appendChild(renderer.domElement);

    // lighting
    scene.add(ambientLight);
    topLight.position.set(500, 500, 500);

    // Rendering Loop
    const rerender3D = () => {
      if (!camera) return;
      requestAnimationFrame(rerender3D);
      renderer.render(scene, camera);
      mixerRef.current?.update(0.02);
    };
    rerender3D();

    // movement
    const modelMove = () => {
      const section = document.querySelectorAll(".section");
      let currentSection: string | undefined = undefined;

      section.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          currentSection = el.id;
        }
      });

      const position3DModel = () => {
        if (mobile) {
          return positionObject_SM[positionActive];
        }
        if (tablet) {
          return positionObject_MD[positionActive];
        }
        if (desktop_portrait) {
          return positionObject_MD_Portrait[positionActive];
        }
        if (desktop) {
          return positionObject[positionActive];
        }
      };

      const positionActive = positionObject.findIndex(
        (elm) => elm.id === currentSection
      );

      if (positionActive >= 0 && birdRef.current !== null) {
        const newCordinate = position3DModel();

        gsap.to(birdRef.current.position, {
          y: newCordinate?.position.y,
          x: newCordinate?.position.x,
          z: newCordinate?.position.z,
          duration: 1,
          ease: "power1.out",
        });

        gsap.to(birdRef.current.rotation, {
          y: newCordinate?.rotation.y,
          x: newCordinate?.rotation.x,
          z: newCordinate?.rotation.z,
          duration: 1,
          ease: "power1.out",
        });
      }
    };
    window.addEventListener("scroll", () => {
      if (!birdRef.current) return;
      modelMove();
    });

    window.addEventListener("resize", () => {
      setCamera();
      if (!camera) return;
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });
  };

  useEffect(() => {
    if (typeof window == "undefined") return;
    setTimeout(() => {
      loadModel();
    }, 2000);
  }, []);

  // Reload The Page On Window Resize
  useEffect(() => {
    if (isready === true) return;
    if (typeof window === "undefined") return;
    window.scrollTo(0, 0);
    window.addEventListener("resize", () => {
      window.location.reload();
    });
  }, [isready]);

  return (
    <div
      id="container3D"
      className="fixed inset-0 z-50 pointer-events-none"
    ></div>
  );
};

type DialogProps = {
  title: string;
  dataList: {
    description: string;
  }[];
  textBTNcolor?: string;
  space?: boolean;
};

export const Dialog = ({
  dataList,
  title,
  textBTNcolor,
  space,
}: DialogProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <span
          className={
            textBTNcolor
              ? `text-[${textBTNcolor}]`
              : "text-gray-600 cursor-pointer"
          }
        >
          {" "}
          {title}
        </span>
      </AlertDialogTrigger>
      <AlertDialogContent className="flex-wrap overflow-hidden">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col text-wrap ">
            <Suspense>
              {dataList.map((list, index) => (
                <span
                  key={index + list.description}
                  className={[
                    "max-w-[90%] text-pretty ",
                    !space ? "" : "mb-3",
                  ].join(" ")}
                >
                  {list.description}
                </span>
              ))}
            </Suspense>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

type MobileNavigationProps = {
  title: string | JSX.Element;
  dataMenu: {
    title: string;
    href: string;
  }[];
  extraButton: JSX.Element;
};
export const MobileNavigation = ({
  title,
  dataMenu,
  extraButton,
}: MobileNavigationProps) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>{title}</SheetTrigger>
      <SheetContent className="w-[100vw] m-0">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription />
        </SheetHeader>
        <div className="w-full h-fit flex flex-col  items-center">
          <ul className="w-full my-6">
            {dataMenu.map((list, index) => (
              <li
                key={index + list.title}
                className="w-full text-lg hover:text-gray-600 font-bold border-b p-3"
                onClick={() => {
                  setOpen(false);

                  setTimeout(() => {
                    router.push(list.href);
                  }, 1000);
                }}
              >
                {list.title}
              </li>
            ))}
          </ul>
          {extraButton && (
            <div className="w-full absolute bottom-2 left-0 right-0 p-6">
              {extraButton}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
