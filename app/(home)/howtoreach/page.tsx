"use client";
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Train, Bus, MapPin, Navigation } from 'lucide-react';
import { TabsDemo } from '@/components/DisplayTabs';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from '@/components/ui/animated-modal';
import Image from 'next/image';
import { CoolMode } from '@/components/ui/cool-mode';

function App() {
  const [selectedRoute, setSelectedRoute] = React.useState<string | null>(null);
  
  const images = [
    "/assets/how-to-reach/htr-1.JPG",
    "/assets/how-to-reach/htr-2.JPG",
    "/assets/how-to-reach/htr-3.JPG",
    "/assets/how-to-reach/htr-4.JPG",
    "/assets/how-to-reach/htr-5.JPG",
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with 3D Train */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551269901-5c5e14c25df7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex harry-text text-left items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[6rem] font-bold text-yellow-400 mb-4">
              How to Reach IIT Mandi
            </h1>
            <p className="text-[3rem] text-white/90">Your magical journey begins here</p>
          </motion.div>
        </div>
      </div>

      {/* Travel Routes */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 py-16"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Air Route */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="bg-yellow-950/30 p-6 rounded-lg border border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedRoute('air')}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Plane className="text-yellow-400 w-8 h-8" />
              </motion.div>
              <h2 className="text-2xl font-bold text-yellow-400">By Air</h2>
            </div>
            <AnimatePresence>
              {selectedRoute === 'air' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="space-y-4 overflow-hidden"
                >
                  <p className="text-white/90">Nearest airports:</p>
                  <ul className="list-disc list-inside space-y-2 text-white/80">
                    <li>Bhuntar Airport, Kullu (60 km)</li>
                    <li>Gaggal Airport, Dharamshala (150 km)</li>
                    <li>Chandigarh International Airport (200 km)</li>
                  </ul>
                  <p className="text-sm text-white/70">From these airports, you can take a taxi or bus to IIT Mandi.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Rail Route */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="bg-yellow-950/30 p-6 rounded-lg border border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedRoute('rail')}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Train className="text-yellow-400 w-8 h-8" />
              </motion.div>
              <h2 className="text-2xl font-bold text-yellow-400">By Train</h2>
            </div>
            <AnimatePresence>
              {selectedRoute === 'rail' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="space-y-4 overflow-hidden"
                >
                  <p className="text-white/90">Nearest railway stations:</p>
                  <ul className="list-disc list-inside space-y-2 text-white/80">
                    <li>Una Railway Station (110 km)</li>
                    <li>Kiratpur Railway Station (160 km)</li>
                    <li>Chandigarh Railway Station (200 km)</li>
                  </ul>
                  <p className="text-sm text-white/70">Regular buses and taxis are available from these stations to Mandi.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Road Route */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="bg-yellow-950/30 p-6 rounded-lg border border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedRoute('road')}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Bus className="text-yellow-400 w-8 h-8" />
              </motion.div>
              <h2 className="text-2xl font-bold text-yellow-400">By Road</h2>
            </div>
            <AnimatePresence>
              {selectedRoute === 'road' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="space-y-4 overflow-hidden"
                >
                  <p className="text-white/90">Major bus routes:</p>
                  <ul className="list-disc list-inside space-y-2 text-white/80">
                    <li>Delhi → Mandi (500 km, ~12 hrs)</li>
                    <li>Chandigarh → Mandi (200 km, ~6 hrs)</li>
                    <li>Shimla → Mandi (150 km, ~4 hrs)</li>
                  </ul>
                  <p className="text-sm text-white/70">Regular HRTC and private buses available.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Detailed Instructions */}
        <motion.div
          variants={item}
          className="mt-16 p-8 rounded-lg border border-yellow-400/30 h-auto"
        >
          <h2 className="mb-12 text-2xl font-bold text-yellow-400 flex items-center gap-3">
            <Navigation className="w-6 h-6" />
            Guide to IIT Mandi from Mandi
          </h2>
          <TabsDemo />
        </motion.div>

        {/* Map Location */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center flex justify-center"
        >
          <Modal>
            <ModalTrigger className="harry-text-vsmall border border-yellow-300 flex justify-center group/modal-btn mt-10">
              <span className="group-hover/modal-btn:translate-x-40 text-yellow-300 text-center transition duration-500 harry-text text-[1.5rem]">
                Hover here!
              </span>
              <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20 harry-text text-[1.3rem]">
              📍
              </div>
            </ModalTrigger>
          <ModalBody>
            <ModalContent>
                <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                Check out {" "}
                <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                  IIT Mandi
                </span>{" "}
                on Google Map! 🌄
                </h4>
              <div className="flex justify-center items-center">
                {images.map((image, idx) => (
                  <motion.div
                    key={"images" + idx}
                    style={{
                      rotate: Math.random() * 20 - 10,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    whileTap={{
                      scale: 1.1,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt="bali images"
                      width="500"
                      height="500"
                      className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                <div className="flex  items-center justify-center">
                  
                </div>
                <div className="flex items-center justify-center">

                </div>
                <div className="flex items-center justify-center">

                </div>
                <div className="flex  items-center justify-center">

                </div>
                <div className="flex items-center justify-center">

                </div>
                <div className="flex items-center justify-center">

                </div>
              </div>
            </ModalContent>
            <ModalFooter className="gap-4">
              <CoolMode>
                <a href='https://maps.app.goo.gl/am2VXhLdSqJ1sDLt9' target="_blank">
                  <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                    🗺️
                  </button>
                </a>
              </CoolMode>
            </ModalFooter>
          </ModalBody>
        </Modal>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;