import { setUserProperties } from "firebase/analytics";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import "./portfolio.css";

export default function Portfolio() {
  const location = useLocation();
  console.log(location);
	const [edu, setEdu] = useState(false);
	const [proj, setProj] = useState(false);
	const [research, setResearch] = useState(false);
	const [exp, setExp] = useState(false);
	const [filter, setFilter] = useState("all");
	useEffect(() => {
		if (filter == "all") {
			setEdu(true);
			setProj(true);
			setResearch(true);
			setExp(true);
		} else if (filter == "edu") {
			setEdu(true);
			setProj(false);
			setResearch(false);
			setExp(false);
		} else if (filter == "proj") {
			setEdu(false);
			setProj(true);
			setResearch(false);
			setExp(false);
		} else if (filter == "research") {
			setEdu(false);
			setProj(false);
			setResearch(true);
			setExp(false);
		} else {
			setEdu(false);
			setProj(false);
			setResearch(false);
			setExp(true);
		}
	}, [filter]);

  return (
    <>
      <div className="timeline-content">
	      <h1>Portfolio</h1>

				<div id="btnContainer">
					<button class="btn" onClick={() => setFilter("all")}>Show all</button>
					<button class="btn" onClick={() => setFilter("proj")}> Projects</button>
					<button class="btn" onClick={() => setFilter("exp")}> Experience</button>
					<button class="btn" onClick={() => setFilter("research")}> Research</button>
					<button class="btn" onClick={() => setFilter("edu")}> Education</button>
				</div>
			  
				<ul class="timeline">

					<div className={edu ? "show" : "hide"}>
						<li>
							<h3>M.S. at Georgia Institute of Technology</h3>
							<p>
								Aug 2021 - May 2023
								<br></br><br></br>
								<i>Coursework:</i> Computer Vision, Robot Planning
								<br></br><br></br>
								<i>GPA: </i> 4.0
							</p>    
						</li>
					</div>

					<div className={proj ? "show" : "hide"}>
						<li>
							<h3>Field-Aided RRT*</h3>
							<p>
								TODO
							</p>    
						</li>
					</div>

					<div className={proj ? "show" : "hide"}>
						<li class="col-sm" id="date">
							<h3>EEG-controlled Robotic Hand</h3>
							<p>
								TODO
							</p>    
						</li>
					</div>

					<div className={edu ? "show" : "hide"}>
						<li class="event" id="date" data-date="Aug 2019 - May 2022">
							<h3>B.S. at Georgia Institute of Technology</h3>
							<p>
								Aug 2019 - May 2022
								<br></br><br></br>
								<b>Coursework:</b> Robotics, Prototyping, AI, ML, Networks, 
									Computer Systems I and II, Algorithms I and II, Databases, 
									Object-Oriented Programming, Linear Algebra, Probability/Statistics
								<br></br><br></br>
								<i>GPA:</i> 3.9
							</p> 
						</li>
					</div>

					<div className={exp ? "show" : "hide"}>
						<li class="event">
							<h3>Robotics and Perception Teaching Assistant</h3>
							<p>
								Aug 2021 - May 2022
								<br></br><br></br>
								Undergraduate teaching assistant for Robotics and Perception (CS 3630), 
								where I help students understand the purpose of robots, 
								design a control architecture for mobile robots, implement navigation and 
								localization based on sensor fusion, and more. I also hold weekly 
								office hours to work with students one-on-one.
							</p>
							<center>
								<video width="320" height="240" controls>
									<source src="/assets/3630.mp4" type="video/mp4"></source>
										Your browser does not support the video tag.
								</video>
								<p><i>ROS Simulation of Particle Filter Homework</i></p>
							</center>
						</li>
					</div>

					<div className={research ? "show" : "hide"}>
						<li class="event" id="date">
							<h3>Sign Language Recognition Research - Adaptive Learning and ML Infrastructure</h3>
							<p>
								Jul 2021 - May 2022
								<br></br><br></br>
								TODO
							</p>  
						</li>
					</div>

					{/* <div className={proj ? "show" : "hide"}>
						<li class="event" data-date="Nov 2021 - Present">
							<h3>Autonomous Driving Robot</h3>
							<p>I am working on object detection in C++ for Raspberry Pi camera input and mapping output to motors through an Arduino and motor controller. I am also reading up on imitation learning and SLAM, as
								well as setting up a Live Persistent Ubuntu USB for faster processing with ROS.
							</p>
							<a href="https://github.com/ishanchadha01/autonomous-robot">Link to Github</a>
						</li>
					</div> */}

					<div className={research ? "show" : "hide"}>
						<li class="event">
							<h3>President's Undergraduate Research Award</h3>
							<p>
								November 2021
								<br></br><br></br>
								Competitively awarded funding for research
								at Georgia Tech for Spring 2022. Proposed research in the field of 
								gesture recognition with small team of other undergraduates.
							</p>
						</li>
					</div>

					<div className={research ? "show" : "hide"}>
						<li class="event" id="date">
							<h3>Sign Language Recognition Research - HAR Feature Selection</h3>
							<p>
								Jan - Dec 2021
								<br></br><br></br>
								I experimented with 2 techniques for feature selection: offline methods and online methods. Offline, I
								used output from commonly confused words in sign language, such as in/above, to train separate models.
								Online, certain states were segmentally boosted	during training to have more weight in recognizing the sign. 
								The image below shows the joint hierarchy from which we had to selectively 
								produce meaningful features for HAR, or human activity recognition.
							</p>
							<a href="https://github.com/ishanchadha01/CopyCat-HTK">
								<center>
								<figure>
									<img src="/assets/kinect.png"></img>
									<figcaption>Link to Github</figcaption>
								</figure>
								</center>
							</a>
						</li>
					</div>

					<div className={exp ? "show" : "hide"}>
						<li class="event">
							<h3>Software Engineering Intern at Capital One</h3>
							<p>
								Jun - Aug 2021
								<br></br><br></br>
								As a software engineering intern at Capital One, I accomplished the following:
								<br></br><br></br>
								- Tasked with designing new search architecture across voice response graph database. 
								<br></br><br></br>
								- Employed Django ORM to bring search time from 2 sec to 50 ms. 
								<br></br><br></br>
								- Optimized text embedding by replacing CharCNN with BERT in AWS S3 buckets to bring tokenization time from 50 hours to 6 hours. 
								<br></br><br></br>
								- Leveraged FAISS for similarity indexing, giving realistic, real-time responses to noisy queries with search engine in RAM. 
								<br></br><br></br>
								- Began model Dockerization and setup on AWS EC2 instance. 
								<br></br><br></br>
								- Team leader in company hackathon, producing AI customer chatbot that generates responses for Eno to train on based on past call center data.
							</p>    
						</li>
					</div>

					<div className={exp ? "show" : "hide"}>
						<li class="event" id="date">
							<h3>Senior Algorithms Course Teaching Assistant</h3>
							<p>
								May - Jul 2021
								<br></br><br></br>
								Undergraduate teaching assistant for Design and Analysis of Algorithms (CS 3510), 
								a senior computer science course at Georgia Tech, 
								teaching topics such as graph algorithms, dynamic programming, and NP completeness. 
								Also hold weekly office hours and help students one-on-one.
							</p>    
						</li>
					</div>

					<div className={research ? "show" : "hide"}>
						<li class="event" id="date">
							<h3>1st Place at Human Factors in Computing Systems (CHI) and Publication</h3>
							<p>
								May 2021
								<br></br><br></br>
								In this paper, we compared our optimized Hidden Markov Models 
								to state-of-the-art Transformer models for recognition in the 
								videos, outperforming them on both the word and sentence level.
							</p>    
							<a href="https://dl.acm.org/doi/10.1145/3411763.3451523">Link to Publication</a>
						</li>
					</div>

					<div className={exp ? "show" : "hide"}>
						<li class="event" id="date">
							<h3>Discrete Math Teaching Assistant</h3>
							<p>
								Jan - May 2021
								<br></br><br></br>
								Undergraduate teaching assistant for Honors Discrete Math for Computer Science (CS 2051) at Georgia Tech, 
								teaching topics such as graph theory, probability, and mathematical proofs for common algorithms.
							</p>    
						</li>
					</div>

					<div className={proj ? "show" : "hide"}>
						<li class="event" id="date">
							<h3>Stock Trading and Analysis with Deep Learning</h3>
							<p>
								Apr 2021
								<br></br><br></br>
								I examined the success of an LSTM-CNN for stock price prediction with basic information 
								such as the stock's close price as well as more complex indicators, 
								including sentiment analysis using BERT and anomaly detection for a currency basket. 
								The anomaly detection incorporates particle swarm optimization as a 
								more efficient alternative to the optimization step in a deep unsupervised neural network. 
							</p> 
							<a href="https://github.com/ishanchadha01/finance-intelligence">
								<center>
								<figure>
									<img src="/assets/stocks.png"></img>
									<figcaption>Link to Github/Paper</figcaption>
								</figure>
								</center>
							</a>
						</li>
					</div>

					<div className={proj ? "show" : "hide"}>
						<li class="event" id="date">
							<h3>Vaccine Scheduler App</h3>
							<p>
								Jan 2021
								<br></br><br></br>
								An app for managing risk factors in developing a comprehensive approach to Covid vaccine distribution. 
								Used regression to analyze risk factors and connected backend to UI with Flask server.
							</p>
							<center>
								<iframe width="400" height="220" src="https://www.youtube.com/embed/NBlF728Z9yA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
								<br></br>
								<a href="https://github.com/baoalvin1/vaccinescheduler">Link to Github</a>
							</center>
						</li>
					</div>

					<div className={exp ? "show" : "hide"}>
						<li class="event" id="date">
							<h3>Computer Vision Intern at Alien Attorney</h3>
							<p>
								Sep 2020 - Jan 2021
								<br></br><br></br>
								I applied Google Cloud Vision OCR for extracting information from legal documents. 
								I also performed data augmentation and form recognition with Tensorflow. 
								This functionality was displayed through a Dockerized Django site.
							</p>    
						</li>
					</div>

					<div className={research ? "show" : "hide"}>
						<li class="event" id="date">
							<h3>Sign Language Recognition Research - Pose Estimation Frameworks</h3>
							<p>
								Aug 2020 - Dec 2020
								<br></br><br></br>
								I developed a pipeline for testing CMU's AlphaPose pose estimation tool 
								against Google's Mediapipe and Microsoft's Kinect. I also build a new PC 
								to run AlphaPose experiments, adding GPUs to improve performance.
							</p>  
							<a href="https://github.com/ishanchadha01/CopyCat-HTK">
								<center>
								<figure>
									<img src="/assets/alphapose.png"></img>
									<figcaption>Link to Github</figcaption>
								</figure>
								</center>
							</a>
						</li>
					</div>

					<div className={research ? "show" : "hide"}>
						<li class="event" id="date">
							<h3>Sign Language Recognition Research - Visualization</h3>
							<p>
								Jan - Jul 2020
								<br></br><br></br>
								I contributed to open source library "pympi", adding Gaussian displays of each state 
								of a Hidden Markov Model for troubleshooting purposes, as well as starting visualization 
								of model topology. I used Elan, a tool widely found in the ASL community, for visualization.
							</p>    
							<a href="https://github.com/ishanchadha01/pympi">
								<center>
								<figure>
									<img src="/assets/elan.png"></img>
									<figcaption>Link to Forked Repo</figcaption>
								</figure>
								</center>
							</a>
						</li>
					</div>

					<div className={proj ? "show" : "hide"}>
						<li class="event" id="date">
							<h3>EEG Modeling and Generation</h3>
							<p>
								Jun 2020 - Jul 2020
								<br></br><br></br>
								I generated time-series EEG data for prediction and interpolation 
								applied to finding early onset neurological disorders and brain-computer interfaces. 
								I tested Generative Adversarial Networks, Long-Short Term Memory neural networks, 
								and Support Vector Regression in conjunction with a Hidden Markov Model.
							</p>    
							<a href="https://github.com/ishanchadha01/eeg-ml/blob/master/project/Project_Report.pdf">
								<center>
								<figure>
									<img src="/assets/eeg.png"></img>
									<figcaption>Link to Github/Paper</figcaption>
								</figure>
								</center>
							</a>
						</li>
					</div>

					<div className={edu ? "show" : "hide"}>
						<li class="event" id="date">
							<h3>Introduction to Deep Learning</h3>
							<p>
								Jun 2019
								<br></br><br></br>
								Coursera Certificate from National Research University Higher School of Economics
							</p>    
						</li>
					</div>

					<div className={edu ? "show" : "hide"}>
						<li class="event" id="date">
							<h3>Wheeler Center for Advanced Studies in Math, Science, and Technology</h3>
							<p>
								Aug 2015 - May 2019
								<br></br><br></br>
								<b>Coursework:</b> GaTech Linear Algebra, GaTech Multivariable Calculus, AP Computer Science, 
								AP Physics C: Mechanics, AP Physics C: Electromagnetism, AP Chemistry, GSU Organic Chemistry, 
								AP Calculus AB/BC, AP Statistics
								<br></br>
								<i>GPA:</i> 4.6
							</p>     
						</li>
					</div>
				</ul>
			</div>
    </>
  );
}