import React from 'react';
import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center text-center">
            <img 
              src="https://i.ibb.co/8DY1yZh/Whats-App-Image-2024-12-30-at-10-24-13-AM.jpg"
              alt="Mohammed Faris Ahmed"
              className="w-48 h-48 rounded-full border-4 border-gray-700 shadow-lg mb-6"
            />
            <h1 className="text-4xl font-bold mb-4">Mohammed Faris Ahmed</h1>
            <p className="text-xl mb-6">Computer Science & AI/ML Student</p>
            <div className="flex gap-4 mb-8">
              <a href="mailto:mfariscse@gmail.com" className="flex items-center gap-2 hover:text-blue-400">
                <Mail size={20} /> mfariscse@gmail.com
              </a>
              <a href="tel:+917075148204" className="flex items-center gap-2 hover:text-blue-400">
                <Phone size={20} /> +91 7075148204
              </a>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/mfariscse" 
                 className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
                <Github size={20} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/mohammed-faris-ahmed-5101b2252/" 
                 className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
                <Linkedin size={20} /> LinkedIn
              </a>
              <button className="bg-gray-800 text-gray-100 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-700">
                <Download size={20} /> Download Resume
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-100">Education</h2>
          <div className="bg-gray-800 rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold">B.Tech in Computer Science and AI/ML</h3>
              <p className="text-gray-400">SR University | Sept 2022 – May 2026</p>
              <p className="text-gray-300">CGPA: 7.55</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Intermediate Studies</h3>
              <p className="text-gray-400">2020 – 2022</p>
              <p className="text-gray-300">CGPA: 9.7</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Secondary Schooling</h3>
              <p className="text-gray-400">2017 – 2020</p>
              <p className="text-gray-300">CGPA: 8.0</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-100">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Object Detection and Distance Estimation</h3>
              <p className="text-gray-400">Advanced computer vision project implementing object detection with distance estimation using Python, OpenCV, and Deep Learning.</p>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Vehicle Classification</h3>
              <p className="text-gray-400">Vehicle classification system using CNN and ResNet architecture for high accuracy in identifying vehicle types, implemented with TensorFlow.</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-100">Experience</h2>
          <div className="bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold">Machine Learning Intern</h3>
            <p className="text-gray-400 mb-4">CodSoft | June 2024</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Developed a robust spam detection model using NLP techniques</li>
              <li>Built a churn modeling system for predicting customer retention using classification algorithms</li>
            </ul>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-100">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Programming & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'C', 'SQL', 'DSA', 'OpenCV', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'].map((skill) => (
                  <span key={skill} className="bg-gray-700 text-blue-400 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Image Classification', 'Distance Estimation'].map((skill) => (
                  <span key={skill} className="bg-gray-700 text-indigo-400 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-100">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Microsoft Certified: Azure AI Fundamentals',
              'IBM Data Science Professional Certificate',
              'Coursera: Machine Learning by Stanford University',
              'DeepLearning.AI TensorFlow Developer Specialization'
            ].map((cert) => (
              <div key={cert} className="bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-100">{cert}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Mohammed Faris Ahmed. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;