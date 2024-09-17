import TopNavigation from "@/app/ui/topnav";
import Link from "next/link";
import {
    ArrowDownTrayIcon,
  } from '@heroicons/react/24/outline'

export default function Page() {
    return (
        <div>
            <TopNavigation />
            <main className="flex flex-col mx-8 md:mx-36 lg:mx-64 space-y-8 pb-32">
                <div className="flex flex-col w-full my-12 space-y-2">
                    <h3 className="text-xl text-acorn-500 font-semibold">Resume</h3>
                    <h1 className="text-5xl font-bold">Jeff Border</h1>
                    <Link
                    href="/JeffBorderResume.pdf"
                    className="rounded-full px-2 py-2 hover:bg-acorn-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acorn-500 active:bg-acorn-800 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
                    <ArrowDownTrayIcon className="size-8 text-acorn-500" />
                </Link>
                    <p className="text-gray-600">10+ Years Design and Development Experience</p>
                </div>
                <div className="flex flex-col md:grid md:grid-cols-3 md:space-x-8">
                    <div className="flex flex-col md:col-span-2 mb-16">
                        <h3 className="text-xl text-acorn-500 font-semibold mb-2">Experience</h3>
                        <div className="space-y-16">
                            <section className="space-y-2">
                                <h5 className="text-2xl text-gray-800"><span className="font-bold">Senior UX/UI Designer</span> • Pluto Health • Durham, NC</h5>
                                <p className="text-gray-500">Healthcare startup that consolidates your health information and recommends actionable care recommendations</p>
                                <p>May 2024 - Current</p>
                                <ul className="list-disc ml-8 space-y-2">
                                    <li>Designed streamlined account creation flow, patient dashboard, and admin web apps</li>
                                    <li>Created design kit and documentation for iOS app and web apps</li>
                                    <li>Updated branding and created brand standards documentation</li>
                                    <li>Implemented Mixpanel tracking and created dashboard to gain insights into the experience</li>
                                </ul>
                            </section>
                            <section className="space-y-2">
                                <h5 className="text-2xl text-gray-800"><span className="font-bold">Principal UX Designer</span> • Fidelity Investments • Boston, MA</h5>
                                <p className="text-gray-500">Financial & retirement planning, investments, and wealth management</p>
                                <p>June 2022 - Apr 2024</p>
                                <ul className="list-disc ml-8 space-y-2">
                                    <li>Designed key features of the youth app through multiple rounds of concepts and stakeholder collaboration in a fast-paced environment to meet tight deadlines</li>
                                    <li>Worked hand-in-hand with developers through full process to ensure feasibility of proposed designs, hand-offs,  and QA </li>
                                    <li>Created design kit and documentation for initial rollout of the youth app, including both iOS and Material 3 components</li>
                                    <li>Collaborated with large teams of cross functional stakeholders to ensure designs meet all business and regulatory requirements</li>
                                </ul>
                            </section>
                            <section className="space-y-2">
                                <h5 className="text-2xl text-gray-800"><span className="font-bold">UX Designer</span> • Vesta Healthcare • New York, NY</h5>
                                <p className="text-gray-500">Remote monitoring healthcare startup connecting patients, caregivers, and family</p>
                                <p>Nov 2021 - Mar 2022</p>
                                <ul className="list-disc ml-8 space-y-2">
                                    <li>Created design system in Figma using Material Design as a base for ease of use and fast adoption</li>
                                    <li>Updated designs to incorporate current branding, updated visuals, and design patterns</li>
                                    <li>Worked with stakeholders to build new features into current internal applications</li>
                                </ul>
                            </section>
                            <section className="space-y-2">
                                <h5 className="text-2xl text-gray-800"><span className="font-bold">Senior UX/UI Designer</span> • Geisinger Health System • Danville, PA</h5>
                                <p className="text-gray-500">Regional hospital system known for innovation and forward thinking approach to healthcare</p>
                                <p>May 2018 - Nov 2021</p>
                                <ul className="list-disc ml-8 space-y-2">
                                    <li>As a team of one, lead design on the product innovation team and responsible for guiding the team through all phases of the design process</li>
                                    <li>Introduced and began implementing design process and design thinking with the team, working towards scaling and operationalizing design throughout the organization</li>
                                    <li>Lead designer for initial phase of company's digital transformation working with teams across the enterprise and stakeholders at all levels</li>
                                    <li>Worked with cross functional team members to begin implementing SCRUM/LeanUX processes, as well as developing mission statement and values to improve team culture</li>
                                    <li>Presented and evangelized design to product team and key leadership positions</li>
                                    <li>Conducted research including interviews, site visits, job shadowing, contextual inquiries and surveys to better understand customer needs</li>
                                    <li>Created documentation including personas, current and future state journey maps, affinity diagrams, idea prioritization graphs to align stakeholders with product team</li>
                                    <li>Created wireframes and prototypes for new products</li>
                                    <li>Presented to product team and key leadership design feature decisions determined through user research and best practice</li>
                                </ul>
                            </section>
                            <section className="space-y-2">
                                <h5 className="text-2xl text-gray-800"><span className="font-bold">Front End Software Engineer</span> • Geisinger Health System • Danville, PA</h5>
                                <p className="text-gray-500">Regional hospital system known for innovation and forward thinking approach to healthcare</p>
                                <p>Jun 2011 - May 2018</p>
                                <ul className="list-disc ml-8 space-y-2">
                                    <li>Originated idea for and wrote proposal that resulted in over a million-dollar collaboration with AstraZeneca to create a healthcare social network and integrated electronic health record application that brings doctors and patients together to transform patient care</li>
                                    <li>Designed and developed several multi-million dollar joint projects with Merck to create patient and provider collaboration applications that facilitate patients' heart disease and diabetes care and education</li>
                                    <li>Architected a health application and survey management system for patient and provider applications</li>
                                    <li>Gathered and analyzed business requirements with subject matter experts(SMEs) to define project requirements and design tools to improve patients' understanding of conditions and empower the patients</li>
                                    <li>Learned through self education, introduced team to, and implemented AngularJS and Angular Material to update development stack for future projects</li>
                                    <li>Advised the department to move to REST APIs to help prepare the organization for future development</li>
                                    <li>Created wireframes and mockups for all projects</li>
                                    <li>Advised management to incorporate 360 feedback/lessons learned reviews, one-on-one's, and daily stand-ups</li>
                                    <li>Introduced needs analysis techniques such as interviewing and job-shadowing to flush out project details and provide clear objectives and direction of projects</li>
                                    <li>Implemented front-end workflow management tools to streamline front-end development and created SOPs</li>
                                </ul>
                            </section>
                            <section className="space-y-2">
                                <h5 className="text-2xl text-gray-800"><span className="font-bold">Instructional Technologist</span> • Guardian Life Insurance • Bethlehem, PA</h5>
                                <p className="text-gray-500">Financial & retirement planning, investments, and wealth management</p>
                                <p>Oct 2007 - May 2011</p>
                                <ul className="list-disc ml-8 space-y-2">
                                    <li>Supported internal clients and external vendors to create, update, and troubleshoot courses while providing end-user support as a Learning Management System (LMS) administrator</li>
                                    <li>Advised management on future direction and planning of company eLearning and kept them informed of new technologies  including SCORM, development tools, and programming languages</li>
                                    <li>Developed custom eLearning courses and created interactive Flash and XML templates for rapid course development</li>
                                    <li>Constructed a customized Flash and XML driven course player that streamlined development, and content creation using Captivate, Flash, and PowerPoint generated swfs</li>
                                    <li>Participated as a member of the Online Best Practices Team to discuss direction, planning, and implementation of new eLearning practices including introducing new technologies and standards</li>
                                    <li>Supported instructional designers and trainers through the creation of multimedia using Captivate, Photoshop, and Flash</li>
                                </ul>
                            </section>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-8 md:col-span-1">
                        <section>
                            <h3 className="text-xl text-acorn-500 font-semibold">Skills</h3>
                            <p>LeanUX, Design Thinking, Agile/SCRUM, Design Evangelism and Education</p>
                        </section>
                        <section>
                            <h3 className="text-xl text-acorn-500 font-semibold">Deliverables</h3>
                            <p>Design systems, User personas, Journey maps, Wireframing, Prototyping, Affinity diagrams</p>
                        </section>
                        <section>
                            <h3 className="text-xl text-acorn-500 font-semibold">Tools</h3>
                            <p>Figma, Adobe XD, UserTesting, Adobe CC, VS Code</p>
                        </section>
                        <section>
                            <h3 className="text-xl text-acorn-500 font-semibold">Education</h3>
                            <div><h5 className="font-semibold">Bloomsburg University
                            </h5>
                                <p>Master of Science in Instructional Design & Technology</p>
                            </div>
                            <div><h5 className="font-semibold">Bloomsburg University
                            </h5>
                                <p>‍Bachelor of Science in Business Administration Finance concentration</p>
                            </div>
                            <div><h5 className="font-semibold">Professional Scrum with UX(PSU) Certification
                            </h5>
                                <p>Scrum.org • 2020</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}

