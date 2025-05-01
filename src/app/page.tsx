import JobCard from "@/components/job-card"; // Import JobCard component
import Marquee from "@/components/ui/marquee";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, Twitter } from "lucide-react";
import React from "react";
import ContactDialog from "@/components/contact";

export default function Home() {
	return (
		<main className="h-full w-full flex flex-col items-center my-4 px-2 sm:my-8 sm:px-0">
			{/* Blank homepage - add portfolio content here */}
			<Marquee items={["SELF", "SELF", "SELF", "SELF", "SELF", "SELF", "SELF", "SELF", "SELF", "SELF", "SELF", "SELF", "SELF", "SELF", "SELF", "SELF", "SELF", "SELF"]} />

			<div className="w-full sm:px-16">
				<div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-0">
					<div className="flex flex-col items-center min-w-[220px] sm:min-w-96 w-full max-w-xs">
						<img src="images/lainthing.png" alt="lainthing" className="neobrutal neo-shadow-large w-64 h-auto" />
						<div className="mt-6 mb-4 text-center neobrutal-secondary px-4 py-1 w-full">
							<h3 className="text-2xl sm:text-3xl underline">
								Joshua Rodriguez
							</h3>
							<h5 className="text-base sm:text-lg">
								Full Stack Developer @ Boston, MA
							</h5>
						</div>
						<h2 className="text-lg sm:text-2xl neobrutal-secondary px-4 w-full text-center">
							7 Years of experience
						</h2>
						
					</div>
					<Tabs defaultValue="personal" className="w-full lg:ml-16 mt-8 lg:mt-0">
						<TabsList className="px-2 sm:px-4 py-2 text-lg sm:text-2xl h-fit neobrutal-secondary flex flex-wrap gap-2">
							<TabsTrigger value="personal" className="text-lg sm:text-2xl">The Person</TabsTrigger>
						</TabsList>
						<TabsContent value="personal">
							<div className="neobrutal-secondary ">
								<div className="w-full p-2 sm:p-4">
									<p className="text-xs sm:text-base">
										<span className="text-base sm:text-xl font-medium">
											Hey, welcome to my website, I build a lot of different stuff. A lot of <span className="neobrutal px-2 !shadow-none text-nowrap">great stuff</span>, the <span className="neobrutal px-2 !shadow-none text-nowrap">best stuff</span> you could say.
										</span>
										<br />
										<br />
										You can&apos;t find any of it though, because I can&apos;t finish any of it. Anything I do finish, It&apos;ll be right here.
										I&apos;ve been working for different companies for a while now, I have about 7 years of experience. And recently I&apos;ve been doing a lot of contract work,
										I&apos;m just looking for a company I can really focus on. Somewhere I can excel, put 110%, and contribute to a project I can be really proud in.
										So while I&apos;m doing all these smaller contracts, I&apos;m putting work into my passions. Projects I&apos;ve been putting off throughout the years, build my online presence
										and contribute more to the dev space.
										<br />
										<br />
										On my leisure, I enjoy a number of different things, I&apos;m a big car enthusiast, I put a lot of work into my car, and cruise around with my buddies (much to the detriment of my wallet).
										I also enjoy to watch films, big fan of tarantino movies, spaghetti westerns (Man with no name trilogy is peak), and grand strategy games, particularly paradox games (mainly eu4).
									</p>
									<div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4">
										<a target="_blank" className="flex gap-2 sm:gap-3 neobrutal-base w-full sm:w-fit p-2 sm:p-4 justify-center" href="https://x.com/GohostV1" >
											<div className="flex gap-1 items-center">
												<Twitter /> <span className="hidden sm:inline">Twitter</span>
											</div>
											<Link />
										</a>
										<a className="flex gap-2 sm:gap-3 neobrutal-base w-full sm:w-fit p-2 sm:p-4 justify-center"  >
											Discord @ gohost
										</a>
										<a className="flex gap-2 sm:gap-3 neobrutal-base w-full sm:w-fit p-2 sm:p-4 justify-center"  >
											Joshua@webv1.com
										</a>
										<ContactDialog />

									</div>
								</div>
							</div>
						</TabsContent>
					</Tabs>
				</div>
				<div className="my-8 flex flex-col items-center w-full gap-12">
					{/* Example Job Card */}
					<JobCard
						title="Senior Software Engineer"
						subtitle="UMG"
						description={<div>
							<span className="text-lg">
								Joined UMG’s CRM team to assist in the transition from Firebase to a robust PostgreSQL and Kubernetes infrastructure. Effectively navigated and implemented changes across two distinct CRM systems in an Agile environment, ensuring smooth migration and continuity of data and services
							</span>
							<ul className="list-disc ml-8 mt-2 space-y-2 text-base">
								<li>
									Optimized Query Algorithms to Boost Load Times by 86%: Designed and implemented query algorithm optimizations that dramatically improved performance, reducing load times from 30 seconds to approximately 4 seconds by optimizing data retrieval and minimizing parsed records. This enhancement significantly improved system responsiveness and user satisfaction.
								</li>
								<li>
									Developed CSV Parsing Tool for Efficient Data Import into BigQuery: Created a custom CSV parsing tool to facilitate seamless data import into BigQuery, enabling rapid handling of large data sets. Collaborated closely with the Data Analytics team to test and validate thousands of records across development, QA, and production stages, ensuring accuracy and consistency in data migration.
								</li>
								<li>
									Collaborated with Director of Product Management for UX Improvements: Proactively worked with the Director of Product Management to gather cross-functional feedback, translating user needs into actionable improvements. This collaboration led to substantial user experience enhancements across the CRM platform, aligning product functionality with user expectations.
								</li>
								<li>
									Enhanced Search Algorithm for Improved Query Precision: Upgraded the search algorithm to support composite queries and complex filtering options, enabling users to narrow down extensive datasets (e.g., from 100 results to a select few) or conduct broader searches (e.g., by country). These upgrades resulted in more precise and efficient search capabilities, improving user productivity and data accessibility.
								</li>
							</ul>
						</div>}
						tags={["TypeScript", "React", "GCP", "BigQuery", "Kubernetes", "Firebase", "Node.js"]}
						imageUrl="images/umg.jpg"
						dateRange="2023 – 2024"
					/>

					<JobCard
						title="Senior Software Engineer"
						subtitle="Penrose"
						description={<>
							<span className="text-lg">
								Spearheaded the creation of a comprehensive cloud server hosting platform, overseeing end-to-end development from frontend to backend. Leveraged React for an intuitive, responsive UI and utilized Node.js and Golang on the backend to optimize server interactions with a Kubernetes cluster hosted on DigitalOcean. This platform enabled users to deploy, manage, and monitor servers seamlessly, driving up the userbase by 73% within the first year.
							</span>
							<ul className="list-disc ml-8 mt-2 space-y-2 text-base">
								<li>Implemented Server Deployment Automation and Maintenance Scheduling: Developed a robust deployment system that enabled users to spin up Kubernetes-hosted servers with Dockerized images. Integrated Lambda functions to automate deployment management and scheduled maintenance, reducing manual workload and increasing deployment efficiency.</li>
								<li>Optimized Performance Through Strategic Backend Migration: Transitioned backend operations from Node.js to Golang, leveraging Golang’s Kubernetes ecosystem libraries to boost reliability and response times. This migration led to a 94% reduction in runtime errors and a 40% increase in system stability.</li>
								<li>Redesigned Client-Side Architecture with Next.js for Enhanced UX: Transformed a CRA site using Next.js conventions, implementing SSR and useMemo hooks to decrease load times by 60%, improving site responsiveness and reducing bounce rate by 25%.</li>
								<li>Enhanced CI/CD Pipelines for Streamlined Deployment: Set up Jenkins for build automation and ArgoCD for continuous delivery to Kubernetes, decreasing deployment time by 58% and supporting Agile workflows.</li>
								<li>Collaborated with Business Analysts for User-Centric Improvements: Translated data insights into impactful UI/UX adjustments, increasing user retention and aligning platform design with user expectations.</li>
								<li>Exhibited Agile Methodology and Strong Team Collaboration: Demonstrated adaptability and technical leadership in Agile sprints, balancing independent initiative with collaborative problem-solving to advance project timelines.</li>
							</ul>
					</>}
					tags={["React", "Node.js", "Golang", "Kubernetes", "DigitalOcean", "Next.js", "Jenkins", "ArgoCD", "Docker", "Lambda"]}
					imageUrl="images/penrose.png"
					dateRange="Apr 2020 – Jun 2023"
				/>

					<JobCard
						title="Software Instructor"
						subtitle="CodeWizardsHQ"
						description={<>
							<span className="text-lg">
								Passionate about empowering young minds to excel in technology, creating a positive and engaging classroom environment that fosters curiosity, creativity, and skill development in programming.
							</span>
							<ul className="list-disc ml-8 mt-2 space-y-2 text-base">
								<li>Experienced Educator for Ages 8-18 in Diverse Technology Topics: Proficient in teaching and mentoring students on programming principles, best practices, and advanced technologies, adapting to each student’s learning style and skill level.</li>
								<li>Provided Personalized, Constructive Feedback to Enhance Student Growth: Delivered individualized feedback to support skill progression and critical thinking, guiding students toward independent problem-solving.</li>
								<li>Continuously Updated Course Content to Reflect Technological Advances: Revised and enhanced course materials to include the latest advancements, integrating new tools, frameworks, and real-world applications.</li>
							</ul>
					</>}
					tags={["Education", "Python", "JavaScript", "Mentorship", "Curriculum Design"]}
					imageUrl="images/cwhq.png"
					dateRange="June 2021 – July 2022"
				/>

					<JobCard
						title="Software Engineer"
						subtitle="Loop Media"
						description={<>
							<span className="text-lg">
								Became a vital member of Loop Media&apos;s web development team during a high-growth phase, quickly mastering the company&apos;s proprietary content management and streaming systems to support their expanding platform and user base.
							</span>
							<ul className="list-disc ml-8 mt-2 space-y-2 text-base">
								<li>Delivered Key UI/UX and Platform Enhancements: Contributed targeted UI/UX improvements that enhanced engagement and streamlined content delivery workflows, improving viewer retention and satisfaction.</li>
								<li>Developed Strategic Project Roadmaps for Success: Created detailed project roadmaps with clear milestones and performance metrics, enabling efficient execution of complex projects.</li>
								<li>Proficiently Transitioned Between React and React Native: Maintained consistency and high standards across web and mobile codebases, ensuring a cohesive user experience.</li>
								<li>Collaborated with Cross-Functional Teams to Drive Performance: Fostered strong partnerships with product managers, designers, and backend developers, enhancing project efficiency and innovation.</li>
								<li>Implemented Git Best Practices for Streamlined Development: Established and maintained efficient code tracking, branching, and merging, optimizing collaboration and deployment.</li>
							</ul>
					</>}
					tags={["React", "React Native", "UI/UX", "Project Management", "Git"]}
					imageUrl="images/loopmedia.png"
					dateRange="Feb 2018 – May 2020"
				/>

					<JobCard
						title="Backend Engineer"
						subtitle="NDA"
						description={<>
							<span className="text-lg">
								Engineered an advanced data scraping algorithm that generated a real-time, comprehensive dataset of current stock market information for the client. Utilized Python with BeautifulSoup and Selenium to extract data from multiple financial websites, navigating through dynamic content and interactive elements.
							</span>
							<ul className="list-disc ml-8 mt-2 space-y-2 text-base">
								<li>Implemented Reverse Engineering for High-Performance Data Extraction: Used reverse engineering on CoinBase’s front-end to dynamically load and process vast amounts of data, parsing over 1,000 rows per second.</li>
								<li>Developed a Flask-Based REST API for Data Visualization: Built and deployed a RESTful API using Flask, integrated with MATLAB, NumPy, and Pandas to display key financial metrics in interactive graphs and charts for client insights.</li>
							</ul>
					</>}
					tags={["Python", "Selenium", "BeautifulSoup", "Flask", "APIs", "Data Visualization"]}
					imageUrl="images/nda.png"
					dateRange="Oct 2017 – Jun 2018"
				/>
				</div>
			</div>
		</main>
	);
}
