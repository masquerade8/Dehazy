//  ---------------------------------------------- extra last code ----------------------------------------------
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { FaSun, FaMoon, FaUpload, FaSpinner, FaMagic } from "react-icons/fa";

function App() {
  const [image, setImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [theme, setTheme] = useState("dark");
  const [isLoading, setIsLoading] = useState(false);

  // Scroll to processing section after upload
  useEffect(() => {
    if (image) {
      setTimeout(() => {
        const element = document.getElementById('processing-section');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 300);
    }
  }, [image]);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:5000/dehaze", formData);
      setProcessedImage(`data:image/png;base64,${response.data.image}`);
    } catch (error) {
      console.error("Error processing image", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`app-container ${theme}`}>
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <img src="/D.png" alt="Dehazy Logo" className="logo-image" />
            <h1 className="logo-text">Dehazy</h1>
          </div>
          <button className="theme-toggle-button" onClick={handleThemeToggle}>
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </header>

      <main className="content">
        <section className="hero-section">
          <div className="hero-content">
            <h2>Remove Haziness from Photos in Seconds</h2>
            <p>Automatically remove fog, mist, and haze using AI-powered technology</p>
            <label className="file-input-label hero-upload">
              <input type="file" className="file-input" onChange={handleImageChange} />
              <div className="upload-card">
                <FaUpload className="upload-icon" />
                <span>Drag & Drop or Click to Upload</span>
                <p className="supported-formats">Supported formats: JPEG, PNG</p>
              </div>
            </label>
          </div>
        </section>

        

        {image && (
          <section className="processing-section" id="processing-section">
            <div className="results-container">
              <div className="image-column">
                <h3 className="image-title">Original Image</h3>
                <div className="image-preview">
                  <img src={URL.createObjectURL(image)} alt="Original" />
                </div>
              </div>
              
              {processedImage && (
                <div className="image-column">
                  <h3 className="image-title">Processed Result</h3>
                  <div className="image-preview">
                    <img src={processedImage} alt="Processed" />
                  </div>
                </div>
              )}
            </div>

            <button className={`process-button ${isLoading ? "processing" : ""}`} 
              onClick={handleUpload} 
              disabled={isLoading}>
              {isLoading ? (
                <>
                  <FaSpinner className="spin" />
                  Processing...
                </>
              ) : (
                "Dehaze Now"
              )}
            </button>
          </section>
        )}

        <section className="features-section">
          <div className="feature-card">
            <FaMagic className="feature-icon" />
            <h3>AI-Powered Dehazing</h3>
            <p>Advanced algorithms automatically detect and remove haze</p>
          </div>
          <div className="feature-card">
            <FaMagic className="feature-icon" />
            <h3>Quality Preservation</h3>
            <p>Maintain original image quality while removing imperfections</p>
          </div>
          <div className="feature-card">
            <FaMagic className="feature-icon" />
            <h3>Instant Results</h3>
            <p>Get crystal-clear images in less than 3 seconds</p>
          </div>
        </section>

        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Upload Image</h3>
              <p>Select your hazy photo from your device</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>AI Processing</h3>
              <p>Our algorithm automatically removes haze</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Download Result</h3>
              <p>Save your crystal-clear image</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 Dehazy. Professional Image Enhancement Platform</p>
      </footer>
    </div>
  );
}

export default App;
//  ---------------------------------------------- now extra last code without scroll ----------------------------------------------

// import React, { useState } from "react";
// import "./App.css";
// import axios from "axios";
// import { FaSun, FaMoon, FaUpload, FaSpinner, FaMagic } from "react-icons/fa";

// function App() {
//   const [image, setImage] = useState(null);
//   const [processedImage, setProcessedImage] = useState(null);
//   const [theme, setTheme] = useState("dark");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleThemeToggle = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!image) return;

//     setIsLoading(true);
//     const formData = new FormData();
//     formData.append("image", image);

//     try {
//       const response = await axios.post("http://localhost:5000/dehaze", formData);
//       setProcessedImage(`data:image/png;base64,${response.data.image}`);
//     } catch (error) {
//       console.error("Error processing image", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className={`app-container ${theme}`}>
//       <header className="header">
//         <div className="header-content">
//           <div className="logo-container">
//             <img src="/D.png" alt="Dehazy Logo" className="logo-image" />
//             <h1 className="logo-text">Dehazy</h1>
//           </div>
//           <button className="theme-toggle-button" onClick={handleThemeToggle}>
//             {theme === "dark" ? <FaSun /> : <FaMoon />}
//           </button>
//         </div>
//       </header>

//       <main className="content">
//         {/* Hero Section */}
//         <section className="hero-section">
//           <div className="hero-content">
//             <h2>Remove Haziness from Photos in Seconds</h2>
//             <p>Automatically remove fog, mist, and haze from your images with AI-powered precision</p>
//             {/* <label className="file-input-label hero-upload">
//               <input type="file" className="file-input" onChange={handleImageChange} />
//               <div className="upload-card">
//                 <FaUpload className="upload-icon" />
//                 <span>Upload Photo</span>
//               </div>
//             </label> */}
//             <label className="file-input-label hero-upload">
//               <input 
//                 type="file" 
//                 className="file-input" 
//                 onChange={handleImageChange}
//                 accept="image/*"
//               />
//               <div className="upload-card">
//                 <FaUpload className="upload-icon" />
//                 <span>Drag & Drop or Click to Upload</span>
//                 <p className="supported-formats">Supported formats: JPEG, PNG</p>
//               </div>
//             </label>
//           </div>
//         </section>

        

//         {/* Results Section */}
//         {image && (
//           <section className="processing-section">
//             <div className="results-container">
//               <div className="image-column">
//                 <h3 className="image-title">Original Image</h3>
//                 <div className="image-preview">
//                   <img src={URL.createObjectURL(image)} alt="Original" />
//                 </div>
//               </div>
              
//               {processedImage && (
//                 <div className="image-column">
//                   <h3 className="image-title">Processed Result</h3>
//                   <div className="image-preview">
//                     <img src={processedImage} alt="Processed" />
//                   </div>
//                 </div>
//               )}
//             </div>

//             <button className={`process-button ${isLoading ? "processing" : ""}`} onClick={handleUpload} disabled={isLoading}>
//               {isLoading ? (
//                 <>
//                   <FaSpinner className="spin" />
//                   Processing...
//                 </>
//               ) : (
//                 "Dehaze Now"
//               )}
//             </button>
//           </section>
//         )}

//         {/* Features Section */}
//         <section className="features-section">
//           <div className="feature-card">
//             <FaMagic className="feature-icon" />
//             <h3>AI-Powered Dehazing</h3>
//             <p>Our advanced AI automatically detects and removes haze from your photos in seconds</p>
//           </div>
//           <div className="feature-card">
//             <FaMagic className="feature-icon" />
//             <h3>Color Correction</h3>
//             <p>Restore natural colors and contrast lost due to atmospheric conditions</p>
//           </div>
//           <div className="feature-card">
//             <FaMagic className="feature-icon" />
//             <h3>Quality Preservation</h3>
//             <p>Maintain original image quality while removing unwanted haze effects</p>
//           </div>
//         </section>


//         {/* How It Works */}
//         <section className="how-it-works">
//           <h2>How to Dehaze Your Photos</h2>
//           <div className="steps-container">
//             <div className="step-card">
//               <div className="step-number">1</div>
//               <h3>Upload Image</h3>
//               <p>Select your hazy photo from your device</p>
//             </div>
//             <div className="step-card">
//               <div className="step-number">2</div>
//               <h3>AI Processing</h3>
//               <p>Our algorithm automatically removes haze</p>
//             </div>
//             <div className="step-card">
//               <div className="step-number">3</div>
//               <h3>Download Result</h3>
//               <p>Save your crystal-clear image</p>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className="footer">
//         <p>© 2024 Dehazy. Professional Image Enhancement Platform</p>
//       </footer>
//     </div>
//   );
// }

// export default App;