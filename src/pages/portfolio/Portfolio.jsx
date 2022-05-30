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
		console.log(edu);
	}, [filter]);

  return (
    <>
      <div id="timeline-content">
	      <h1>Portfolio</h1>

				<div id="myBtnContainer">
					<button class="btn" onClick={() => setFilter("all")}>Show all</button>
					<button class="btn" onClick={() => setFilter("proj")}> Projects</button>
					<button class="btn" onClick={() => setFilter("exp")}> Experience</button>
					<button class="btn" onClick={() => setFilter("research")}> Research</button>
					<button class="btn" onClick={() => setFilter("edu")}> Education</button>
				</div>
			  
				<ul class="timeline">

					<div className={edu ? "show" : "hide"}>
						<li class="event" id="date" data-date="Aug 2021 - May 2023">
							<h3>M.S. at Georgia Institute of Technology</h3>
							<p>
								<i>Coursework:</i> Computer Vision, Robot Intelligence and Planning*
								<br></br>
								<i>GPA: </i> 4.0
							</p>    
						</li>
					</div>

					<div className={edu ? "show" : "hide"}>
						<li class="event" id="date" data-date="Aug 2019 - May 2022">
							<h3>B.S. at Georgia Institute of Technology</h3>
							<p>
								<b>Coursework:</b> Prototyping*, Robotics, AI, ML, Networks, Computer Systems I and II, Algorithms I and II, Databases, 
									Object-Oriented Programming, Linear Algebra, Probability/Statistics
								<br></br>
								<i>GPA:</i> 3.9
							</p> 
						</li>
					</div>

					<div className={exp ? "show" : "hide"}>
						<li class="event" data-date="Aug 2021 - May 2022">
							<h3>Robotics and Perception Teaching Assistant</h3>
							<p>
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
						<li class="event" id="date" data-date="Jul 2021 - Present">
							<h3>Sign Language Recognition Research - Adaptive Learning and ML Infrastructure</h3>
							<p>Coming soon!
							</p>  
						</li>
					</div>

					<div className={proj ? "show" : "hide"}>
						<li class="event" data-date="Nov 2021 - Present">
							<h3>Autonomous Driving Robot</h3>
							<p>I am working on object detection in C++ for Raspberry Pi camera input and mapping output to motors through an Arduino and motor controller. I am also reading up on imitation learning and SLAM, as
								well as setting up a Live Persistent Ubuntu USB for faster processing with ROS.
							</p>
							<a href="https://github.com/ishanchadha01/autonomous-robot">Link to Github</a>
						</li>
					</div>

					<div className={research ? "show" : "hide"}>
						<li class="event" data-date="November 2021">
							<h3>President's Undergraduate Research Award</h3>
							<p>Competitively awarded funding for research
								at Georgia Tech for Spring 2022. Proposed research in the field of 
								gesture recognition with small team of other undergraduates.
							</p>
							<a href="https://github.com/ishanchadha01/autonomous-robot">Link to Github</a>
						</li>
					</div>

					<div className={research ? "show" : "hide"}>
						<li class="event" id="date" data-date="Jan - Jul 2021">
							<h3>Sign Language Recognition Research - HAR Feature Selection</h3>
							<p>I am experimenting with 2 techniques: offline methods, where I
								use output from confused signs such as in/above to train separate models,
								and online methods, where certain states can be segmentally boosted
								during training to have more weight in recognizing the sign. 
								The image below shows the joint hierarchy from which we must selectively 
								produce meaningful features.
							</p>
							<img src="images/joint-hierarchy-kinect.png" alt="picture" class="center"></img>  
						</li>
					</div>

					<div className={exp ? "show" : "hide"}>
						<li class="event" data-date="Jun - Aug 2021">
							<h3>Software Engineering Intern at Capital One</h3>
							<p>
								Tasked with designing new search architecture across voice response graph database. 
								Employed Django ORM to bring search time from 2 sec to 50 ms. 
								Optimized text embedding by replacing CharCNN with BERT in AWS S3 buckets to bring tokenization time from 50 hours to 6 hours. 
								Leveraged FAISS for similarity indexing, giving realistic, real-time responses to noisy queries with search engine in RAM. 
								Began model Dockerization and setup on AWS EC2 instance. 
								Team leader in company hackathon, producing AI customer chatbot that generates responses for Eno to train on based on past call center data.
							</p>    
						</li>
					</div>

					<div className={exp ? "show" : "hide"}>
						<li class="event" id="date" data-date="May - Jul 2021">
							<h3>Senior Algorithms Course Teaching Assistant</h3>
							<p>
								Undergraduate teaching assistant for Design and Analysis of Algorithms (CS 3510), 
								a senior computer science course at Georgia Tech, 
								teaching topics such as graph algorithms, dynamic programming, and NP completeness. 
								Also hold weekly office hours and help students one-on-one.
							</p>    
						</li>
					</div>

					<div className={research ? "show" : "hide"}>
						<li class="event" id="date" data-date="May 2021">
							<h3>1st Place at Human Factors in Computing Systems (CHI) and Publication</h3>
							<p>
								In this paper, we compared our optimized Hidden Markov Models 
								to state-of-the-art Transformer models for recognition in the 
								videos, outperforming them on both the word and sentence level.
							</p>    
							<a href="https://dl.acm.org/doi/10.1145/3411763.3451523">Link to Publication</a>
						</li>
					</div>

					<div className={exp ? "show" : "hide"}>
						<li class="event" id="date" data-date="Jan - May 2021">
							<h3>Discrete Math Teaching Assistant</h3>
							<p>
								Undergraduate teaching assistant for Honors Discrete Math for Computer Science (CS 2051) at Georgia Tech, 
								teaching topics such as graph theory, probability, and mathematical proofs for common algorithms.
							</p>    
						</li>
					</div>

					<div className={proj ? "show" : "hide"}>
						<li class="event" id="date" data-date="Apr 2021">
							<h3>Stock Trading and Analysis with Deep Learning</h3>
							<p>
								I examined the success of an LSTM-CNN for stock price prediction with basic information 
								such as the stock's close price as well as more complex indicators, 
								including sentiment analysis using BERT and anomaly detection for a currency basket. 
								The anomaly detection incorporates particle swarm optimization as a 
								more efficient alternative to the optimization step in a deep unsupervised neural network. 
							</p> 
							<a href="https://github.com/ishanchadha01/finance-intelligence">Link to Github/Paper</a>
						</li>
					</div>

					<div className={proj ? "show" : "hide"}>
						<li class="event" id="date" data-date="Jan 2021">
							<h3>Vaccine Scheduler App</h3>
							<p>
								An app for managing risk factors in developing a comprehensive approach to Covid vaccine distribution. 
								Used regression to analyze risk factors and connected backend to UI with Flask server.
							</p>    
							<a href="https://github.com/baoalvin1/vaccinescheduler">Link to Github</a>
							<br></br>
							<a href="https://www.youtube.com/watch?v=NBlF728Z9yA&t=1s">Link to Video Submission</a>
						</li>
					</div>

					<div className={exp ? "show" : "hide"}>
						<li class="event" id="date" data-date="Sep 2020 - Jan 2021">
							<h3>Computer Vision Intern at Alien Attorney</h3>
							<p>
								Applied Google Cloud Vision OCR for extracting information from legal documents. 
								Performed data augmentation and form recognition with Tensorflow. 
								Displayed functionality through Dockerized Django site.
							</p>    
						</li>
					</div>

					<div className={research ? "show" : "hide"}>
						<li class="event" id="date" data-date="Aug - Dec 2020">
							<h3>Sign Language Recognition Research - Pose Estimation Frameworks</h3>
							<p>
								Constructed pipeline for testing CMU's AlphaPose pose estimation tool 
								against Google's Mediapipe and Microsoft's Kinect. Constructed new PC 
								to run AlphaPose experiments, adding GPUs to improve performance.
							</p>  
							<img src="images/alphapose.png" alt="picture" class="center"></img>
						</li>
					</div>

					<div className={research ? "show" : "hide"}>
						<li class="event" id="date" data-date="Jan - Jul 2020">
							<h3>Sign Language Recognition Research - Visualization</h3>
							<p>Developed scripts to display Gaussians for each state of Hidden Markov Model for 
								troubleshooting purposes, as well as visualization for model topology itself. 
								Used Elan to show visualization.
							</p>    
							<img src="images/elan.png" alt="picture" class="center"></img>
						</li>
					</div>

					<div className={proj ? "show" : "hide"}>
						<li class="event" id="date" data-date="Jun 2020 - Jul 2020">
							<h3>EEG Modeling and Generation</h3>
							<p>
								Generated time-series EEG data for prediction and interpolation 
								applied to finding early onset neurological dis- orders and BCI. 
								Tested Generative Adversarial Network, Long-Short Term Memory neural network, 
								and Support Vector Regression in conjunction with Hidden Markov Model.
							</p>    
							<a href="https://github.com/ishanchadha01/eeg-ml/blob/master/project/Project_Report.pdf">Link to Github/Paper</a>
						</li>
					</div>

					<div className={edu ? "show" : "hide"}>
						<li class="event" id="date" data-date="Jun 2019">
							<h3>Introduction to Deep Learning</h3>
							<p>Coursera Certificate from National Research University Higher School of Economics</p>    
						</li>
					</div>

					<div className={edu ? "show" : "hide"}>
						<li class="event" id="date" data-date="Aug 2015 - May 2019">
							<h3>Wheeler Center for Advanced Studies in Math, Science, and Technology</h3>
							<p>
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